import { Stack, router, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { ToolRow } from '../../components/ToolRow';
import { Sources } from '../../components/ToolView';
import { useLayout } from '../../components/layout';
import { Banner, Button, Card, Columns, FormulaText, Notice, Screen, SectionTitle } from '../../components/ui';
import { unitLabel, unitsOf } from '../../core/units';
import { TOOL_DETAILS } from '../../data/details';
import { MODULE_BY_ID, TOOL_BY_ID } from '../../data/registry';
import { useApp } from '../../i18n/AppSettings';
import { colors, onColor, palette, textColor, tint } from '../../theme/colors';

/** Detailed explanation of a tool: concept, equation, variables, worked example, pitfalls. */
export default function InfoScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx, tf, lang } = useApp();
  const layout = useLayout();
  const tool = TOOL_BY_ID[id];
  const detail = TOOL_DETAILS[id];
  if (!tool || !detail) return <Notice text={t('noResults')} />;
  const module = MODULE_BY_ID[tool.module];
  const color = module.color;
  const fg = onColor(color);
  const list = (x: { tr: string[]; en: string[] }) => x[lang];

  const back = () => (router.canGoBack() ? router.back() : router.replace({ pathname: '/tool/[id]', params: { id: tool.id } }));

  const theory = (
    <>
      <Card accent={color}>
        <SectionTitle color={color}>{t('detailConcept')}</SectionTitle>
        <Paragraphs text={tx(detail.concept)} />
      </Card>
      <Card>
        <SectionTitle color={color}>{t('detailMeaning')}</SectionTitle>
        {tool.formula ? <FormulaText color={color}>{tf(tool.formula)}</FormulaText> : null}
        <Paragraphs text={tx(detail.meaning)} />
      </Card>
      <Card>
        <SectionTitle color={color}>{t('detailUsage')}</SectionTitle>
        <Bullets items={list(detail.usage)} color={color} />
      </Card>
    </>
  );

  const practice = (
    <>
      {tool.kind === 'formula' && (
        <Card>
          <SectionTitle color={color}>{t('detailVariables')}</SectionTitle>
          {tool.variables.map((v) => (
            <View key={v.key} style={{ flexDirection: 'row', gap: 10, alignItems: 'baseline', paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: colors.border }}>
              <Text style={{ width: 48, fontSize: 16, fontWeight: '800', color: textColor(color) }}>{tf(v.symbol)}</Text>
              <View style={{ flex: 1, gap: 2 }}>
                <Text style={{ fontSize: 14, color: colors.text }}>{tx(v.name)}</Text>
                {unitsOf(v.dim).some((u) => u.label) ? (
                  <Text style={{ fontSize: 12, color: colors.textMuted }}>{unitsOf(v.dim).map((u) => unitLabel(u, lang)).join(' · ')}</Text>
                ) : null}
              </View>
            </View>
          ))}
        </Card>
      )}
      <Card>
        <SectionTitle color={color}>{t('detailSolution')}</SectionTitle>
        {list(detail.solution).map((step, i, all) => (
          <View key={i} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i === all.length - 1 ? palette.amber : tint(color, 0.85),
              }}
            >
              <Text style={{ fontSize: 13, fontWeight: '900', color: i === all.length - 1 ? palette.ink : textColor(color) }}>{i + 1}</Text>
            </View>
            <Text style={{ flex: 1, fontSize: 15, lineHeight: 22, color: colors.text, fontWeight: i === all.length - 1 ? '800' : '400' }}>{step}</Text>
          </View>
        ))}
        <Button label={t('backToCalculator')} onPress={back} color={color} />
      </Card>
      <Card style={{ backgroundColor: '#FFF4F2', borderColor: tint(palette.red, 0.7) }}>
        <SectionTitle color={palette.crimson}>{`⚠ ${t('detailMistakes')}`}</SectionTitle>
        <Bullets items={list(detail.mistakes)} color={palette.red} />
      </Card>
      {detail.related.length > 0 && (
        <View style={{ gap: 10 }}>
          <SectionTitle color={color}>{t('detailRelated')}</SectionTitle>
          {detail.related
            .map((rid) => TOOL_BY_ID[rid])
            .filter(Boolean)
            .map((r) => (
              <ToolRow key={r.id} tool={r} showModule={r.module !== tool.module} />
            ))}
        </View>
      )}
      <Sources tool={tool} module={module} />
    </>
  );

  return (
    <>
      <Stack.Screen options={{ title: t('moreInfo'), headerStyle: { backgroundColor: color }, headerTintColor: fg }} />
      <Screen>
        <Banner color={color}>
          <Text style={{ fontSize: 12, fontWeight: '800', color: fg, opacity: 0.8, letterSpacing: 1 }}>{tx(module.name).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US')}</Text>
          <Text style={{ fontSize: 23, fontWeight: '900', color: fg }}>{tx(tool.name)}</Text>
          <Text style={{ fontSize: 15, color: fg, opacity: 0.9 }}>{tx(tool.purpose)}</Text>
        </Banner>
        {layout.twoColumn ? (
          <Columns main={theory} side={practice} />
        ) : (
          <>
            {theory}
            {practice}
          </>
        )}
      </Screen>
    </>
  );
}

/** Paragraphs separated by blank lines; lines starting with "• " become bullets. */
function Paragraphs({ text }: { text: string }) {
  return (
    <View style={{ gap: 10 }}>
      {text.split(/\n\s*\n/).map((para, i) => {
        const lines = para.split('\n');
        const bullets = lines.filter((line) => line.startsWith('• '));
        const prose = lines.filter((line) => !line.startsWith('• ')).join(' ');
        return (
          <View key={i} style={{ gap: 6 }}>
            {prose ? <Text style={{ fontSize: 15, lineHeight: 23, color: colors.text }}>{prose}</Text> : null}
            {bullets.length ? <Bullets items={bullets.map((b) => b.slice(2))} color={palette.navy} /> : null}
          </View>
        );
      })}
    </View>
  );
}

function Bullets({ items, color }: { items: string[]; color: string }) {
  return (
    <View style={{ gap: 8 }}>
      {items.map((item, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
          <View style={{ width: 7, height: 7, borderRadius: 4, backgroundColor: color, marginTop: 8 }} />
          <Text style={{ flex: 1, fontSize: 15, lineHeight: 22, color: colors.text }}>{item}</Text>
        </View>
      ))}
    </View>
  );
}
