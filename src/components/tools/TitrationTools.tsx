import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { parseNumber, parseTable } from '../../core/format';
import {
  acidBaseCurve,
  acidBasePH,
  alphaY4,
  derivativeEndPoint,
  edtaCurve,
  edtaPM,
  precipitationCurve,
  precipitationPAg,
  redoxCurve,
  redoxPotential,
  type AcidBaseKind,
} from '../../core/titration';
import type { L } from '../../core/types';
import { KSP } from '../../data/tables/constants';
import { ACID_BASE_INDICATORS, EDTA_KF, REDOX_INDICATORS, type IndicatorEntry } from '../../data/tables/v2tables';
import { useApp } from '../../i18n/AppSettings';
import { colors, palette } from '../../theme/colors';
import { LineChart } from '../LineChart';
import { Card, Chip, Field, Notice, ResultBox, SectionTitle, StatRow } from '../ui';
import { DataCard, type ToolProps } from './common';

const mL = (litres: number) => litres * 1000;

/** Memoizes an expensive pure computation on a structurally compared parameter object. */
function useComputed<T, R>(params: T | undefined, fn: (p: T) => R): R | undefined {
  const key = params === undefined ? '' : JSON.stringify(params);
  return useMemo(() => (key ? fn(JSON.parse(key) as T) : undefined), [key, fn]);
}

const redoxCurveWide = (p: Parameters<typeof redoxCurve>[0]) => redoxCurve(p, 2);

/** Parses the given fields; returns undefined if any is not a positive (or allowed) number. */
function nums<T extends string>(raw: Record<T, string>, allowNegative: NoInfer<T>[] = []): Record<T, number> | undefined {
  const out = {} as Record<T, number>;
  for (const k of Object.keys(raw) as T[]) {
    const n = parseNumber(raw[k]);
    if (!Number.isFinite(n) || (!allowNegative.includes(k) && n <= 0)) return undefined;
    out[k] = n;
  }
  return out;
}

/**
 * Indicators whose transition range lies inside the jump between 0.2 % before and after the
 * equivalence point (titration error ≤ 0.2 %); falls back to those containing the equivalence value.
 */
function suitableIndicators(list: IndicatorEntry[], yEq: number, yBefore: number, yAfter: number) {
  const lo = Math.min(yBefore, yAfter);
  const hi = Math.max(yBefore, yAfter);
  const strict = list.filter((i) => i.low >= lo && i.high <= hi);
  if (strict.length) return { list: strict, strict: true };
  return { list: list.filter((i) => i.low <= yEq && i.high >= yEq), strict: false };
}

function IndicatorAdvice({ result, unit }: { result: { list: IndicatorEntry[]; strict: boolean }; unit: string }) {
  const { tx, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  return (
    <View style={{ gap: 4 }}>
      <Text style={{ fontSize: 14, fontWeight: '700', color: colors.text }}>{L('Uygun indikatör(ler)', 'Suitable indicator(s)')}</Text>
      {result.list.length ? (
        result.list.map((i) => (
          <Text key={i.name.en} style={{ fontSize: 14, color: colors.text }}>
            • {tx(i.name)} ({fmt(i.low)}–{fmt(i.high)} {unit}; {tx(i.colors)})
          </Text>
        ))
      ) : (
        <Text style={{ fontSize: 14, color: colors.danger }}>{L('Bu dönüm noktası için uygun indikatör yok.', 'No suitable indicator for this end point.')}</Text>
      )}
      {!result.strict && result.list.length > 0 && (
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L('Sıçrama küçük: bu indikatörlerle titrasyon hatası %0,2\'yi aşabilir.', 'Small break: the titration error with these indicators may exceed 0.2%.')}
        </Text>
      )}
    </View>
  );
}

const KINDS: { kind: AcidBaseKind; label: L }[] = [
  { kind: 'strongAcid', label: { tr: 'Kuvvetli asit + NaOH', en: 'Strong acid + NaOH' } },
  { kind: 'weakAcid', label: { tr: 'Zayıf / poliprotik asit + NaOH', en: 'Weak / polyprotic acid + NaOH' } },
  { kind: 'strongBase', label: { tr: 'Kuvvetli baz + HCl', en: 'Strong base + HCl' } },
  { kind: 'weakBase', label: { tr: 'Zayıf baz + HCl', en: 'Weak base + HCl' } },
];

export function AcidBaseCurveTool({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [kind, setKind] = useState<AcidBaseKind>('weakAcid');
  const [raw, setRaw] = useState({ ca: '0.100', va: '50.00', ct: '0.100' });
  const [pkas, setPkas] = useState(['4.757', '', '']);
  const weak = kind === 'weakAcid' || kind === 'weakBase';
  const n = nums(raw);
  const pKaList = pkas.map(parseNumber).filter(Number.isFinite).sort((a, b) => a - b);
  const params = n && (!weak || pKaList.length) ? { kind, ca: n.ca, va: n.va / 1000, ct: n.ct, pKas: weak ? pKaList : undefined } : undefined;
  const curve = useComputed(params, acidBaseCurve);

  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Titrasyon türü', 'Titration type')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {KINDS.map((k) => (
            <Chip key={k.kind} label={tx(k.label)} selected={kind === k.kind} onPress={() => setKind(k.kind)} color={color} small />
          ))}
        </View>
        <Field label={L('Analit derişimi (M)', 'Analyte concentration (M)')} value={raw.ca} onChangeText={(s) => setRaw({ ...raw, ca: s })} color={color} />
        <Field label={L('Analit hacmi (mL)', 'Analyte volume (mL)')} value={raw.va} onChangeText={(s) => setRaw({ ...raw, va: s })} color={color} />
        <Field
          label={kind.endsWith('Acid') ? L('NaOH derişimi (M)', 'NaOH concentration (M)') : L('HCl derişimi (M)', 'HCl concentration (M)')}
          value={raw.ct}
          onChangeText={(s) => setRaw({ ...raw, ct: s })}
          color={color}
        />
        {weak && (
          <>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {pkas.map((p, i) => (
                <View key={i} style={{ flex: 1 }}>
                  <Field label={`pKa${'₁₂₃'[i]}`} value={p} onChangeText={(s) => setPkas(pkas.map((q, j) => (j === i ? s : q)))} color={color} />
                </View>
              ))}
            </View>
            <Text style={{ fontSize: 12, color: colors.textMuted }}>
              {kind === 'weakBase'
                ? L('Zayıf baz için eşlenik asidin (BH⁺) pKa değerini girin (ör. NH₄⁺: 9,24).', 'For a weak base enter the pKa of its conjugate acid BH⁺ (e.g. NH₄⁺: 9.24).')
                : L('Monoprotik asit için yalnızca pKa₁ girin.', 'For a monoprotic acid enter only pKa₁.')}
            </Text>
          </>
        )}
      </Card>
      {curve && params ? (
        <>
          <Card>
            <LineChart
              series={[{ label: 'pH', color: palette.vermilion, points: curve.points.map((p) => [mL(p.v), p.y]) }]}
              xLabel={L('Titrant hacmi (mL)', 'Titrant volume (mL)')}
              yLabel="pH"
              yDomain={[0, 14]}
              markerX={curve.equivalence.map((e) => mL(e.v))}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Başlangıç pH\'ı', 'Initial pH')} value={fmt(acidBasePH(params, 0))} />
            {curve.equivalence.map((e, i) => (
              <View key={i} style={{ gap: 6, borderTopWidth: i ? 1 : 0, borderTopColor: '#EADBA8', paddingTop: i ? 8 : 0 }}>
                <StatRow label={`${L('Eşdeğerlik noktası', 'Equivalence point')} ${curve.equivalence.length > 1 ? i + 1 : ''}`} value={`${fmt(mL(e.v))} mL`} strong />
                <StatRow label="pH" value={fmt(e.y)} strong />
                {weak && (
                  <StatRow
                    label={L('Yarı eşdeğerlikte pH', 'pH at half-equivalence')}
                    value={fmt(acidBasePH(params, i === 0 ? e.v / 2 : (e.v + curve.equivalence[i - 1].v) / 2))}
                  />
                )}
                <IndicatorAdvice result={suitableIndicators(ACID_BASE_INDICATORS, e.y, acidBasePH(params, e.v * 0.998), acidBasePH(params, e.v * 1.002))} unit="pH" />
              </View>
            ))}
          </ResultBox>
        </>
      ) : (
        <Notice text={L('Tüm değerleri pozitif sayı olarak girin.', 'Enter all values as positive numbers.')} />
      )}
    </View>
  );
}

export function EdtaCurveTool({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [metal, setMetal] = useState('Ca²⁺');
  const [raw, setRaw] = useState({ pH: '10.00', aM: '1', cm: '0.100', vm: '100.0', cy: '0.100' });
  const n = nums(raw);
  const entry = EDTA_KF.find((e) => e.ion === metal)!;
  const aY = n ? alphaY4(n.pH) : NaN;
  const kEff = n ? aY * entry.kf * Math.min(n.aM, 1) : NaN;
  const params = n ? { cm: n.cm, vm: n.vm / 1000, cy: n.cy, kEff, alphaM: Math.min(n.aM, 1) } : undefined;
  const curve = useComputed(params, edtaCurve);

  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Metal iyonu', 'Metal ion')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
          {EDTA_KF.map((e) => (
            <Chip key={e.ion} label={e.ion} selected={metal === e.ion} onPress={() => setMetal(e.ion)} color={color} small />
          ))}
        </View>
        <Text style={{ fontSize: 13, color: colors.textMuted }}>
          {tx(entry.name)}: Kf = {fmt(entry.kf)} (log Kf = {fmt(Math.log10(entry.kf))})
        </Text>
        <Field label="pH" value={raw.pH} onChangeText={(s) => setRaw({ ...raw, pH: s })} color={color} />
        <Field label={L('α_M (yardımcı ligand yoksa 1)', 'α_M (1 without auxiliary ligand)')} value={raw.aM} onChangeText={(s) => setRaw({ ...raw, aM: s })} color={color} />
        <Field label={L('Metal derişimi (M)', 'Metal concentration (M)')} value={raw.cm} onChangeText={(s) => setRaw({ ...raw, cm: s })} color={color} />
        <Field label={L('Metal çözeltisi hacmi (mL)', 'Metal solution volume (mL)')} value={raw.vm} onChangeText={(s) => setRaw({ ...raw, vm: s })} color={color} />
        <Field label={L('EDTA derişimi (M)', 'EDTA concentration (M)')} value={raw.cy} onChangeText={(s) => setRaw({ ...raw, cy: s })} color={color} />
      </Card>
      {curve && params ? (
        <>
          <Card>
            <LineChart
              series={[{ label: `p${metal.replace(/[⁰-⁹⁺]+$/, '')}`, color: palette.vermilion, points: curve.points.map((p) => [mL(p.v), p.y]) }]}
              xLabel={L('EDTA hacmi (mL)', 'EDTA volume (mL)')}
              yLabel="pM"
              markerX={mL(curve.equivalence[0].v)}
            />
          </Card>
          <ResultBox>
            <StatRow label="α_Y⁴⁻" value={fmt(aY)} />
            <StatRow label="K″f" value={`${fmt(params.kEff)}  (log = ${fmt(Math.log10(params.kEff))})`} strong />
            <StatRow label={L('Eşdeğerlik hacmi', 'Equivalence volume')} value={`${fmt(mL(curve.equivalence[0].v))} mL`} />
            <StatRow label={L('Eşdeğerlikte pM', 'pM at equivalence')} value={fmt(curve.equivalence[0].y)} strong />
            <StatRow label={L('Eşdeğerlikten 1 mL önce / sonra', '1 mL before / after equivalence')} value={`${fmt(edtaPM(params, curve.equivalence[0].v - 0.001))} / ${fmt(edtaPM(params, curve.equivalence[0].v + 0.001))}`} />
          </ResultBox>
          {Math.log10(params.kEff) < 8 && (
            <Notice tone="error" text={L('log K″f < 8: bu pH\'ta keskin bir dönüm noktası beklenmez; pH\'ı artırmayı düşünün.', 'log K″f < 8: no sharp end point at this pH; consider a higher pH.')} />
          )}
        </>
      ) : (
        <Notice text={L('Tüm değerleri pozitif sayı olarak girin.', 'Enter all values as positive numbers.')} />
      )}
    </View>
  );
}

const HALIDES = [
  { label: 'Cl⁻ (AgCl)', formula: 'AgCl' },
  { label: 'Br⁻ (AgBr)', formula: 'AgBr' },
  { label: 'I⁻ (AgI)', formula: 'AgI' },
  { label: 'SCN⁻ (AgSCN)', formula: 'AgSCN' },
];
const KSP_AG2CRO4 = KSP.find((k) => k.formula === 'Ag₂CrO₄')!.ksp;

export function PrecipitationCurveTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [halide, setHalide] = useState('AgCl');
  const [raw, setRaw] = useState({ cx: '0.100', vx: '50.00', cAg: '0.100' });
  const n = nums(raw);
  const ksp = KSP.find((k) => k.formula === halide)!.ksp;
  const params = n ? { cx: n.cx, vx: n.vx / 1000, cAg: n.cAg, ksp } : undefined;
  const curve = useComputed(params, precipitationCurve);
  const mohrChromate = curve ? KSP_AG2CRO4 / 10 ** (-2 * curve.equivalence[0].y) : NaN;
  const pKsp = -Math.log10(ksp);

  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Titre edilen iyon', 'Titrated ion')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {HALIDES.map((h) => (
            <Chip key={h.formula} label={h.label} selected={halide === h.formula} onPress={() => setHalide(h.formula)} color={color} small />
          ))}
        </View>
        <Text style={{ fontSize: 13, color: colors.textMuted }}>Ksp = {fmt(ksp)}</Text>
        <Field label={L('Analit derişimi (M)', 'Analyte concentration (M)')} value={raw.cx} onChangeText={(s) => setRaw({ ...raw, cx: s })} color={color} />
        <Field label={L('Analit hacmi (mL)', 'Analyte volume (mL)')} value={raw.vx} onChangeText={(s) => setRaw({ ...raw, vx: s })} color={color} />
        <Field label={L('AgNO₃ derişimi (M)', 'AgNO₃ concentration (M)')} value={raw.cAg} onChangeText={(s) => setRaw({ ...raw, cAg: s })} color={color} />
      </Card>
      {curve && params ? (
        <>
          <Card>
            <LineChart
              series={[
                { label: 'pAg', color: palette.vermilion, points: curve.points.map((p) => [mL(p.v), p.y]) },
                { label: 'pX', color: palette.navy, points: curve.points.map((p) => [mL(p.v), pKsp - p.y]), dashed: true },
              ]}
              xLabel={L('AgNO₃ hacmi (mL)', 'AgNO₃ volume (mL)')}
              yLabel="pAg / pX"
              markerX={mL(curve.equivalence[0].v)}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Eşdeğerlik hacmi', 'Equivalence volume')} value={`${fmt(mL(curve.equivalence[0].v))} mL`} strong />
            <StatRow label={L('Eşdeğerlikte pAg', 'pAg at equivalence')} value={fmt(curve.equivalence[0].y)} strong />
            <StatRow
              label={L('%0,2 önce / sonra pAg', 'pAg 0.2% before / after')}
              value={`${fmt(precipitationPAg(params, curve.equivalence[0].v * 0.998))} / ${fmt(precipitationPAg(params, curve.equivalence[0].v * 1.002))}`}
            />
            {mohrChromate <= 0.05 ? (
              <StatRow label={L('Mohr: gereken [CrO₄²⁻]', 'Mohr: required [CrO₄²⁻]')} value={`${fmt(mohrChromate)} M`} />
            ) : (
              <StatRow label={L('Mohr: gereken [CrO₄²⁻]', 'Mohr: required [CrO₄²⁻]')} value={L(`${fmt(mohrChromate)} M: gerçekçi değil (> 0,05 M); kromat tam eşdeğerlikte çökemez`, `${fmt(mohrChromate)} M: unrealistic (> 0.05 M); chromate cannot precipitate exactly at equivalence`)} />
            )}
          </ResultBox>
        </>
      ) : (
        <Notice text={L('Tüm değerleri pozitif sayı olarak girin.', 'Enter all values as positive numbers.')} />
      )}
    </View>
  );
}

const REDOX_PRESETS = [
  { label: 'Fe²⁺ + Ce⁴⁺ (1 M H₂SO₄, E°′)', n1: '1', e1: '0.68', n2: '1', e2: '1.44' },
  { label: 'Fe²⁺ + MnO₄⁻', n1: '1', e1: '0.771', n2: '5', e2: '1.51' },
  { label: 'Sn²⁺ + Fe³⁺', n1: '2', e1: '0.154', n2: '1', e2: '0.771' },
];

export function RedoxCurveTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState({ c1: '0.100', v1: '50.00', n1: '1', e1: '0.68', c2: '0.100', n2: '1', e2: '1.44' });
  const n = nums(raw, ['e1', 'e2']);
  const params = n ? { c1: n.c1, v1: n.v1 / 1000, n1: n.n1, e1: n.e1, c2: n.c2, n2: n.n2, e2: n.e2 } : undefined;
  const curve = useComputed(params, redoxCurveWide);
  const f = (key: keyof typeof raw, label: string) => (
    <View style={{ flex: 1 }}>
      <Field label={label} value={raw[key]} onChangeText={(s) => setRaw({ ...raw, [key]: s })} color={color} />
    </View>
  );

  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{L('Hazır sistemler', 'Presets')}</SectionTitle>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {REDOX_PRESETS.map((p) => (
            <Chip key={p.label} label={p.label} small color={color} onPress={() => setRaw({ ...raw, n1: p.n1, e1: p.e1, n2: p.n2, e2: p.e2 })} />
          ))}
        </View>
        <SectionTitle color={color}>{L('Analit (indirgen)', 'Analyte (reductant)')}</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('c1', 'C (M)')}
          {f('v1', 'V (mL)')}
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('n1', 'n₁')}
          {f('e1', 'E₁° (V)')}
        </View>
        <SectionTitle color={color}>{L('Titrant (yükseltgen)', 'Titrant (oxidant)')}</SectionTitle>
        <View style={{ flexDirection: 'row', gap: 8 }}>
          {f('c2', 'C (M)')}
          {f('n2', 'n₂')}
          {f('e2', 'E₂° (V)')}
        </View>
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {L(
            'Ox + ne⁻ ⇌ Red tipindeki 1:1 çiftler için; pH\'a bağlı çiftlerde 1 M H⁺ varsayılır. Daha doğru sonuç için formal potansiyelleri kullanın.',
            'For 1:1 couples Ox + ne⁻ ⇌ Red; pH-dependent couples assume 1 M H⁺. Use formal potentials for better accuracy.',
          )}
        </Text>
      </Card>
      {curve && params ? (
        <>
          <Card>
            <LineChart
              series={[{ label: 'E (V)', color: palette.vermilion, points: curve.points.map((p) => [mL(p.v), p.y]) }]}
              xLabel={L('Titrant hacmi (mL)', 'Titrant volume (mL)')}
              yLabel="E (V)"
              markerX={mL(curve.equivalence[0].v)}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('Eşdeğerlik hacmi', 'Equivalence volume')} value={`${fmt(mL(curve.equivalence[0].v))} mL`} strong />
            <StatRow label={L('Eşdeğerlik potansiyeli', 'Equivalence potential')} value={`${fmt(curve.equivalence[0].y)} V`} strong />
            <StatRow label={L('Yarı eşdeğerlikte E', 'E at half-equivalence')} value={`${fmt(redoxPotential(params, curve.equivalence[0].v / 2))} V`} />
            <IndicatorAdvice
              result={suitableIndicators(
                REDOX_INDICATORS,
                curve.equivalence[0].y,
                redoxPotential(params, curve.equivalence[0].v * 0.998),
                redoxPotential(params, curve.equivalence[0].v * 1.002),
              )}
              unit="V"
            />
          </ResultBox>
        </>
      ) : (
        <Notice text={L('Derişim, hacim ve n pozitif olmalı.', 'Concentrations, volume and n must be positive.')} />
      )}
    </View>
  );
}

export function DerivativeTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const [raw, setRaw] = useState(
    '20.00 4.44\n22.00 4.70\n23.00 4.86\n24.00 5.14\n24.50 5.40\n24.80 5.84\n24.90 6.14\n25.00 8.72\n25.10 11.30\n25.20 11.60\n25.50 11.99\n26.00 12.29\n28.00 12.74',
  );
  const rows = parseTable(raw);
  const r = derivativeEndPoint(
    rows.map((x) => x[0]),
    rows.map((x) => x[1]),
  );
  return (
    <View style={{ gap: 14 }}>
      <DataCard title={t('data')} value={raw} onChange={setRaw} hint={L('Her satır: hacim (mL)  pH ya da E', 'Each line: volume (mL)  pH or E')} color={color} rows={8} />
      {r ? (
        <>
          <Card>
            <LineChart
              series={[{ label: L('Titrasyon eğrisi', 'Titration curve'), color: palette.navy, points: rows.map((x) => [x[0], x[1]]) }]}
              xLabel="V (mL)"
              yLabel="pH / E"
              markerX={r.vSecond ?? r.vFirst}
            />
          </Card>
          <Card>
            <LineChart
              series={[{ label: 'Δy/ΔV (ΔpH/ΔV, ΔE/ΔV)', color: palette.vermilion, points: r.first }]}
              xLabel="V (mL)"
              yLabel="Δy/ΔV"
              markerX={r.vFirst}
            />
          </Card>
          <ResultBox>
            <StatRow label={L('1. türev maksimumu', 'Maximum of 1st derivative')} value={`${fmt(r.vFirst)} mL`} strong />
            {r.vSecond !== undefined && <StatRow label={L('2. türevin sıfır noktası', 'Zero of 2nd derivative')} value={`${fmt(r.vSecond)} mL`} strong />}
          </ResultBox>
        </>
      ) : (
        <Notice text={L('En az 4 veri noktası girin.', 'Enter at least 4 data points.')} />
      )}
    </View>
  );
}
