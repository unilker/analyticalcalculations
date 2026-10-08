import { useState } from 'react';
import { Text, View } from 'react-native';

import { parseList, parseNumber } from '../../core/format';
import {
  fTest,
  grubbsTest,
  normalProbability,
  oneWayAnova,
  propagate,
  noSpread,
  qTest,
  summarize,
  tTestKnown,
  tTestPaired,
  tTestTwoMeans,
  type PropagationOp,
  type TestResult,
} from '../../core/stats';
import { useApp } from '../../i18n/AppSettings';
import { colors } from '../../theme/colors';
import { Button, Card, Chip, Field, Notice, ResultBox, SectionTitle, StatRow, Verdict } from '../ui';
import { ConfidencePicker, DataCard, pct, type ToolProps } from './common';

const SAMPLE_A = '3.080 3.094 3.107 3.056 3.112 3.174 3.198';
const SAMPLE_B = '3.052 3.141 3.083 3.083 3.048';

function TestOutcome({ r, label }: { r: TestResult; label: string }) {
  const { t, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <ResultBox>
      <StatRow label={label} value={fmt(r.statistic)} strong />
      <StatRow label={L('Kritik değer', 'Critical value')} value={fmt(r.critical)} />
      {r.df !== undefined && (
        <StatRow label={L('Serbestlik derecesi', 'Degrees of freedom')} value={Array.isArray(r.df) ? r.df.join(', ') : fmt(r.df)} />
      )}
      {r.pValue !== undefined && <StatRow label="p" value={fmt(r.pValue)} />}
      <Verdict positive={r.significant} text={r.significant ? t('significant') : t('notSignificant')} />
    </ResultBox>
  );
}

export function DescriptiveTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [raw, setRaw] = useState(SAMPLE_A);
  const xs = parseList(raw);
  const s = xs.length >= 2 ? summarize(xs) : undefined;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} color={color} />
      {s ? (
        <ResultBox>
          <StatRow label="n" value={String(s.n)} />
          <StatRow label={L('Ortalama x̄', 'Mean x̄')} value={fmt(s.mean)} strong />
          <StatRow label={L('Medyan', 'Median')} value={fmt(s.median)} />
          <StatRow label={L('Aralık (w)', 'Range (w)')} value={`${fmt(s.range)}  (${fmt(s.min)} – ${fmt(s.max)})`} />
          <StatRow label={L('Standart sapma s', 'Standard deviation s')} value={fmt(s.s)} strong />
          <StatRow label={L('Varyans s²', 'Variance s²')} value={fmt(s.variance)} />
          <StatRow label="RSD" value={fmt(s.rsd)} />
          <StatRow label="%RSD (%CV)" value={fmt(100 * s.rsd)} />
          <StatRow label={L('Ortalamanın std. sapması s/√n', 'Std. deviation of mean s/√n')} value={fmt(s.sMean)} />
          {s.ci.map((c) => (
            <StatRow key={c.conf} label={`${pct(c.conf, lang)} ${L('güven aralığı', 'confidence interval')} (t = ${fmt(c.t)})`} value={`${fmt(s.mean)} ± ${fmt(c.half)}`} />
          ))}
        </ResultBox>
      ) : (
        <Notice text={t('needMoreData')} />
      )}
    </View>
  );
}

export function TTestKnownTool({ color }: ToolProps) {
  const { t, fmt } = useApp();
  const [raw, setRaw] = useState('98.9 99.1 99.4 99.6 98.8');
  const [mu, setMu] = useState('100');
  const [conf, setConf] = useState(0.95);
  const xs = parseList(raw);
  const m = parseNumber(mu);
  const r = xs.length >= 2 && Number.isFinite(m) ? tTestKnown(xs, m, conf) : undefined;
  const s = xs.length >= 2 ? summarize(xs) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} color={color}>
        <Field label={t('knownValue')} value={mu} onChangeText={setMu} color={color} />
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {r && s ? (
        <>
          <Card>
            <StatRow label="x̄" value={fmt(s.mean)} />
            <StatRow label="s" value={fmt(s.s)} />
          </Card>
          <TestOutcome r={r} label="t_exp" />
        </>
      ) : (
        <Notice text={xs.length >= 2 && noSpread(xs) ? t('noSpread') : t('needMoreData')} />
      )}
    </View>
  );
}

export function TTestTwoTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [a, setA] = useState(SAMPLE_A);
  const [b, setB] = useState(SAMPLE_B);
  const [conf, setConf] = useState(0.95);
  const xa = parseList(a);
  const xb = parseList(b);
  const ok = xa.length >= 2 && xb.length >= 2;
  const r = ok ? tTestTwoMeans(xa, xb, conf) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('dataSetA')} value={a} onChange={setA} color={color} rows={2} />
      <DataCard title={t('dataSetB')} value={b} onChange={setB} color={color} rows={2}>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {r ? (
        <>
          <Card>
            <SectionTitle color={color}>F-test</SectionTitle>
            <StatRow label="F_exp" value={fmt(r.fTest.statistic)} />
            <StatRow label="F_crit" value={fmt(r.fTest.critical)} />
            <Text style={{ fontSize: 14, color: colors.textMuted }}>
              {r.pooled
                ? lang === 'tr'
                  ? `Varyanslar eşit kabul edildi → havuzlanmış s_p = ${fmt(r.sp!)}`
                  : `Variances treated as equal → pooled s_p = ${fmt(r.sp!)}`
                : lang === 'tr'
                  ? 'Varyanslar farklı → Welch t-testi kullanıldı'
                  : 'Variances differ → Welch t-test used'}
            </Text>
          </Card>
          <TestOutcome r={r} label="t_exp" />
        </>
      ) : (
        <Notice text={ok ? t('noSpread') : t('needMoreData')} />
      )}
    </View>
  );
}

export function TTestPairedTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [a, setA] = useState('10.2 12.7 8.6 17.5 11.2 11.5');
  const [b, setB] = useState('10.6 13.0 8.4 17.8 11.5 11.4');
  const [conf, setConf] = useState(0.95);
  const xa = parseList(a);
  const xb = parseList(b);
  const ok = xa.length >= 2 && xa.length === xb.length;
  const r = ok ? tTestPaired(xa, xb, conf) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={lang === 'tr' ? 'Yöntem 1' : 'Method 1'} value={a} onChange={setA} color={color} rows={2} />
      <DataCard title={lang === 'tr' ? 'Yöntem 2 (aynı sırayla)' : 'Method 2 (same order)'} value={b} onChange={setB} color={color} rows={2}>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {r ? (
        <>
          <Card>
            <StatRow label="d̄" value={fmt(r.meanDiff)} />
            <StatRow label="s_d" value={fmt(r.sd)} />
          </Card>
          <TestOutcome r={r} label="t_exp" />
        </>
      ) : (
        <Notice text={ok ? t('noSpread') : lang === 'tr' ? 'İki listede aynı sayıda (en az 2) değer olmalı.' : 'Both lists need the same number (≥ 2) of values.'} />
      )}
    </View>
  );
}

export function FTestTool({ color }: ToolProps) {
  const { t } = useApp();
  const [a, setA] = useState(SAMPLE_A);
  const [b, setB] = useState(SAMPLE_B);
  const [conf, setConf] = useState(0.95);
  const xa = parseList(a);
  const xb = parseList(b);
  const ok = xa.length >= 2 && xb.length >= 2;
  const r = ok ? fTest(xa, xb, conf) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('dataSetA')} value={a} onChange={setA} color={color} rows={2} />
      <DataCard title={t('dataSetB')} value={b} onChange={setB} color={color} rows={2}>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {r ? <TestOutcome r={r} label="F_exp" /> : <Notice text={ok ? t('noSpread') : t('needMoreData')} />}
    </View>
  );
}

function OutlierOutcome({ r, label }: { r: { statistic: number; critical: number; suspect: number; significant: boolean }; label: string }) {
  const { t, fmt, lang } = useApp();
  return (
    <ResultBox>
      <StatRow label={lang === 'tr' ? 'Şüpheli değer' : 'Suspect value'} value={fmt(r.suspect)} strong />
      <StatRow label={label} value={fmt(r.statistic)} />
      <StatRow label={lang === 'tr' ? 'Kritik değer' : 'Critical value'} value={fmt(r.critical)} />
      <Verdict positive={r.significant} text={r.significant ? t('reject') : t('retain')} />
    </ResultBox>
  );
}

export function QTestTool({ color }: ToolProps) {
  const { t, lang } = useApp();
  const [raw, setRaw] = useState('3.067 3.049 3.039 2.514 3.048 3.079 3.094 3.109 3.102');
  const [alpha, setAlpha] = useState<'0.1' | '0.05' | '0.01'>('0.05');
  const xs = parseList(raw);
  const r = qTest(xs, alpha);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} color={color}>
        <ConfidencePicker value={1 - Number(alpha)} onChange={(c) => setAlpha(String(Math.round((1 - c) * 100) / 100) as '0.1')} color={color} />
      </DataCard>
      {r ? (
        <OutlierOutcome r={r} label="Q_exp" />
      ) : (
        <Notice text={xs.length >= 3 && xs.length <= 10 ? t('noSpread') : lang === 'tr' ? 'Q-testi için 3–10 değer girin.' : 'Enter 3–10 values for the Q-test.'} />
      )}
    </View>
  );
}

export function GrubbsTool({ color }: ToolProps) {
  const { t } = useApp();
  const [raw, setRaw] = useState('3.067 3.049 3.039 2.514 3.048 3.079 3.094 3.109 3.102');
  const [conf, setConf] = useState(0.95);
  const xs = parseList(raw);
  const r = grubbsTest(xs, Math.round((1 - conf) * 1000) / 1000);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} color={color}>
        <ConfidencePicker value={conf} onChange={setConf} color={color} levels={[0.95, 0.99]} />
      </DataCard>
      {r ? <OutlierOutcome r={r} label="G_exp" /> : <Notice text={xs.length >= 3 ? t('noSpread') : t('needMoreData')} />}
    </View>
  );
}

export function AnovaTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [raw, setRaw] = useState('94.09 94.64 95.08 94.54 95.38 93.62\n99.55 98.24 101.1 100.4 100.1\n90.95 93.89 92.88 94.84 91.75\n93.89 94.95 95.65 93.92 94.68');
  const [conf, setConf] = useState(0.95);
  const groups = raw
    .split(/\n+/)
    .map(parseList)
    .filter((g) => g.length > 0);
  const ok = groups.length >= 2 && groups.every((g) => g.length >= 1) && groups.flat().length > groups.length;
  const r = ok ? oneWayAnova(groups, conf) : undefined;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('groups')} value={raw} onChange={setRaw} hint={t('groupsHint')} color={color} rows={5}>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {r ? (
        <ResultBox>
          <StatRow label={L('KT gruplar arası (sd)', 'SS between (df)')} value={`${fmt(r.ssBetween)} (${r.dfBetween})`} />
          <StatRow label={L('KT grup içi (sd)', 'SS within (df)')} value={`${fmt(r.ssWithin)} (${r.dfWithin})`} />
          <StatRow label={L('KO gruplar arası', 'MS between')} value={fmt(r.msBetween)} />
          <StatRow label={L('KO grup içi', 'MS within')} value={fmt(r.msWithin)} />
          <StatRow label="F_exp" value={fmt(r.F)} strong />
          <StatRow label="F_crit" value={fmt(r.critical)} />
          <StatRow label="p" value={fmt(r.pValue)} />
          <Verdict positive={r.significant} text={r.significant ? t('significant') : t('notSignificant')} />
        </ResultBox>
      ) : (
        <Notice text={t('needMoreData')} />
      )}
    </View>
  );
}

const OPS: { op: PropagationOp; label: string }[] = [
  { op: 'add', label: 'a ± b' },
  { op: 'mul', label: 'a × b ÷ c' },
  { op: 'pow', label: 'aᵏ' },
  { op: 'log10', label: 'log a' },
  { op: 'ln', label: 'ln a' },
  { op: 'exp10', label: '10ᵃ' },
  { op: 'exp', label: 'eᵃ' },
];

export function PropagationTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [op, setOp] = useState<PropagationOp>('mul');
  const [rows, setRows] = useState([
    { value: '25.00', u: '0.03', invert: false },
    { value: '0.1004', u: '0.0002', invert: false },
    { value: '0.5012', u: '0.0001', invert: true },
  ]);
  const [k, setK] = useState('2');
  const multi = op === 'add' || op === 'mul';
  const used = multi ? rows : rows.slice(0, 1);
  const terms = used.map((r) => ({ value: parseNumber(r.value), u: parseNumber(r.u), invert: r.invert }));
  const ok = terms.every((x) => Number.isFinite(x.value) && Number.isFinite(x.u)) && (op !== 'pow' || Number.isFinite(parseNumber(k)));
  const [res, u] = ok ? propagate(op, terms, parseNumber(k)) : [NaN, NaN];
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const update = (i: number, patch: Partial<(typeof rows)[0]>) => setRows(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('İşlem', 'Operation')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {OPS.map((o) => (
            <Chip key={o.op} label={o.label} selected={op === o.op} onPress={() => setOp(o.op)} color={color} small />
          ))}
        </View>
      </Card>
      <Card>
        {used.map((r, i) => (
          <View key={i} style={{ gap: 6 }}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <View style={{ flex: 1 }}>
                <Field label={`${L('Değer', 'Value')} ${String.fromCharCode(97 + i)}`} value={r.value} onChangeText={(s) => update(i, { value: s })} color={color} />
              </View>
              <View style={{ flex: 1 }}>
                <Field label={L('Belirsizlik (±s)', 'Uncertainty (±s)')} value={r.u} onChangeText={(s) => update(i, { u: s })} color={color} />
              </View>
            </View>
            {multi && i > 0 && (
              <View style={{ flexDirection: 'row', gap: 8 }}>
                <Chip small label={op === 'add' ? '+' : '×'} selected={!r.invert} onPress={() => update(i, { invert: false })} color={color} />
                <Chip small label={op === 'add' ? '−' : '÷'} selected={r.invert} onPress={() => update(i, { invert: true })} color={color} />
              </View>
            )}
          </View>
        ))}
        {op === 'pow' && <Field label="k" value={k} onChangeText={setK} color={color} />}
        {multi && (
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Button label={L('+ Terim ekle', '+ Add term')} onPress={() => setRows([...rows, { value: '', u: '', invert: false }])} color={color} outline />
            {rows.length > 2 && <Button label={L('Son terimi sil', 'Remove last')} onPress={() => setRows(rows.slice(0, -1))} color={colors.textMuted} outline />}
          </View>
        )}
      </Card>
      {ok ? (
        <ResultBox>
          <StatRow label={L('Sonuç R', 'Result R')} value={`${fmt(res)} ± ${fmt(u)}`} strong />
          <StatRow label={L('Bağıl belirsizlik', 'Relative uncertainty')} value={`${fmt((100 * u) / Math.abs(res))} %`} />
        </ResultBox>
      ) : (
        <Notice text={L('Tüm değerleri ve belirsizlikleri girin.', 'Enter all values and uncertainties.')} />
      )}
    </View>
  );
}

export function NormalProbabilityTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [mu, setMu] = useState('250');
  const [sigma, setSigma] = useState('5');
  const [x1, setX1] = useState('240');
  const [x2, setX2] = useState('260');
  const v = [mu, sigma, x1, x2].map(parseNumber);
  const ok = v.every(Number.isFinite) && v[1] > 0;
  const p = ok ? normalProbability(v[0], v[1], Math.min(v[2], v[3]), Math.max(v[2], v[3])) : NaN;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <Field label={L('Ortalama μ', 'Mean μ')} value={mu} onChangeText={setMu} color={color} />
        <Field label={L('Standart sapma σ', 'Standard deviation σ')} value={sigma} onChangeText={setSigma} color={color} />
        <Field label={L('Alt sınır x₁', 'Lower limit x₁')} value={x1} onChangeText={setX1} color={color} />
        <Field label={L('Üst sınır x₂', 'Upper limit x₂')} value={x2} onChangeText={setX2} color={color} />
      </Card>
      {ok && (
        <ResultBox>
          <StatRow label="P(x₁ < x < x₂)" value={`${fmt(100 * p)} %`} strong />
          <StatRow label={L('Aralık dışında', 'Outside the range')} value={`${fmt(100 * (1 - p))} %`} />
        </ResultBox>
      )}
    </View>
  );
}
