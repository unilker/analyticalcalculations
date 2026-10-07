import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { parseList, parseNumber, parseTable } from '../../core/format';
import { kineticOrders, leastSquares, lineweaverBurk, twoLineFit } from '../../core/fitting';
import { isotopePattern } from '../../core/massSpec';
import { controlChart, factorialEffects, samplesNeeded, screening, uncertaintyBudget, youdenEffects } from '../../core/quality';
import { tCritical } from '../../core/stats';
import { useApp } from '../../i18n/AppSettings';
import { colors, palette } from '../../theme/colors';
import { BarChart } from '../BarChart';
import { LineChart } from '../LineChart';
import { Button, Card, Chip, Field, Notice, ResultBox, SectionTitle, StatRow, Verdict, styles as ui } from '../ui';
import { ConfidencePicker, DataCard, pct, type ToolProps } from './common';

function useL() {
  const { lang } = useApp();
  return (tr: string, en: string) => (lang === 'tr' ? tr : en);
}

// ---------------- uncertainty budget ----------------

export function UncertaintyBudgetTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [rows, setRows] = useState([
    { name: 'm (KHP, g)', value: '0.3888', u: '0.00013' },
    { name: 'P (saflık)', value: '1.0000', u: '0.00029' },
    { name: 'M (KHP, g/mol)', value: '204.2212', u: '0.0038' },
    { name: 'V (NaOH, mL)', value: '18.64', u: '0.013' },
  ]);
  const [result, setResult] = useState('0.10214');
  const [k, setK] = useState('2');
  const parsed = rows.map((r) => ({ name: r.name, value: parseNumber(r.value), u: parseNumber(r.u) }));
  const ok = parsed.length > 0 && parsed.every((r) => Number.isFinite(r.value) && r.value !== 0 && Number.isFinite(r.u) && r.u >= 0) && parseNumber(k) > 0;
  const b = ok ? uncertaintyBudget(parsed, parseNumber(k)) : undefined;
  const y = parseNumber(result);
  const update = (i: number, patch: Partial<(typeof rows)[0]>) => setRows(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Girdiler (çarpım/bölüm modeli)', 'Inputs (product/quotient model)')}</SectionTitle>
        {rows.map((r, i) => (
          <View key={i} style={{ gap: 6, paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: colors.border }}>
            <TextInput value={r.name} onChangeText={(s) => update(i, { name: s })} style={[ui.input, { fontSize: 15, paddingVertical: 6 }]} />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={{ flex: 1 }}>
                <Field label={L('Değer', 'Value')} value={r.value} onChangeText={(s) => update(i, { value: s })} color={color} />
              </View>
              <View style={{ flex: 1 }}>
                <Field label={L('Standart belirsizlik u', 'Standard uncertainty u')} value={r.u} onChangeText={(s) => update(i, { u: s })} color={color} />
              </View>
            </View>
          </View>
        ))}
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Button label={L('+ Girdi ekle', '+ Add input')} onPress={() => setRows([...rows, { name: `x${rows.length + 1}`, value: '', u: '' }])} color={color} outline />
          {rows.length > 1 && <Button label={L('Sonuncuyu sil', 'Remove last')} onPress={() => setRows(rows.slice(0, -1))} color={colors.textMuted} outline />}
        </View>
        <Field label={L('Sonuç y (isteğe bağlı, mutlak belirsizlik için)', 'Result y (optional, for absolute uncertainty)')} value={result} onChangeText={setResult} color={color} />
        <Field label={L('Kapsam faktörü k', 'Coverage factor k')} value={k} onChangeText={setK} color={color} />
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L('B tipi belirsizlikler için ±a toleransını √3 (dikdörtgen) ya da √6 (üçgen) ile bölün.', 'For type B uncertainties divide a ±a tolerance by √3 (rectangular) or √6 (triangular).')}
        </Text>
      </Card>
      {b ? (
        <>
          <ResultBox>
            <StatRow label={L('Bağıl birleşik belirsizlik u_c/y', 'Relative combined uncertainty u_c/y')} value={`${fmt(100 * b.uRel)} %`} strong />
            <StatRow label={L('Bağıl genişletilmiş belirsizlik U/y', 'Relative expanded uncertainty U/y')} value={`${fmt(100 * b.expandedRel)} %`} strong />
            {Number.isFinite(y) && <StatRow label="y ± U" value={`${fmt(y)} ± ${fmt(Math.abs(y) * b.expandedRel)}`} strong />}
          </ResultBox>
          <Card>
            <SectionTitle color={color}>{L('Varyansa katkılar', 'Contributions to variance')}</SectionTitle>
            <BarChart bars={parsed.map((r, i) => ({ label: r.name.split(' ')[0], value: 100 * b.contributions[i] }))} color={color} valueLabel={(v) => `${fmt(v)}%`} />
          </Card>
        </>
      ) : (
        <Notice text={L('Tüm değerleri (sıfırdan farklı) ve belirsizlikleri girin.', 'Enter all (non-zero) values and uncertainties.')} />
      )}
    </View>
  );
}

// ---------------- control chart ----------------

export function ControlChartTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [raw, setRaw] = useState('10.02 9.98 10.05 9.97 10.01 10.03 9.96 10.00 10.04 9.99 10.02 10.21 10.06 10.08 10.07 10.05 10.09 10.06 10.08');
  const [c0, setC0] = useState('10.00');
  const [s0, setS0] = useState('0.04');
  const x = parseList(raw);
  const c = parseNumber(c0);
  const s = parseNumber(s0);
  const ok = x.length >= 3;
  const chart = ok ? controlChart(x, Number.isFinite(c) ? c : undefined, s > 0 ? s : undefined) : undefined;
  const flagged = new Set(chart?.violations.map((v) => v.index));
  const ruleText = { '3s': L('±3s dışında', 'beyond ±3s'), '2of3': L('3 noktadan 2\'si ±2s dışında', '2 of 3 beyond ±2s'), run7: L('7 nokta merkezin aynı tarafında', '7 points on one side') };
  const idx = x.map((_, i) => i + 1);
  const hline = (v: number) => idx.map((i) => [i, v] as [number, number]);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={L('Kontrol numunesi sonuçları (sırayla)', 'Control-sample results (in order)')} value={raw} onChange={setRaw} color={color} rows={3}>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <Field label={L('Merkez çizgi (boşsa ortalama)', 'Centre line (blank = mean)')} value={c0} onChangeText={setC0} color={color} />
          </View>
          <View style={{ flex: 1 }}>
            <Field label={L('s (boşsa verinin s\'si)', 's (blank = data s)')} value={s0} onChangeText={setS0} color={color} />
          </View>
        </View>
      </DataCard>
      {chart ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Sonuçlar', 'Results'), color: palette.navy, points: x.map((v, i) => [i + 1, v]) },
                { label: L('Kontrol dışı', 'Out of control'), color: palette.red, points: x.map((v, i) => [i + 1, v] as [number, number]).filter((_, i) => flagged.has(i)), scatter: true },
                { label: '±2s', color: palette.amber, points: hline(chart.uwl), dashed: true },
                { label: '±2s ', color: palette.amber, points: hline(chart.lwl), dashed: true },
                { label: '±3s', color: palette.red, points: hline(chart.ucl), dashed: true },
                { label: '±3s ', color: palette.red, points: hline(chart.lcl), dashed: true },
                { label: L('Merkez', 'Centre'), color: palette.green, points: hline(chart.center) },
              ]}
              xLabel={L('Ölçüm no', 'Run')}
              yLabel="x"
              yDomain={[chart.center - 4 * chart.s, chart.center + 4 * chart.s]}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Merkez çizgi', 'Centre line')} value={fmt(chart.center)} />
            <StatRow label={L('Uyarı sınırları (±2s)', 'Warning limits (±2s)')} value={`${fmt(chart.lwl)} – ${fmt(chart.uwl)}`} />
            <StatRow label={L('Eylem sınırları (±3s)', 'Action limits (±3s)')} value={`${fmt(chart.lcl)} – ${fmt(chart.ucl)}`} />
            <Verdict
              positive={chart.violations.length > 0}
              text={chart.violations.length ? L('Kontrol dışı durum var', 'Out-of-control condition') : L('Süreç kontrol altında', 'Process in control')}
            />
            {chart.violations.map((v, i) => (
              <Text key={i} style={{ fontSize: 14, color: colors.danger }}>
                • {L('Ölçüm', 'Run')} {v.index + 1}: {ruleText[v.rule]}
              </Text>
            ))}
          </ResultBox>
        </>
      ) : (
        <Notice text={L('En az 3 sonuç girin.', 'Enter at least 3 results.')} />
      )}
    </View>
  );
}

// ---------------- Youden ruggedness ----------------

const FACTORS = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const YOUDEN_LETTERS = ['l', 'm', 'p', 'w', 'v', 'x', 'y', 'z'];

export function YoudenTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [res, setRes] = useState(['5.04', '5.12', '5.08', '5.15', '4.95', '5.03', '4.99', '5.06']);
  const [names, setNames] = useState(['pH', L('Sıcaklık', 'Temperature'), L('Süre', 'Time'), L('Akış hızı', 'Flow rate'), L('Reaktif', 'Reagent'), L('Çözücü', 'Solvent'), L('Analist', 'Analyst')]);
  const [s, setS] = useState('0.03');
  const [dof, setDof] = useState('9');
  const [conf, setConf] = useState(0.95);
  const r = res.map(parseNumber);
  const ok = r.every(Number.isFinite);
  const effects = ok ? youdenEffects(r) : [];
  const sN = parseNumber(s);
  const nu = Math.round(parseNumber(dof));
  const crit = sN > 0 && nu >= 1 ? (tCritical(conf, nu) * sN) / Math.SQRT2 : NaN;
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Sekiz deneyin sonuçları', 'Results of the eight experiments')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {res.map((v, i) => (
            <View key={i} style={{ width: '22%', flexGrow: 1 }}>
              <Field label={`${i + 1} (${YOUDEN_LETTERS[i]})`} value={v} onChangeText={(t) => setRes(res.map((q, j) => (j === i ? t : q)))} color={color} />
            </View>
          ))}
        </View>
        <SectionTitle color={color}>{L('Faktör adları', 'Factor names')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {names.map((n, i) => (
            <View key={i} style={{ width: '30%', flexGrow: 1, gap: 4 }}>
              <Text style={{ fontSize: 13, fontWeight: '700', color: colors.textMuted }}>{FACTORS[i]}</Text>
              <TextInput value={n} onChangeText={(t) => setNames(names.map((q, j) => (j === i ? t : q)))} style={[ui.input, { fontSize: 14, paddingVertical: 6 }]} />
            </View>
          ))}
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <Field label={L('Yöntemin s değeri', 'Method s')} value={s} onChangeText={setS} color={color} />
          </View>
          <View style={{ flex: 1 }}>
            <Field label={L('s\'nin serbestlik derecesi', 'Degrees of freedom of s')} value={dof} onChangeText={setDof} color={color} />
          </View>
        </View>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L(
            'Tasarım (büyük harf = nominal düzey): 1 ABCDEFG · 2 ABcDefg · 3 AbCdEfg · 4 AbcdeFG · 5 aBCdeFg · 6 aBcdEfG · 7 abCDefG · 8 abcDEFg',
            'Design (capital = nominal level): 1 ABCDEFG · 2 ABcDefg · 3 AbCdEfg · 4 AbcdeFG · 5 aBCdeFg · 6 aBcdEfG · 7 abCDefG · 8 abcDEFg',
          )}
        </Text>
      </Card>
      {ok ? (
        <>
          <Card>
            <BarChart bars={effects.map((e, i) => ({ label: FACTORS[i], value: e, highlight: Number.isFinite(crit) ? Math.abs(e) > crit : undefined }))} color={color} valueLabel={(v) => fmt(v)} />
          </Card>
          <ResultBox>
            {Number.isFinite(crit) && <StatRow label={`${L('Kritik fark', 'Critical difference')} t·s/√2`} value={fmt(crit)} strong />}
            {effects
              .map((e, i) => ({ e, i }))
              .sort((a, b) => Math.abs(b.e) - Math.abs(a.e))
              .map(({ e, i }) => (
                <StatRow
                  key={i}
                  label={`${FACTORS[i]} — ${names[i]}${Number.isFinite(crit) && Math.abs(e) > crit ? L('  ⚠ önemli', '  ⚠ significant') : ''}`}
                  value={fmt(e)}
                  strong={Number.isFinite(crit) && Math.abs(e) > crit}
                />
              ))}
          </ResultBox>
        </>
      ) : (
        <Notice text={L('Sekiz sonucun hepsini girin.', 'Enter all eight results.')} />
      )}
    </View>
  );
}

// ---------------- factorial design ----------------

export function FactorialTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [k, setK] = useState(2);
  const [vals, setVals] = useState(['40', '60', '45', '75', '42', '65', '48', '82']);
  const runs = ['(1)', 'a', 'b', 'ab', 'c', 'ac', 'bc', 'abc'].slice(0, 2 ** k);
  const y = vals.slice(0, 2 ** k).map(parseNumber);
  const ok = y.every(Number.isFinite);
  const effects = ok ? factorialEffects(k, y) : [];
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Faktör sayısı', 'Number of factors')}</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {[2, 3].map((n) => (
            <Chip key={n} label={`2${n === 2 ? '²' : '³'} (${2 ** n} ${L('deney', 'runs')})`} selected={k === n} onPress={() => setK(n)} color={color} small />
          ))}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {runs.map((r, i) => (
            <View key={r} style={{ width: '22%', flexGrow: 1 }}>
              <Field label={r} value={vals[i]} onChangeText={(t) => setVals(vals.map((q, j) => (j === i ? t : q)))} color={color} />
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L('Standart (Yates) sırası: küçük harf, o faktörün yüksek düzeyde olduğunu gösterir; (1) tüm faktörler düşük düzeyde.', 'Standard (Yates) order: a lower-case letter marks that factor at its high level; (1) = all factors low.')}
        </Text>
      </Card>
      {ok && (
        <>
          <Card>
            <BarChart bars={effects.map((e) => ({ label: e.label, value: e.effect }))} color={color} valueLabel={(v) => fmt(v)} />
          </Card>
          <ResultBox>
            <StatRow label={L('Genel ortalama', 'Grand mean')} value={fmt(y.reduce((a, b) => a + b, 0) / y.length)} />
            {effects.map((e) => (
              <StatRow key={e.label} label={`${e.label.length > 1 ? L('Etkileşim', 'Interaction') : L('Ana etki', 'Main effect')} ${e.label}`} value={fmt(e.effect)} strong={e.label.length === 1} />
            ))}
          </ResultBox>
        </>
      )}
    </View>
  );
}

// ---------------- screening test ----------------

export function ScreeningTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [v, setV] = useState({ tp: '45', fp: '3', tn: '147', fn: '5' });
  const n = Object.fromEntries(Object.entries(v).map(([k, s]) => [k, parseNumber(s)])) as Record<keyof typeof v, number>;
  const ok = Object.values(n).every((x) => Number.isFinite(x) && x >= 0) && n.tp + n.fn > 0 && n.tn + n.fp > 0;
  const r = ok ? screening(n.tp, n.fp, n.tn, n.fn) : undefined;
  const f = (key: keyof typeof v, label: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={v[key]} onChangeText={(s) => setV({ ...v, [key]: s })} color={color} />
    </View>
  );
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('tp', L('Doğru pozitif (TP)', 'True positive (TP)'))}
          {f('fp', L('Yanlış pozitif (FP)', 'False positive (FP)'))}
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('fn', L('Yanlış negatif (FN)', 'False negative (FN)'))}
          {f('tn', L('Doğru negatif (TN)', 'True negative (TN)'))}
        </View>
      </Card>
      {r && (
        <ResultBox>
          <StatRow label={L('Duyarlılık (TPR)', 'Sensitivity (TPR)')} value={`${fmt(100 * r.sensitivity)} %`} strong />
          <StatRow label={L('Özgüllük (TNR)', 'Specificity (TNR)')} value={`${fmt(100 * r.specificity)} %`} strong />
          <StatRow label={L('Pozitif öngörü değeri (PPV)', 'Positive predictive value (PPV)')} value={`${fmt(100 * r.ppv)} %`} />
          <StatRow label={L('Negatif öngörü değeri (NPV)', 'Negative predictive value (NPV)')} value={`${fmt(100 * r.npv)} %`} />
          <StatRow label={L('Yanlış pozitif oranı', 'False-positive rate')} value={`${fmt(100 * r.fpr)} %`} />
          <StatRow label={L('Yanlış negatif oranı', 'False-negative rate')} value={`${fmt(100 * r.fnr)} %`} />
          <StatRow label={L('Doğruluk', 'Accuracy')} value={`${fmt(100 * r.accuracy)} %`} />
        </ResultBox>
      )}
    </View>
  );
}

// ---------------- number of samples ----------------

export function SamplesNumberTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [s, setS] = useState('2.0');
  const [e, setE] = useState('0.80');
  const [conf, setConf] = useState(0.95);
  const sN = parseNumber(s);
  const eN = parseNumber(e);
  const r = sN > 0 && eN > 0 ? samplesNeeded(sN, eN, conf) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <Field label={L('Örnekleme bağıl standart sapması s_s (%)', 'Relative sampling std. deviation s_s (%)')} value={s} onChangeText={setS} color={color} />
        <Field label={L('İzin verilen bağıl örnekleme hatası e (%)', 'Allowed relative sampling error e (%)')} value={e} onChangeText={setE} color={color} />
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </Card>
      {r ? (
        <ResultBox>
          <StatRow label={L('Gereken numune sayısı', 'Samples needed')} value={String(r.n)} strong />
          <StatRow label={L('İterasyonlar', 'Iterations')} value={r.iterations.join(' → ')} />
          <Text style={{ fontSize: 13, color: colors.textMuted }}>
            {L(`İlk tahmin z ile, sonrakiler t(${pct(conf)}, n−1) ile yapıldı.`, `First estimate with z, then t(${pct(conf)}, n−1).`)}
          </Text>
          {r.n > 100 && <Text style={{ fontSize: 13, color: palette.orange }}>{L('Çok sayıda numune gerekiyor; daha büyük numune kütlesi (Ingamells) kullanmayı düşünün.', 'Many samples are needed; consider larger sample masses (Ingamells).')}</Text>}
          <Text style={{ fontSize: 12, color: colors.textMuted }}>{fmt(sN)} % / {fmt(eN)} %</Text>
        </ResultBox>
      ) : (
        <Notice text={L('Pozitif değerler girin.', 'Enter positive values.')} />
      )}
    </View>
  );
}

// ---------------- isotope pattern ----------------

export function IsotopePatternTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [f, setF] = useState('C6H5Br');
  const r = isotopePattern(f);
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Molekül formülü', 'Molecular formula')}</SectionTitle>
        <TextInput value={f} onChangeText={setF} autoCapitalize="none" autoCorrect={false} style={[ui.input, { fontSize: 20 }]} />
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
          {['CH2Cl2', 'C6H5Br', 'C8H10N4O2', 'C10H22', 'CHBr3'].map((x) => (
            <Chip key={x} label={x} small color={color} onPress={() => setF(x)} />
          ))}
        </View>
        <Text style={{ fontSize: 12, color: colors.textMuted }}>{L('Desteklenen elementler: H, B, C, N, O, F, Na, Si, P, S, Cl, K, Br, I.', 'Supported elements: H, B, C, N, O, F, Na, Si, P, S, Cl, K, Br, I.')}</Text>
      </Card>
      {r.ok ? (
        <>
          <Card>
            <BarChart bars={r.peaks.filter((p) => p.relative >= 0.1).map((p) => ({ label: p.offset === 0 ? 'M' : `M+${p.offset}`, value: p.relative }))} color={color} valueLabel={(v) => fmt(v)} />
          </Card>
          <ResultBox>
            <StatRow label={L('Monoizotopik kütle', 'Monoisotopic mass')} value={`${r.monoisotopic.toFixed(4)} u`} strong />
            <StatRow label={L('Ortalama molar kütle', 'Average molar mass')} value={`${fmt(r.average)} g/mol`} />
            {r.dbe !== undefined && <StatRow label={L('Halka + çift bağ (DBE)', 'Rings + double bonds (DBE)')} value={fmt(r.dbe)} strong />}
            {r.peaks.filter((p) => p.relative >= 0.1).map((p) => (
              <StatRow key={p.offset} label={`${p.offset === 0 ? 'M' : `M+${p.offset}`} (${p.mass.toFixed(4)})`} value={`${fmt(p.relative)} %`} />
            ))}
          </ResultBox>
        </>
      ) : f.trim() ? (
        <Notice
          tone="error"
          text={r.error.startsWith('unsupported:') ? `${L('İzotop verisi olmayan element', 'No isotope data for')}: ${r.error.slice(12)}` : L('Formül okunamadı.', 'Could not parse the formula.')}
        />
      ) : null}
    </View>
  );
}

// ---------------- kinetics ----------------

export function KineticsOrderTool({ color }: ToolProps) {
  const { t, fmt } = useApp();
  const L = useL();
  const [raw, setRaw] = useState('0 0.0500\n60 0.0393\n120 0.0309\n180 0.0243\n240 0.0191\n300 0.0151\n360 0.0118');
  const rows = parseTable(raw);
  const fits = rows.length >= 3 ? kineticOrders(rows.map((r) => r[0]), rows.map((r) => r[1])) : [];
  const best = fits.length ? fits.reduce((p, c) => (c.r2 > p.r2 ? c : p)) : undefined;
  const yOf = (order: number, a: number) => (order === 0 ? a : order === 1 ? Math.log(a) : 1 / a);
  const yLabel = ['[A]', 'ln[A]', '1/[A]'];
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} hint={L('Her satır: zaman  derişim (aynı birimlerle)', 'Each line: time  concentration (consistent units)')} color={color} rows={6} />
      {best ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: yLabel[best.order], color: palette.grape, points: rows.map((r) => [r[0], yOf(best.order, r[1])]), scatter: true },
                {
                  label: L('Uydurulan doğru', 'Fitted line'),
                  color: palette.red,
                  points: [rows[0][0], rows[rows.length - 1][0]].map((ti) => [ti, best.order === 0 ? best.a0 - best.k * ti : best.order === 1 ? Math.log(best.a0) - best.k * ti : 1 / best.a0 + best.k * ti]),
                },
              ]}
              xLabel="t"
              yLabel={yLabel[best.order]}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('En uygun tepkime derecesi', 'Best-fitting order')} value={String(best.order)} strong />
            <StatRow label="k" value={fmt(best.k)} strong />
            <StatRow label="t½" value={fmt(best.halfLife)} />
            <StatRow label="[A]₀" value={fmt(best.a0)} />
            {fits.map((fit) => (
              <StatRow key={fit.order} label={`R² (${yLabel[fit.order]} – t)`} value={fmt(fit.r2)} />
            ))}
          </ResultBox>
          <Notice
            text={L(
              'k\'nin birimi: 0. derece derişim/zaman, 1. derece 1/zaman, 2. derece 1/(derişim·zaman). R² değerleri birbirine yakınsa tepkimeyi daha uzun izleyin.',
              'Units of k: zero order conc/time, first order 1/time, second order 1/(conc·time). If R² values are close, follow the reaction for longer.',
            )}
          />
        </>
      ) : (
        <Notice text={L('En az 3 nokta girin (derişimler pozitif olmalı).', 'Enter at least 3 points (concentrations must be positive).')} />
      )}
    </View>
  );
}

export function LineweaverBurkTool({ color }: ToolProps) {
  const { t, fmt } = useApp();
  const L = useL();
  const [raw, setRaw] = useState('0.10 1.11\n0.20 2.00\n0.50 3.85\n1.00 5.56\n2.00 7.14\n5.00 8.62');
  const rows = parseTable(raw).filter((r) => r[0] > 0 && r[1] > 0);
  const r = rows.length >= 3 ? lineweaverBurk(rows.map((x) => x[0]), rows.map((x) => x[1])) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} hint={L('Her satır: [S]  v', 'Each line: [S]  v')} color={color} rows={6} />
      {r && r.vmax > 0 ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Ölçümler', 'Measurements'), color: palette.grape, points: rows.map((x) => [1 / x[0], 1 / x[1]]), scatter: true },
                { label: '1/v = (K_m/V_max)·1/[S] + 1/V_max', color: palette.red, points: [-1 / r.km, Math.max(...rows.map((x) => 1 / x[0]))].map((xi) => [xi, r.intercept + r.slope * xi]) },
              ]}
              xLabel="1/[S]"
              yLabel="1/v"
              markerX={0}
            />
          </Card>
          <ResultBox>
            <StatRow label="V_max" value={fmt(r.vmax)} strong />
            <StatRow label="K_m" value={fmt(r.km)} strong />
            <StatRow label="R²" value={fmt(r.r2)} />
          </ResultBox>
        </>
      ) : (
        <Notice text={L('En az 3 pozitif nokta girin.', 'Enter at least 3 positive points.')} />
      )}
    </View>
  );
}

// ---------------- spectroscopy ----------------

export function MulticomponentTool({ color }: ToolProps) {
  const { fmt } = useApp();
  const L = useL();
  const [raw, setRaw] = useState('0.4120  12000 4500 1800\n0.5870  6800 11000 2500\n0.3560  2100 3900 9700\n0.4410  5400 6600 6100');
  const [b, setB] = useState('1');
  const rows = parseTable(raw);
  const n = rows.length ? Math.min(...rows.map((r) => r.length)) - 1 : 0;
  const bN = parseNumber(b);
  const ok = n >= 1 && rows.length >= n && bN > 0;
  const c = ok ? leastSquares(rows.map((r) => r.slice(1, n + 1).map((e) => e * bN)), rows.map((r) => r[0])) : undefined;
  const residual = c ? Math.sqrt(rows.reduce((s, r) => s + (r[0] - r.slice(1, n + 1).reduce((a, e, j) => a + e * bN * c[j], 0)) ** 2, 0) / Math.max(rows.length - n, 1)) : NaN;
  return (
    <View style={{ gap: 14 }}>
      <DataCard
        title={L('Her dalga boyu için: A  ε₁  ε₂ …', 'For each wavelength: A  ε₁  ε₂ …')}
        value={raw}
        onChange={setRaw}
        hint={L('Satır = dalga boyu. İlk sütun karışımın absorbansı, sonrakiler saf bileşenlerin molar absorptiviteleri (L mol⁻¹ cm⁻¹). Bileşen sayısı kadar ya da daha fazla satır girin.', 'Row = wavelength. First column: absorbance of the mixture; next: molar absorptivities of the pure components (L mol⁻¹ cm⁻¹). Enter at least as many rows as components.')}
        color={color}
        rows={5}
      >
        <Field label={L('Optik yol b (cm)', 'Path length b (cm)')} value={b} onChangeText={setB} color={color} />
      </DataCard>
      {c ? (
        <ResultBox>
          {c.map((ci, i) => (
            <StatRow key={i} label={`c${'₁₂₃₄₅₆₇₈₉'[i] ?? i + 1} (M)`} value={fmt(ci)} strong />
          ))}
          {rows.length > n && <StatRow label={L('Artık standart sapma (A)', 'Residual std. deviation (A)')} value={fmt(residual)} />}
        </ResultBox>
      ) : (
        <Notice text={L('Veri yetersiz ya da bileşen spektrumları birbirine çok benziyor (tekil matris).', 'Not enough data, or component spectra are too similar (singular matrix).')} />
      )}
    </View>
  );
}

export function MoleRatioTool({ color }: ToolProps) {
  const { t, fmt } = useApp();
  const L = useL();
  const [raw, setRaw] = useState('0 0.000\n0.5 0.152\n1.0 0.301\n1.5 0.449\n2.0 0.578\n2.5 0.630\n3.0 0.645\n3.5 0.651\n4.0 0.654');
  const rows = parseTable(raw);
  const r = rows.length >= 4 ? twoLineFit(rows.map((x) => x[0]), rows.map((x) => x[1])) : undefined;
  const xs = rows.map((x) => x[0]);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} hint={L('Her satır: mol L / mol M (ya da titrant hacmi)  absorbans', 'Each line: mol L / mol M (or titrant volume)  absorbance')} color={color} rows={7} />
      {r ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Ölçümler', 'Measurements'), color: palette.navy, points: rows.map((x) => [x[0], x[1]]), scatter: true },
                { label: L('1. doğru', 'Line 1'), color: palette.orange, points: [Math.min(...xs), r.x].map((xi) => [xi, r.left.m * xi + r.left.b]), dashed: true },
                { label: L('2. doğru', 'Line 2'), color: palette.red, points: [r.x, Math.max(...xs)].map((xi) => [xi, r.right.m * xi + r.right.b]), dashed: true },
              ]}
              xLabel={L('mol L / mol M', 'mol L / mol M')}
              yLabel="A"
              markerX={r.x}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Kesişim (oran ya da dönüm noktası)', 'Intersection (ratio or end point)')} value={fmt(r.x)} strong />
            <StatRow label={L('En yakın tam sayı', 'Nearest integer')} value={String(Math.round(r.x))} />
          </ResultBox>
        </>
      ) : (
        <Notice text={L('En az 4 nokta girin.', 'Enter at least 4 points.')} />
      )}
    </View>
  );
}

export const V3_COMPONENTS = {
  'uncertainty-budget': UncertaintyBudgetTool,
  'control-chart': ControlChartTool,
  youden: YoudenTool,
  'factorial-design': FactorialTool,
  'screening-test': ScreeningTool,
  'samples-number': SamplesNumberTool,
  'isotope-pattern': IsotopePatternTool,
  'kinetics-order': KineticsOrderTool,
  'lineweaver-burk': LineweaverBurkTool,
  multicomponent: MulticomponentTool,
  'mole-ratio': MoleRatioTool,
};

