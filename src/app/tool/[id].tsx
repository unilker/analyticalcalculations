import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { FormulaCalculator } from '../../components/FormulaCalculator';
import { CUSTOM_COMPONENTS } from '../../components/tools';
import { Banner, Card, FormulaText, Notice, Screen, SectionTitle } from '../../components/ui';
import { BOOKS, MODULE_BY_ID, TOOL_BY_ID } from '../../data/registry';
import { useApp } from '../../i18n/AppSettings';
import { colors, onColor } from '../../theme/colors';

export default function ToolScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx, lang, favorites, toggleFavorite } = useApp();
  const tool = TOOL_BY_ID[id];
  if (!tool) return <Notice text={t('noResults')} />;
  const module = MODULE_BY_ID[tool.module];
  const fg = onColor(module.color);
  const fav = favorites.includes(tool.id);
  const Custom = tool.kind === 'custom' ? CUSTOM_COMPONENTS[tool.id] : undefined;

  return (
    <>
      <Stack.Screen
        options={{
          title: tx(module.name),
          headerStyle: { backgroundColor: module.color },
          headerTintColor: fg,
          headerRight: () => (
            <Pressable onPress={() => toggleFavorite(tool.id)} hitSlop={12} accessibilityRole="button" accessibilityLabel={t('favorites')}>
              <Text style={{ fontSize: 24, color: fg, paddingHorizontal: 8 }}>{fav ? '★' : '☆'}</Text>
            </Pressable>
          ),
        }}
      />
      <Screen>
        <Banner color={module.color}>
          <Text style={{ fontSize: 12, fontWeight: '800', color: fg, opacity: 0.8, letterSpacing: 1 }}>{tx(module.name).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US')}</Text>
          <Text style={{ fontSize: 23, fontWeight: '900', color: fg }}>{tx(tool.name)}</Text>
          <Text style={{ fontSize: 14, color: fg, opacity: 0.8 }}>{lang === 'tr' ? tool.name.en : tool.name.tr}</Text>
        </Banner>

        {tool.kind === 'formula' ? (
          <FormulaCalculator def={tool} module={module} />
        ) : (
          <>
            <Card accent={module.color}>
              {tool.formula ? <FormulaText color={module.color}>{tool.formula}</FormulaText> : null}
              <SectionTitle color={module.color}>{t('whatFor')}</SectionTitle>
              <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text }}>{tx(tool.purpose)}</Text>
            </Card>
            {Custom ? <Custom color={module.color} /> : null}
          </>
        )}

        <Card>
          <SectionTitle color={module.color}>{t('sources')}</SectionTitle>
          {tool.sources.map((s) => {
            const key = /^\[(\w)\]/.exec(s)?.[1];
            return (
              <View key={s} style={{ gap: 2 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: colors.text }}>{s}</Text>
                {key && BOOKS[key] ? <Text style={{ fontSize: 12, color: colors.textMuted }}>{BOOKS[key]}</Text> : null}
              </View>
            );
          })}
        </Card>
      </Screen>
    </>
  );
}
