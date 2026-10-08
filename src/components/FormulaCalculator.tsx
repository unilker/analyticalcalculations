import { useMemo, useState, type ReactNode } from 'react';
import { Text, View } from 'react-native';

import { formatNumber, parseNumber } from '../core/format';
import { solveFormula } from '../core/solver';
import type { FormulaDef, ModuleDef, Values } from '../core/types';
import { findUnit, fromBase, toBase, unitLabel, unitsOf } from '../core/units';
import { useApp } from '../i18n/AppSettings';
import { colors, palette } from '../theme/colors';
import { MoreInfoButton } from './MoreInfoButton';
import { Button, Card, Chip, Columns, Field, FormulaText, Notice, ResultBox, SectionTitle, UnitButton } from './ui';

interface Props {
  def: FormulaDef;
  module: ModuleDef;
  /** Inputs on the left, formula and result on the right. */
  twoColumn?: boolean;
  /** Extra cards shown after the result (e.g. sources). */
  aside?: ReactNode;
}

function initialValues(def: FormulaDef, lang: 'tr' | 'en'): Record<string, string> {
  const out: Record<string, string> = {};
  for (const v of def.variables) {
    if (v.defaultValue !== undefined) out[v.key] = formatNumber(fromBase(v.defaultValue, v.dim, v.unit), lang, 6);
  }
  return out;
}

export function FormulaCalculator({ def, module, twoColumn, aside }: Props) {
  const { t, tx, tf, fmt, lang } = useApp();
  const label = (v: FormulaDef['variables'][number]) => (tx(v.name) === tf(v.symbol) ? tf(v.symbol) : `${tf(v.symbol)} — ${tx(v.name)}`);
  const color = module.color;
  const solvable = def.variables.filter((v) => !v.inputOnly);
  const [unknown, setUnknown] = useState(def.defaultUnknown);
  const [values, setValues] = useState<Record<string, string>>(() => initialValues(def, lang));
  const [units, setUnits] = useState<Record<string, string>>(() =>
    Object.fromEntries(def.variables.map((v) => [v.key, findUnit(v.dim, v.unit).id])),
  );

  const cycleUnit = (key: string) => {
    const v = def.variables.find((x) => x.key === key)!;
    const list = unitsOf(v.dim);
    if (list.length < 2) return;
    const i = list.findIndex((u) => u.id === units[key]);
    setUnits({ ...units, [key]: list[(i + 1) % list.length].id });
  };

  const { result, invalid, missing } = useMemo(() => {
    const known: Values = {};
    const bad: string[] = [];
    let anyMissing = false;
    for (const v of def.variables) {
      if (v.key === unknown) continue;
      const raw = values[v.key] ?? '';
      if (!raw.trim()) {
        anyMissing = true;
        continue;
      }
      const n = parseNumber(raw);
      if (Number.isNaN(n)) bad.push(v.key);
      else known[v.key] = toBase(n, v.dim, units[v.key]);
    }
    if (anyMissing || bad.length) return { result: undefined, invalid: bad, missing: anyMissing };
    return { result: solveFormula(def, unknown, known), invalid: bad, missing: false };
  }, [def, unknown, values, units]);

  const unknownVar = def.variables.find((v) => v.key === unknown)!;
  const unknownUnit = findUnit(unknownVar.dim, units[unknown]);

  const loadExample = () => {
    const ex = def.examples?.[0];
    if (!ex) return;
    const next: Record<string, string> = {};
    for (const v of def.variables) {
      if (v.key in ex.values) next[v.key] = formatNumber(fromBase(ex.values[v.key], v.dim, units[v.key]), lang, 6);
    }
    setUnknown(ex.unknown);
    setValues(next);
  };

  const about = (
    <>
      <Card accent={color}>
        <FormulaText color={color}>{tf(def.formula)}</FormulaText>
        <SectionTitle color={color}>{t('whatFor')}</SectionTitle>
        <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text }}>{tx(def.purpose)}</Text>
        {def.assumptions && (
          <Text style={{ fontSize: 13, lineHeight: 19, color: colors.textMuted }}>
            <Text style={{ fontWeight: '700' }}>{t('assumptions')}: </Text>
            {tx(def.assumptions)}
          </Text>
        )}
        <MoreInfoButton toolId={def.id} color={color} />
      </Card>
    </>
  );
  const controls = (
    <>
      {solvable.length > 1 && (
        <Card>
          <SectionTitle color={color}>{t('solveFor')}</SectionTitle>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {solvable.map((v) => (
              <Chip key={v.key} label={tf(v.symbol)} selected={v.key === unknown} onPress={() => setUnknown(v.key)} color={color} />
            ))}
          </View>
          <Text style={{ fontSize: 13, color: colors.textMuted }}>{tx(unknownVar.name)}</Text>
        </Card>
      )}

      <Card>
        {def.variables
          .filter((v) => v.key !== unknown)
          .map((v) => {
            const unit = findUnit(v.dim, units[v.key]);
            return (
              <Field
                key={v.key}
                label={label(v)}
                value={values[v.key] ?? ''}
                onChangeText={(s) => setValues({ ...values, [v.key]: s })}
                unit={unitLabel(unit, lang)}
                onUnitPress={unitsOf(v.dim).length > 1 ? () => cycleUnit(v.key) : undefined}
                invalid={invalid.includes(v.key)}
                color={color}
              />
            );
          })}
        <Text style={{ fontSize: 12, color: colors.textMuted }}>{t('inputHint')}</Text>
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
          {def.examples?.length ? <Button label={t('loadExample')} onPress={loadExample} color={color} /> : null}
          <Button label={t('clear')} onPress={() => setValues(initialValues(def, lang))} color={palette.livid} outline />
        </View>
      </Card>
    </>
  );
  const outcome = (
    <>
      {result?.ok ? (
        <ResultBox>
          <Text style={{ fontSize: 14, fontWeight: '800', color: palette.crimson, letterSpacing: 0.5 }}>{t('result').toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US')}</Text>
          <Text style={{ fontSize: 15, color: colors.textMuted }}>{label(unknownVar)}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Text selectable style={{ fontSize: 30, fontWeight: '800', color: palette.navy }}>
              {fmt(fromBase(result.value, unknownVar.dim, unknownUnit.id))}
            </Text>
            {unknownUnit.label ? (
              <UnitButton
                unit={unitLabel(unknownUnit, lang)}
                onPress={unitsOf(unknownVar.dim).length > 1 ? () => cycleUnit(unknown) : undefined}
                color={color}
              />
            ) : null}
          </View>
        </ResultBox>
      ) : result && !result.ok ? (
        <Notice tone="error" text={t('noSolution')} />
      ) : invalid.length ? (
        <Notice tone="error" text={t('invalidNumber')} />
      ) : missing ? (
        <Notice text={t('missingInputs')} />
      ) : null}

      {def.examples?.[0]?.description && (
        <Card>
          <SectionTitle color={color}>{t('example')}</SectionTitle>
          <Text style={{ fontSize: 14, color: colors.text }}>{tx(def.examples[0].description)}</Text>
        </Card>
      )}
    </>
  );

  if (twoColumn) {
    // Inputs on the left; formula and result on the right, so the result stays level with the inputs.
    return (
      <Columns
        main={controls}
        side={
          <>
            {about}
            {outcome}
            {aside}
          </>
        }
      />
    );
  }
  return (
    <View style={{ gap: 14 }}>
      {about}
      {controls}
      {outcome}
      {aside}
    </View>
  );
}
