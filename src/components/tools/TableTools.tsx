import { useMemo, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { pureWaterSolubility } from '../../core/equilibria';
import { parseNumber } from '../../core/format';
import { molarMass } from '../../core/molarMass';
import { DIXON_Q, fCritical, grubbsCritical, tCritical } from '../../core/stats';
import { ACIDS, KSP, PHYSICAL_CONSTANTS } from '../../data/tables/constants';
import { ELEMENTS } from '../../data/tables/elements';
import { useApp } from '../../i18n/AppSettings';
import { colors, palette, tint } from '../../theme/colors';
import { Card, Field, Notice, ResultBox, SectionTitle, StatRow, styles as ui } from '../ui';
import { ConfidencePicker, pct, type ToolProps } from './common';

const fold = (s: string) =>
  s
    .toLocaleLowerCase('tr')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/[₀-₉]/g, (d) => String('₀₁₂₃₄₅₆₇₈₉'.indexOf(d)));

function SearchBox({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  const { t } = useApp();
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={t('tableSearch')}
      placeholderTextColor="#9AA6B2"
      autoCorrect={false}
      autoCapitalize="none"
      style={ui.input}
    />
  );
}

function Row({ cells, header, zebra, color }: { cells: string[]; header?: boolean; zebra?: boolean; color: string }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: header ? color : zebra ? tint(color, 0.93) : colors.surface,
        borderRadius: header ? 8 : 0,
      }}
    >
      {cells.map((c, i) => (
        <Text
          key={i}
          selectable
          style={{
            flex: i === 0 ? 2.2 : 1.3,
            fontSize: 14,
            fontWeight: header || i === 0 ? '700' : '500',
            color: header ? (color === palette.amber ? palette.ink : '#fff') : colors.text,
            textAlign: i === 0 ? 'left' : 'right',
          }}
        >
          {c}
        </Text>
      ))}
    </View>
  );
}

export function KaTable({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  const [q, setQ] = useState('');
  const rows = ACIDS.filter((a) => !q || fold(`${a.name.tr} ${a.name.en} ${a.formula}`).includes(fold(q)));
  return (
    <View style={{ gap: 14 }}>
      <SearchBox value={q} onChange={setQ} />
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[lang === 'tr' ? 'Madde' : 'Substance', 'Ka', 'pKa']} header color={color} />
        {rows.map((a, i) => (
          <View key={a.formula + i}>
            {a.ka.map((k, j) => (
              <Row
                key={j}
                zebra={i % 2 === 1}
                color={color}
                cells={[j === 0 ? `${tx(a.name)}\n${a.formula}` : `   Ka${'₁₂₃₄'[j]}`, fmt(k), fmt(-Math.log10(k))]}
              />
            ))}
          </View>
        ))}
      </Card>
      <Notice text={lang === 'tr' ? '25 °C. Bazlar eşlenik asitleri (BH⁺) olarak listelenmiştir; pKb = 14,00 − pKa.' : '25 °C. Bases are listed as their conjugate acids (BH⁺); pKb = 14.00 − pKa.'} />
    </View>
  );
}

export function KspTable({ color }: ToolProps) {
  const { tx, fmt, lang } = useApp();
  const [q, setQ] = useState('');
  const rows = KSP.filter((a) => !q || fold(`${a.name.tr} ${a.name.en} ${a.formula}`).includes(fold(q)));
  return (
    <View style={{ gap: 14 }}>
      <SearchBox value={q} onChange={setQ} />
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[lang === 'tr' ? 'Madde' : 'Substance', 'Ksp', 's (M)']} header color={color} />
        {rows.map((a, i) => (
          <Row
            key={a.formula}
            zebra={i % 2 === 1}
            color={color}
            cells={[`${tx(a.name)}\n${a.formula}`, fmt(a.ksp), fmt(pureWaterSolubility(a.ksp, a.x, a.y, a.formula.includes('(OH)')))]}
          />
        ))}
      </Card>
      <Notice text={lang === 'tr' ? '25 °C. s: saf sudaki molar çözünürlük. Hidroksitlerde suyun kendi OH⁻ iyonu hesaba katılır (çok az çözünen Fe(OH)₃ gibi hidroksitlerde basit formül çok yüksek sonuç verir). Diğer tuzlarda hidroliz ve kompleksleşme ihmal edilmiştir; örneğin sülfür, karbonat ve fosfatların gerçek çözünürlüğü daha yüksektir.' : '25 °C. s: molar solubility in pure water. For hydroxides the OH⁻ from water itself is included (for very insoluble hydroxides such as Fe(OH)₃ the simple formula gives far too high a value). For other salts hydrolysis and complexation are neglected; e.g. sulfides, carbonates and phosphates are actually more soluble.'} />
    </View>
  );
}

export function ElementsTable({ color }: ToolProps) {
  const { tx, lang } = useApp();
  const [q, setQ] = useState('');
  const rows = ELEMENTS.filter((e) => !q || fold(`${e.symbol} ${e.tr} ${e.en} ${e.z}`).includes(fold(q)) || e.symbol.toLowerCase() === q.toLowerCase());
  return (
    <View style={{ gap: 14 }}>
      <SearchBox value={q} onChange={setQ} />
      <Card style={{ padding: 8, gap: 0 }}>
        <Row cells={[lang === 'tr' ? 'Element' : 'Element', 'Z', lang === 'tr' ? 'Atom kütlesi' : 'Atomic weight']} header color={color} />
        {rows.map((e, i) => (
          <Row
            key={e.symbol}
            zebra={i % 2 === 1}
            color={color}
            cells={[`${e.symbol} — ${tx({ tr: e.tr, en: e.en })}`, String(e.z), e.radioactive ? `[${e.mass}]` : String(e.mass)]}
          />
        ))}
      </Card>
      <Notice text={lang === 'tr' ? '[ ]: kararlı izotopu olmayan elementlerde en uzun ömürlü izotopun kütle numarası.' : '[ ]: mass number of the longest-lived isotope for elements without stable isotopes.'} />
    </View>
  );
}

export function ConstantsTable({ color }: ToolProps) {
  const { tx, lang } = useApp();
  return (
    <Card style={{ padding: 8, gap: 0 }}>
      <Row cells={[lang === 'tr' ? 'Sabit' : 'Constant', lang === 'tr' ? 'Değer' : 'Value', lang === 'tr' ? 'Birim' : 'Unit']} header color={color} />
      {PHYSICAL_CONSTANTS.map((c, i) => (
        <Row key={c.symbol} zebra={i % 2 === 1} color={color} cells={[`${c.symbol} — ${tx(c.name)}`, c.value.toPrecision(10).replace(/\.?0+(e|$)/, '$1'), c.unit]} />
      ))}
    </Card>
  );
}

export function CriticalValuesTool({ color }: ToolProps) {
  const { fmt, lang } = useApp();
  const [conf, setConf] = useState(0.95);
  const [df1, setDf1] = useState('4');
  const [df2, setDf2] = useState('4');
  const [n, setN] = useState('7');
  const d1 = parseNumber(df1);
  const d2 = parseNumber(df2);
  const nn = parseNumber(n);
  const alpha = Math.round((1 - conf) * 1000) / 1000;
  const L = (tr: string, en: string) => (lang === 'tr' ? tr : en);
  const qKey = String(alpha) as keyof typeof DIXON_Q;
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <ConfidencePicker value={conf} onChange={setConf} color={color} />
        <View style={{ flexDirection: 'row', gap: 8 }}>
          <View style={{ flex: 1 }}>
            <Field label={L('Serbestlik derecesi ν₁', 'Degrees of freedom ν₁')} value={df1} onChangeText={setDf1} color={color} />
          </View>
          <View style={{ flex: 1 }}>
            <Field label="ν₂ (F)" value={df2} onChangeText={setDf2} color={color} />
          </View>
        </View>
        <Field label={L('Veri sayısı n (Q, G)', 'Number of values n (Q, G)')} value={n} onChangeText={setN} color={color} />
      </Card>
      <ResultBox>
        {d1 >= 1 && <StatRow label={`t (${L('çift yönlü', 'two-tailed')}, ν = ${d1})`} value={fmt(tCritical(conf, d1))} strong />}
        {d1 >= 1 && d2 >= 1 && <StatRow label={`F (${L('çift yönlü', 'two-tailed')}, ${d1}, ${d2})`} value={fmt(fCritical(alpha / 2, d1, d2))} />}
        {d1 >= 1 && d2 >= 1 && <StatRow label={`F (${L('tek yönlü', 'one-tailed')}, ${d1}, ${d2})`} value={fmt(fCritical(alpha, d1, d2))} />}
        {nn >= 3 && nn <= 10 && DIXON_Q[qKey] && <StatRow label={`Q (n = ${nn})`} value={fmt(DIXON_Q[qKey][nn - 3])} />}
        {nn >= 3 && <StatRow label={`G Grubbs (n = ${nn})`} value={fmt(grubbsCritical(nn, alpha))} />}
      </ResultBox>
      <Notice text={L(`Güven düzeyi ${pct(conf)} (α = ${alpha}). Q değerleri n = 3–10 için Rorabacher (1991) tablosundandır.`, `Confidence ${pct(conf, 'en')} (α = ${alpha}). Q values for n = 3–10 are from Rorabacher (1991).`)} />
    </View>
  );
}

export function MolarMassTool({ color }: ToolProps) {
  const { t, fmt, lang } = useApp();
  const [f, setF] = useState('CuSO4·5H2O');
  const r = useMemo(() => molarMass(f), [f]);
  return (
    <View style={{ gap: 14 }}>
      <Card>
        <SectionTitle color={color}>{t('formulaInput')}</SectionTitle>
        <TextInput value={f} onChangeText={setF} autoCapitalize="none" autoCorrect={false} style={[ui.input, { fontSize: 20 }]} />
        <Text style={{ fontSize: 12, color: colors.textMuted }}>
          {lang === 'tr'
            ? 'Büyük/küçük harfe dikkat edin (Co ≠ CO). Parantez ( ), [ ] ve hidrat noktası (· veya .) kullanılabilir. Kesirli hidrat için · kullanın: CaSO4·0.5H2O.'
            : 'Mind the case (Co ≠ CO). Parentheses ( ), [ ] and hydrate dots (· or .) are supported. For fractional hydrates use ·: CaSO4·0.5H2O.'}
        </Text>
      </Card>
      {r.ok ? (
        <>
          <ResultBox>
            <StatRow label="M (g/mol)" value={fmt(r.molarMass)} strong />
          </ResultBox>
          <Card style={{ padding: 8, gap: 0 }}>
            <Row cells={[t('composition'), 'n', '%']} header color={color} />
            {r.composition.map((c, i) => (
              <Row key={c.symbol} zebra={i % 2 === 1} color={color} cells={[c.symbol, String(Math.round(c.count * 1e6) / 1e6).replace('.', lang === 'tr' ? ',' : '.'), fmt(c.percent)]} />
            ))}
          </Card>
        </>
      ) : f.trim() ? (
        <Notice
          tone="error"
          text={
            r.error.startsWith('unknown:')
              ? `${lang === 'tr' ? 'Bilinmeyen element' : 'Unknown element'}: ${r.error.slice(8)}`
              : lang === 'tr'
                ? 'Formül okunamadı.'
                : 'Could not parse the formula.'
          }
        />
      ) : null}
    </View>
  );
}
