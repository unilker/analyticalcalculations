import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ToolRow } from '../components/ToolRow';
import { Banner, Notice, Screen, SectionTitle, styles as ui } from '../components/ui';
import type { ModuleDef } from '../core/types';
import { MODULE_GROUPS, MODULES, TOOL_BY_ID, searchTools, toolsOf } from '../data/registry';
import { useApp } from '../i18n/AppSettings';
import { colors, onColor, palette, tint } from '../theme/colors';

export default function Home() {
  const { t, tx, favorites, lang, setLang } = useApp();
  const [query, setQuery] = useState('');
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const columns = width >= 700 ? 3 : 2;
  const results = query.trim() ? searchTools(query) : [];
  const favTools = favorites.map((id) => TOOL_BY_ID[id]).filter(Boolean);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, paddingTop: insets.top }}>
      <Screen>
        <Banner>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <View style={{ flex: 1, gap: 6 }}>
              <Text style={{ color: palette.amber, fontWeight: '800', fontSize: 12, letterSpacing: 2 }}>ANALİTİK KİMYA · ANALYTICAL CHEMISTRY</Text>
              <Text style={{ color: '#fff', fontWeight: '900', fontSize: 26, lineHeight: 31 }}>{t('appName')}</Text>
              <Text style={{ color: '#D6E2F2', fontSize: 15 }}>{t('appTagline')}</Text>
            </View>
            <View style={{ gap: 8, alignItems: 'flex-end' }}>
              <Pressable
                onPress={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                accessibilityRole="button"
                style={{ backgroundColor: palette.red, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 6 }}
              >
                <Text style={{ color: '#fff', fontWeight: '800' }}>{lang === 'tr' ? 'EN' : 'TR'}</Text>
              </Pressable>
              <Pressable
                onPress={() => router.push('/settings')}
                accessibilityRole="button"
                accessibilityLabel={t('settings')}
                style={{ backgroundColor: 'rgba(255,255,255,0.16)', borderRadius: 999, width: 36, height: 36, alignItems: 'center', justifyContent: 'center' }}
              >
                <Text style={{ color: '#fff', fontSize: 18 }}>⚙</Text>
              </Pressable>
            </View>
          </View>
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder={t('searchPlaceholder')}
            placeholderTextColor="#7F8FA3"
            autoCorrect={false}
            style={[ui.input, { marginTop: 10, borderColor: 'transparent', fontSize: 16 }]}
          />
        </Banner>

        {query.trim() ? (
          <View style={{ gap: 10 }}>
            <SectionTitle color={palette.red}>{`${results.length} ${t('tools')}`}</SectionTitle>
            {results.length ? results.map((tool) => <ToolRow key={tool.id} tool={tool} showModule />) : <Notice text={t('noResults')} />}
          </View>
        ) : (
          <>
            {favTools.length > 0 && (
              <View style={{ gap: 10 }}>
                <SectionTitle color={palette.amber}>{`★ ${t('favorites')}`}</SectionTitle>
                {favTools.map((tool) => (
                  <ToolRow key={tool.id} tool={tool} showModule />
                ))}
              </View>
            )}
            {MODULE_GROUPS.map((g) => (
              <View key={g.id} style={{ gap: 10 }}>
                <SectionTitle color={palette.navy}>{tx(g.name)}</SectionTitle>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
                  {MODULES.filter((m) => m.group === g.id).map((m) => (
                    <ModuleTile key={m.id} module={m} columns={columns} />
                  ))}
                </View>
              </View>
            ))}
          </>
        )}
      </Screen>
    </View>
  );
}

function ModuleTile({ module: m, columns }: { module: ModuleDef; columns: number }) {
  const { t, tx } = useApp();
  const fg = onColor(m.color);
  return (
    <Pressable
        onPress={() => router.push({ pathname: '/module/[id]', params: { id: m.id } })}
      accessibilityRole="button"
      style={({ pressed }) => ({
        width: `${100 / columns - 2.5}%`,
        flexGrow: 1,
        minHeight: 128,
        backgroundColor: m.color,
        borderRadius: 18,
        padding: 14,
        justifyContent: 'space-between',
        transform: [{ scale: pressed ? 0.97 : 1 }],
        shadowColor: m.color,
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
        overflow: 'hidden',
      })}
    >
      <View
        style={{
          position: 'absolute',
          right: -18,
          top: -18,
          width: 90,
          height: 90,
          borderRadius: 45,
          backgroundColor: fg === '#FFFFFF' ? 'rgba(255,255,255,0.12)' : 'rgba(0,16,26,0.08)',
        }}
      />
      <Text style={{ fontSize: 30, fontWeight: '900', color: fg }}>{m.glyph}</Text>
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 16, fontWeight: '800', color: fg }}>{tx(m.name)}</Text>
        <View
          style={{
            alignSelf: 'flex-start',
            backgroundColor: fg === '#FFFFFF' ? 'rgba(255,255,255,0.2)' : tint(palette.ink, 0.85),
            borderRadius: 999,
            paddingHorizontal: 8,
            paddingVertical: 2,
          }}
        >
          <Text style={{ fontSize: 12, fontWeight: '700', color: fg }}>{`${toolsOf(m.id).length} ${t('tools')}`}</Text>
        </View>
      </View>
    </Pressable>
  );
}
