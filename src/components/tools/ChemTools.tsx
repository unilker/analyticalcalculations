import { useState } from 'react';
import { Text, View } from 'react-native';

import { alphaFractions, speciesLabels } from '../../core/acidBase';
import { parseNumber, parseTable } from '../../core/format';
import { inversePrediction, linearRegression, standardAdditionResult } from '../../core/stats';
import { KW_25C } from '../../core/units';
import { useApp } from '../../i18n/AppSettings';
import { colors, palette } from '../../theme/colors';
import { LineChart } from '../LineChart';
import { Card, Chip, Field, Notice, ResultBox, SectionTitle, StatRow } from '../ui';
import { ConfidencePicker, DataCard, pct, type ToolProps } from './common';

const SERIES_COLORS = [palette.navy, palette.red, palette.amber, palette.blue, palette.orange];

export function RegressionTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [raw, setRaw] = useState('0 0\n0.1 12.36\n0.2 24.83\n0.3 35.91\n0.4 48.79\n0.5 60.42');
  const [yu, setYu] = useState('29.32');
  const [k, setK] = useState('3');
  const [conf, setConf] = useState(0.95);
  const rows = parseTable(raw);
  const x = rows.map((r) => r[0]);
  const y = rows.map((r) => r[1]);
  const weighted = rows.length > 0 && rows.every((r) => r.length >= 3 && r[2] > 0);
  const reg = rows.length >= 3 ? linearRegression(x, y, weighted ? rows.map((r) => r[2]) : undefined) : undefined;
  const yuN = parseNumber(yu);
  const kN = parseNumber(k);
  const pred = reg && Number.isFinite(yuN) && kN >= 1 ? inversePrediction(reg, yuN, kN, conf) : undefined;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);

  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('calibrationData')} value={raw} onChange={setRaw} hint={t('dataHintTable')} color={color} rows={6} />
      {reg ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Standartlar', 'Standards'), color: palette.navy, points: rows.map((r) => [r[0], r[1]]), scatter: true },
                {
                  label: `y = ${fmt(reg.intercept)} + ${fmt(reg.slope)}·x`,
                  color: palette.red,
                  points: [Math.min(...x), Math.max(...x)].map((xi) => [xi, reg.intercept + reg.slope * xi]),
                },
              ]}
              xLabel={L('Derişim (x)', 'Concentration (x)')}
              yLabel={L('Sinyal (y)', 'Signal (y)')}
            />
          </Card>
          <ResultBox>
            {reg.weighted && <Text style={{ fontWeight: '700', color: palette.crimson }}>{L('Ağırlıklı regresyon', 'Weighted regression')}</Text>}
            <StatRow label={L('Eğim b₁ (duyarlılık)', 'Slope b₁ (sensitivity)')} value={`${fmt(reg.slope)} ± ${fmt(reg.sSlope)}`} strong />
            <StatRow label={L('Kesişim b₀', 'Intercept b₀')} value={`${fmt(reg.intercept)} ± ${fmt(reg.sIntercept)}`} strong />
            <StatRow label={L('Artıkların std. sapması s_r', 'Std. deviation about regression s_r')} value={fmt(reg.sr)} />
            <StatRow label="r" value={fmt(reg.r)} />
            <StatRow label="R²" value={fmt(reg.r2)} />
            <StatRow label="n" value={String(reg.n)} />
          </ResultBox>
          <Card>
            <SectionTitle color={color}>{L('Bilinmeyen numune', 'Unknown sample')}</SectionTitle>
            <Field label={t('unknownSignal')} value={yu} onChangeText={setYu} color={color} />
            <Field label={t('replicates')} value={k} onChangeText={setK} color={color} />
            <ConfidencePicker value={conf} onChange={setConf} color={color} />
          </Card>
          {pred && (
            <ResultBox>
              <StatRow label={L('Derişim x', 'Concentration x')} value={fmt(pred.x)} strong />
              <StatRow label="s_x" value={fmt(pred.sx)} />
              <StatRow label={`${pct(conf)} ${L('güven aralığı', 'confidence interval')}`} value={`${fmt(pred.x)} ± ${fmt(pred.half)}`} />
            </ResultBox>
          )}
        </>
      ) : (
        <Notice text={L('En az 3 kalibrasyon noktası girin.', 'Enter at least 3 calibration points.')} />
      )}
    </View>
  );
}

export function StdAdditionMultiTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [raw, setRaw] = useState('0 0.215\n1 0.345\n2 0.473\n3 0.600\n4 0.729');
  const [conf, setConf] = useState(0.95);
  const rows = parseTable(raw);
  const x = rows.map((r) => r[0]);
  const y = rows.map((r) => r[1]);
  const reg = rows.length >= 3 ? linearRegression(x, y) : undefined;
  const res = reg ? standardAdditionResult(reg, conf) : undefined;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 14 }}>
      <DataCard
        title={t('data')}
        value={raw}
        onChange={setRaw}
        hint={L('Her satır: eklenen standart derişimi  sinyal', 'Each line: added standard concentration  signal')}
        color={color}
        rows={5}
      >
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
      </DataCard>
      {reg && res ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: L('Ölçümler', 'Measurements'), color: palette.navy, points: rows.map((r) => [r[0], r[1]]), scatter: true },
                {
                  label: L('Uzatılmış doğru', 'Extrapolated line'),
                  color: palette.red,
                  points: [-res.x, Math.max(...x)].map((xi) => [xi, reg.intercept + reg.slope * xi]),
                },
              ]}
              xLabel={L('Eklenen derişim', 'Added concentration')}
              yLabel={L('Sinyal', 'Signal')}
              markerX={-res.x}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Numunedeki derişim Cₓ', 'Concentration in sample Cₓ')} value={fmt(res.x)} strong />
            <StatRow label="s" value={fmt(res.sx)} />
            <StatRow label={`${pct(conf)} ${L('güven aralığı', 'confidence interval')}`} value={`${fmt(res.x)} ± ${fmt(res.half)}`} />
            <StatRow label={L('Eğim / kesişim', 'Slope / intercept')} value={`${fmt(reg.slope)} / ${fmt(reg.intercept)}`} />
            <StatRow label="R²" value={fmt(reg.r2)} />
          </ResultBox>
          <Notice
            text={L(
              'Sonuç, eklemelerin yapıldığı ölçüm çözeltisindeki derişimdir; numune seyreltildiyse seyreltme faktörüyle çarpın.',
              'The result is the concentration in the measured solution; multiply by the dilution factor if the sample was diluted.',
            )}
          />
        </>
      ) : (
        <Notice text={L('En az 3 nokta girin.', 'Enter at least 3 points.')} />
      )}
    </View>
  );
}

export function PhConverterTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [which, setWhich] = useState<'pH' | 'pOH' | 'H' | 'OH'>('pH');
  const [raw, setRaw] = useState('7.40');
  const n = parseNumber(raw);
  let pH = NaN;
  if (Number.isFinite(n)) {
    if (which === 'pH') pH = n;
    else if (which === 'pOH') pH = 14 - n;
    else if (which === 'H' && n > 0) pH = -Math.log10(n);
    else if (which === 'OH' && n > 0) pH = 14 + Math.log10(n);
  }
  const labels = { pH: 'pH', pOH: 'pOH', H: '[H⁺] (M)', OH: '[OH⁻] (M)' } as const;
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{lang === 'tr' ? 'Girilen büyüklük' : 'Given quantity'}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {(Object.keys(labels) as (keyof typeof labels)[]).map((k) => (
            <Chip key={k} label={labels[k]} selected={which === k} onPress={() => setWhich(k)} color={color} small />
          ))}
        </View>
        <Field label={labels[which]} value={raw} onChangeText={setRaw} color={color} />
      </Card>
      {Number.isFinite(pH) && (
        <ResultBox>
          <StatRow label="pH" value={fmt(pH)} strong />
          <StatRow label="pOH" value={fmt(14 - pH)} strong />
          <StatRow label="[H⁺] (M)" value={fmt(10 ** -pH)} />
          <StatRow label="[OH⁻] (M)" value={fmt(KW_25C / 10 ** -pH)} />
        </ResultBox>
      )}
    </View>
  );
}

export function AlphaTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [pkas, setPkas] = useState(['2.15', '7.20', '12.35', '']);
  const [phRaw, setPhRaw] = useState('7.00');
  const [cRaw, setCRaw] = useState('0.1');
  const [logMode, setLogMode] = useState(false);
  const values = pkas.map(parseNumber).filter((x) => Number.isFinite(x));
  const pH = parseNumber(phRaw);
  const C = parseNumber(cRaw);
  const labels = speciesLabels(values.length);
  const grid = Array.from({ length: 141 }, (_, i) => i * 0.1);
  const curves = values.length
    ? labels.map((label, j) => ({
        label,
        color: SERIES_COLORS[j % SERIES_COLORS.length],
        points: grid.map((p) => {
          const a = alphaFractions(values, p)[j];
          return [p, logMode ? Math.log10(Math.max(a * C, 1e-30)) : a] as [number, number];
        }),
      }))
    : [];
  const at = values.length && Number.isFinite(pH) ? alphaFractions(values, pH) : undefined;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const logOk = !logMode || (Number.isFinite(C) && C > 0);

  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>pKa</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {pkas.map((p, i) => (
            <View key={i} style={{ flex: 1 }}>
              <Field label={`pKa${'₁₂₃₄'[i]}`} value={p} onChangeText={(s) => setPkas(pkas.map((q, j) => (j === i ? s : q)))} color={color} />
            </View>
          ))}
        </View>
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L('Kullanılmayan pKa kutularını boş bırakın. Ka/pKa tablosu Araçlar bölümündedir.', 'Leave unused pKa boxes empty. A Ka/pKa table is in Tools.')}
        </Text>
        <Field label={t('atPH')} value={phRaw} onChangeText={setPhRaw} color={color} />
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          <Chip label="α – pH" selected={!logMode} onPress={() => setLogMode(false)} color={color} small />
          <Chip label={t('showLog')} selected={logMode} onPress={() => setLogMode(true)} color={color} small />
        </View>
        {logMode && <Field label={t('totalConc')} value={cRaw} onChangeText={setCRaw} color={color} />}
      </Card>
      {values.length > 0 && logOk ? (
        <>
          <Card>
            <LineChart
              series={curves}
              xLabel="pH"
              yLabel={logMode ? 'log C' : 'α'}
              xDomain={[0, 14]}
              yDomain={logMode ? [Math.floor(Math.log10(C)) - 10, Math.ceil(Math.log10(C)) + 0.5] : [0, 1]}
              markerX={Number.isFinite(pH) ? pH : undefined}
            />
          </Card>
          {at && (
            <ResultBox>
              <SectionTitle color={palette.crimson}>{`pH = ${fmt(pH)}`}</SectionTitle>
              {labels.map((label, j) => (
                <StatRow key={label} label={`α (${label})`} value={logMode ? `${fmt(at[j])}  →  ${fmt(at[j] * C)} M` : fmt(at[j])} strong={at[j] === Math.max(...at)} />
              ))}
            </ResultBox>
          )}
        </>
      ) : (
        <Notice text={L('En az bir pKa girin.', 'Enter at least one pKa.')} />
      )}
    </View>
  );
}

export function TwoComponentTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [v, setV] = useState({ A1: '0.857', A2: '0.481', ex1: '16440', ey1: '3870', ex2: '3990', ey2: '6420', b: '1' });
  const n = Object.fromEntries(Object.entries(v).map(([k, s]) => [k, parseNumber(s)])) as Record<keyof typeof v, number>;
  const det = n.b * n.b * (n.ex1 * n.ey2 - n.ey1 * n.ex2);
  const ok = Object.values(n).every(Number.isFinite) && det !== 0;
  const cx = ok ? (n.b * (n.A1 * n.ey2 - n.A2 * n.ey1)) / det : NaN;
  const cy = ok ? (n.b * (n.ex1 * n.A2 - n.ex2 * n.A1)) / det : NaN;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const f = (key: keyof typeof v, label: string, unit?: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={v[key]} onChangeText={(s) => setV({ ...v, [key]: s })} unit={unit} color={color} />
    </View>
  );
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>λ₁</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('A1', 'A_λ₁')}
          {f('ex1', 'ε_X,λ₁')}
          {f('ey1', 'ε_Y,λ₁')}
        </View>
        <SectionTitle color={color}>λ₂</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('A2', 'A_λ₂')}
          {f('ex2', 'ε_X,λ₂')}
          {f('ey2', 'ε_Y,λ₂')}
        </View>
        {f('b', L('Optik yol b', 'Path length b'), 'cm')}
        <Text style={{ fontSize: 12, color: colors.textMuted }}>ε: L mol⁻¹ cm⁻¹</Text>
      </Card>
      {ok ? (
        <ResultBox>
          <StatRow label="c_X (M)" value={fmt(cx)} strong />
          <StatRow label="c_Y (M)" value={fmt(cy)} strong />
        </ResultBox>
      ) : (
        <Notice tone="error" text={L('Değerleri kontrol edin (determinant sıfır olmamalı).', 'Check the values (the determinant must not be zero).')} />
      )}
    </View>
  );
}
