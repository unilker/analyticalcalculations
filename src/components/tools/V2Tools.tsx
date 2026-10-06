import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { craigDistribution, gaussian, ionicStrength, jobIntersection, logGammaDavies, logGammaExtended, logGammaLimiting, vanDeemterOptimum } from '../../core/equilibria';
import { parseNumber, parseTable } from '../../core/format';
import { ACID_BASE_INDICATORS, EDTA_KF, POTENTIALS, REDOX_INDICATORS } from '../../data/tables/v2tables';
import { useApp } from '../../i18n/AppSettings';
import { colors, palette, tint } from '../../theme/colors';
import { LineChart } from '../LineChart';
import { Card, Field, Notice, ResultBox, SectionTitle, StatRow, styles as ui } from '../ui';
import { DataCard, type ToolProps } from './common';

const fold = (s: string) =>
  s
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[₀-₉]/g, (d) => String('₀₁₂₃₄₅₆₇₈₉'.indexOf(d)));

function Row({ cells, header, zebra, color, flex = [2.2, 1.2, 1.2] }: { cells: string[]; header?: boolean; zebra?: boolean; color: string; flex?: number[] }) {
  return (
    <View style={{ flexDirection: 'row', paddingVertical: 8, paddingHorizontal: 8, backgroundColor: header ? color : zebra ? tint(color, 0.93) : colors.surface, borderRadius: header ? 8 : 0 }}>
      {cells.map((c, i) => (
        <Text
          key={i}
          selectable
          style={{ flex: flex[i] ?? 1, fontSize: 14, fontWeight: header || i === 0 ? '700' : '500', color: header ? '#fff' : colors.text, textAlign: i === 0 ? 'left' : 'right' }}
        >
          {c}
        </Text>
      ))}
    </View>
  );
}

export function IonicStrengthTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState('0.10 2 600\n0.20 -1 300');
  const rows = parseTable(raw).filter((r) => r[0] >= 0 && r[1] !== 0);
  const ions = rows.map((r) => ({ c: r[0], z: r[1], alpha: r[2] }));
  const mu = ionicStrength(ions);
  return (
    <View style={{ gap: 14 }}>
      <DataCard
        title={L('İyonlar', 'Ions')}
        value={raw}
        onChange={setRaw}
        hint={L(
          'Her satıra bir iyon: derişim (M)  yük  [hidratlaşmış boyut α, pm]. Örnek: 0,10 M CaCl₂ → "0.10 2 600" ve "0.20 -1 300".',
          'One ion per line: concentration (M)  charge  [hydrated size α, pm]. Example: 0.10 M CaCl₂ → "0.10 2 600" and "0.20 -1 300".',
        )}
        color={color}
        rows={4}
      />
      {ions.length ? (
        <>
          <ResultBox>
            <StatRow label={L('İyonik şiddet µ', 'Ionic strength µ')} value={`${fmt(mu)} M`} strong />
          </ResultBox>
          <Card style={{ padding: 8, gap: 0 }}>
            <Row cells={['z (α)', L('Sınır', 'Limiting'), L('Geniş. D–H', 'Ext. D–H'), 'Davies']} header color={color} flex={[1.2, 1, 1, 1]} />
            {ions.map((i, k) => (
              <Row
                key={k}
                zebra={k % 2 === 1}
                color={color}
                flex={[1.2, 1, 1, 1]}
                cells={[
                  `${i.z > 0 ? '+' : ''}${i.z}${i.alpha ? ` (${i.alpha})` : ''}`,
                  fmt(10 ** logGammaLimiting(i.z, mu)),
                  i.alpha ? fmt(10 ** logGammaExtended(i.z, mu, i.alpha)) : '—',
                  fmt(10 ** logGammaDavies(i.z, mu)),
                ]}
              />
            ))}
          </Card>
          <Notice
            text={L(
              'Sınır yasası µ < 0,01 M, genişletilmiş Debye–Hückel µ < 0,1 M, Davies µ ≲ 0,5 M için uygundur (25 °C).',
              'Limiting law for µ < 0.01 M, extended Debye–Hückel for µ < 0.1 M, Davies for µ ≲ 0.5 M (25 °C).',
            )}
          />
        </>
      ) : (
        <Notice text={L('En az bir iyon girin.', 'Enter at least one ion.')} />
      )}
    </View>
  );
}

export function IndicatorsTable({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 14 }}>
      <SectionTitle color={color}>{L('Asit–baz indikatörleri', 'Acid–base indicators')}</SectionTitle>
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[L('İndikatör', 'Indicator'), L('pH aralığı', 'pH range'), L('Renk', 'Color')]} header color={color} flex={[1.6, 1, 1.6]} />
        {ACID_BASE_INDICATORS.map((i, k) => (
          <Row key={i.name.en} zebra={k % 2 === 1} color={color} flex={[1.6, 1, 1.6]} cells={[tx(i.name), `${fmt(i.low)}–${fmt(i.high)}`, tx(i.colors)]} />
        ))}
      </Card>
      <SectionTitle color={color}>{L('Redoks indikatörleri', 'Redox indicators')}</SectionTitle>
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[L('İndikatör', 'Indicator'), 'E (V)', L('Renk', 'Color')]} header color={color} flex={[1.6, 1, 1.6]} />
        {REDOX_INDICATORS.map((i, k) => (
          <Row key={i.name.en} zebra={k % 2 === 1} color={color} flex={[1.6, 1, 1.6]} cells={[tx(i.name), `${fmt(i.low)}–${fmt(i.high)}`, tx(i.colors)]} />
        ))}
      </Card>
      <Notice text={L('Redoks aralıkları E°_In ± 0,05916/n olarak hesaplanmıştır (SHE\'ye göre).', 'Redox ranges are E°_In ± 0.05916/n (vs. SHE).')} />
    </View>
  );
}

export function EdtaKfTable({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  return (
    <Card style={{ padding: 8, gap: 0 }}>
      <Row cells={[lang === 'tr' ? 'Metal' : 'Metal', 'Kf', 'log Kf']} header color={color} />
      {EDTA_KF.map((e, k) => (
        <Row key={e.ion} zebra={k % 2 === 1} color={color} cells={[`${e.ion} — ${tx(e.name)}`, fmt(e.kf), fmt(Math.log10(e.kf))]} />
      ))}
    </Card>
  );
}

export function PotentialsTable({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [q, setQ] = useState('');
  const rows = POTENTIALS.filter((p) => !q || fold(p.reaction).includes(fold(q)));
  return (
    <View style={{ gap: 14 }}>
      <TextInput value={q} onChangeText={setQ} placeholder={lang === 'tr' ? 'Tabloda ara… (ör. Fe, MnO4)' : 'Search… (e.g. Fe, MnO4)'} placeholderTextColor="#9AA6B2" autoCapitalize="none" autoCorrect={false} style={ui.input} />
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[lang === 'tr' ? 'Yarı tepkime' : 'Half-reaction', 'E° (V)', lang === 'tr' ? 'E°′ (V), ortam' : 'E°′ (V), medium']} header color={color} flex={[2.2, 0.8, 1.4]} />
        {rows.map((p, k) => (
          <Row
            key={p.reaction}
            zebra={k % 2 === 1}
            color={color}
            flex={[2.2, 0.8, 1.4]}
            cells={[p.reaction, p.e0 === undefined ? '—' : fmt(p.e0), p.formal?.map((f) => `${fmt(f.e)} (${f.medium})`).join('\n') ?? '']}
          />
        ))}
      </Card>
    </View>
  );
}

export function CraigTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState({ n: '30', d1: '1', d2: '3', r: '1' });
  const v = { n: Math.round(parseNumber(raw.n)), d1: parseNumber(raw.d1), d2: parseNumber(raw.d2), r: parseNumber(raw.r) };
  const ok = v.n >= 1 && v.n <= 2000 && v.d1 > 0 && v.d2 > 0 && v.r > 0;
  const p1 = (v.d1 * v.r) / (v.d1 * v.r + 1);
  const p2 = (v.d2 * v.r) / (v.d2 * v.r + 1);
  const f1 = ok ? craigDistribution(v.n, p1) : [];
  const f2 = ok ? craigDistribution(v.n, p2) : [];
  const fld = (key: keyof typeof raw, label: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={raw[key]} onChangeText={(s) => setRaw({ ...raw, [key]: s })} color={color} />
    </View>
  );
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {fld('n', L('Transfer sayısı n', 'Transfers n'))}
          {fld('r', 'V_üst / V_alt')}
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {fld('d1', L('1. maddenin D değeri', 'D of solute 1'))}
          {fld('d2', L('2. maddenin D değeri', 'D of solute 2'))}
        </View>
      </Card>
      {ok ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Madde 1', 'Solute 1'), color: palette.green, points: f1.map((y, i) => [i, y]) },
                { label: L('Madde 2', 'Solute 2'), color: palette.vermilion, points: f2.map((y, i) => [i, y]) },
              ]}
              xLabel={L('Tüp numarası r', 'Tube number r')}
              yLabel={L('Kesir', 'Fraction')}
              xDomain={[0, v.n]}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('1. madde: en yüksek tüp (n·p)', 'Solute 1: peak tube (n·p)')} value={fmt(v.n * p1)} strong />
            <StatRow label={L('2. madde: en yüksek tüp (n·p)', 'Solute 2: peak tube (n·p)')} value={fmt(v.n * p2)} strong />
            <StatRow label={L('Standart sapma √(n·p·q)', 'Std. deviation √(n·p·q)')} value={`${fmt(Math.sqrt(v.n * p1 * (1 - p1)))} / ${fmt(Math.sqrt(v.n * p2 * (1 - p2)))}`} />
          </ResultBox>
        </>
      ) : (
        <Notice text={L('n 1–2000 arasında, diğer değerler pozitif olmalı.', 'n must be 1–2000 and the other values positive.')} />
      )}
    </View>
  );
}

export function VanDeemterTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState({ A: '0.10', B: '2.0', C: '0.05', uMax: '20' });
  const v = { A: parseNumber(raw.A), B: parseNumber(raw.B), C: parseNumber(raw.C), uMax: parseNumber(raw.uMax) };
  const ok = v.A >= 0 && v.B > 0 && v.C > 0 && v.uMax > 0;
  const opt = ok ? vanDeemterOptimum(v.A, v.B, v.C) : undefined;
  const us = Array.from({ length: 200 }, (_, i) => (v.uMax * (i + 1)) / 200);
  const fld = (key: keyof typeof raw, label: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={raw[key]} onChangeText={(s) => setRaw({ ...raw, [key]: s })} color={color} />
    </View>
  );
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {fld('A', 'A')}
          {fld('B', 'B')}
          {fld('C', 'C')}
        </View>
        {fld('uMax', L('Grafik için en yüksek u', 'Maximum u for the plot'))}
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L('Birimleri tutarlı girin (ör. H mm, u cm/s → A mm, B mm·cm/s, C mm·s/cm).', 'Use consistent units (e.g. H mm, u cm/s → A mm, B mm·cm/s, C mm·s/cm).')}
        </Text>
      </Card>
      {ok && opt ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: 'H', color: palette.purple, points: us.map((u) => [u, v.A + v.B / u + v.C * u]) },
                { label: 'A', color: palette.amber, points: us.map((u) => [u, v.A]), dashed: true },
                { label: 'B/u', color: palette.green, points: us.map((u) => [u, v.B / u]), dashed: true },
                { label: 'C·u', color: palette.vermilion, points: us.map((u) => [u, v.C * u]), dashed: true },
              ]}
              xLabel="u"
              yLabel="H"
              yDomain={[0, Math.max(3 * opt.h, v.A + v.C * v.uMax)]}
              markerX={opt.u}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Optimum hız u_opt = √(B/C)', 'Optimum velocity u_opt = √(B/C)')} value={fmt(opt.u)} strong />
            <StatRow label={L('En küçük H = A + 2√(BC)', 'Minimum H = A + 2√(BC)')} value={fmt(opt.h)} strong />
          </ResultBox>
        </>
      ) : (
        <Notice text={L('A ≥ 0; B, C ve u pozitif olmalı.', 'A ≥ 0; B, C and u must be positive.')} />
      )}
    </View>
  );
}

export function PeakResolutionTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState({ t1: '8.00', t2: '8.30', w1: '0.40', w2: '0.42' });
  const v = { t1: parseNumber(raw.t1), t2: parseNumber(raw.t2), w1: parseNumber(raw.w1), w2: parseNumber(raw.w2) };
  const ok = v.t1 > 0 && v.t2 > 0 && v.w1 > 0 && v.w2 > 0;
  const rs = ok ? (2 * Math.abs(v.t2 - v.t1)) / (v.w1 + v.w2) : NaN;
  const lo = Math.min(v.t1 - v.w1 * 1.2, v.t2 - v.w2 * 1.2);
  const hi = Math.max(v.t1 + v.w1 * 1.2, v.t2 + v.w2 * 1.2);
  const ts = Array.from({ length: 301 }, (_, i) => lo + ((hi - lo) * i) / 300);
  const fld = (key: keyof typeof raw, label: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={raw[key]} onChangeText={(s) => setRaw({ ...raw, [key]: s })} color={color} />
    </View>
  );
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {fld('t1', 't_R1')}
          {fld('w1', 'w₁')}
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {fld('t2', 't_R2')}
          {fld('w2', 'w₂')}
        </View>
        <Text style={{ fontSize: 12, color: colors.textMuted }}>{L('Süre ve taban genişlikleri aynı birimde (ör. dk).', 'Times and baseline widths in the same unit (e.g. min).')}</Text>
      </Card>
      {ok ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Kromatogram', 'Chromatogram'), color: palette.purple, points: ts.map((t) => [t, gaussian(t, v.t1, v.w1) + gaussian(t, v.t2, v.w2)]) },
                { label: L('Pik 1', 'Peak 1'), color: palette.green, points: ts.map((t) => [t, gaussian(t, v.t1, v.w1)]), dashed: true },
                { label: L('Pik 2', 'Peak 2'), color: palette.vermilion, points: ts.map((t) => [t, gaussian(t, v.t2, v.w2)]), dashed: true },
              ]}
              xLabel="t"
              yLabel={L('Sinyal', 'Signal')}
              xDomain={[lo, hi]}
            />
          </Card>
          <ResultBox>
            <StatRow label="R_s" value={fmt(rs)} strong />
            <Text style={{ fontSize: 14, fontWeight: '700', color: rs >= 1.5 ? colors.success : rs >= 1 ? palette.orange : colors.danger }}>
              {rs >= 1.5
                ? L('Taban çizgisinde tam ayırma (R_s ≥ 1,5)', 'Baseline separation (R_s ≥ 1.5)')
                : rs >= 1
                  ? L('Kısmi ayırma (~%2 örtüşme, R_s = 1)', 'Partial separation (~2% overlap at R_s = 1)')
                  : L('Pikler belirgin biçimde örtüşüyor', 'Peaks overlap significantly')}
            </Text>
          </ResultBox>
        </>
      ) : (
        <Notice text={L('Tüm değerler pozitif olmalı.', 'All values must be positive.')} />
      )}
    </View>
  );
}

export function JobTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState('0.0 0.000\n0.1 0.091\n0.2 0.180\n0.3 0.272\n0.4 0.359\n0.5 0.440\n0.6 0.502\n0.7 0.494\n0.8 0.361\n0.9 0.179\n1.0 0.000');
  const rows = parseTable(raw);
  const x = rows.map((r) => r[0]);
  const y = rows.map((r) => r[1]);
  const r = rows.length >= 5 ? jobIntersection(x, y) : undefined;
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} hint={L('Her satır: ligandın mol kesri x_L  absorbans', 'Each line: mole fraction of ligand x_L  absorbance')} color={color} rows={8} />
      {r ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Ölçümler', 'Measurements'), color: palette.navy, points: rows.map((p) => [p[0], p[1]]), scatter: true },
                { label: L('Sol doğru', 'Left line'), color: palette.orange, points: [0, r.x].map((xi) => [xi, r.left.m * xi + r.left.b]), dashed: true },
                { label: L('Sağ doğru', 'Right line'), color: palette.red, points: [r.x, 1].map((xi) => [xi, r.right.m * xi + r.right.b]), dashed: true },
              ]}
              xLabel="x_L"
              yLabel="A"
              xDomain={[0, 1]}
              markerX={r.x}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Kesişim x_L', 'Intersection x_L')} value={fmt(r.x)} strong />
            <StatRow label={L('Ligand : metal oranı', 'Ligand : metal ratio')} value={`${fmt(r.ratio)} : 1`} strong />
            <StatRow label={L('En yakın tam sayı oranı', 'Nearest integer ratio')} value={`ML${Math.round(r.ratio) > 1 ? Math.round(r.ratio) : ''}`.replace(/(\d)$/, (d) => '₀₁₂₃₄₅₆₇₈₉'[+d])} />
          </ResultBox>
          <Notice text={L('Doğrular maksimumun iki yanındaki doğrusal noktalara uydurulur; maksimuma bitişik eğrisel noktalar (her yanda en az 2 nokta kaldıkça) hesaba katılmaz.', 'Lines are fitted to the linear points on each side of the maximum; the curved points next to the maximum are skipped while at least 2 points remain on each side.')} />
        </>
      ) : (
        <Notice text={L('Maksimumun her iki yanında en az 2 nokta olacak şekilde veri girin.', 'Enter data with at least 2 points on each side of the maximum.')} />
      )}
    </View>
  );
}
