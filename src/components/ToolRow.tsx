import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import type { ToolDef } from '../core/types';
import { MODULE_BY_ID } from '../data/registry';
import { useApp } from '../i18n/AppSettings';
import { colors, onColor, textColor, tint } from '../theme/colors';

export function ToolRow({ tool, showModule }: { tool: ToolDef; showModule?: boolean }) {
  const { tx, lang, favorites, toggleFavorite } = useApp();
  const module = MODULE_BY_ID[tool.module];
  const fav = favorites.includes(tool.id);
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/tool/[id]', params: { id: tool.id } })}
      accessibilityRole="button"
      style={({ pressed }) => [
        {
          backgroundColor: colors.surface,
          borderRadius: 14,
          borderWidth: 1,
          borderColor: colors.border,
          borderLeftWidth: 6,
          borderLeftColor: module.color,
          padding: 14,
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
        },
        pressed && { backgroundColor: tint(module.color, 0.94) },
      ]}
    >
      <View style={{ flex: 1, gap: 4 }}>
        {showModule && (
          <Text style={{ fontSize: 11, fontWeight: '800', color: textColor(module.color), letterSpacing: 0.5 }}>{tx(module.name).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US')}</Text>
        )}
        <Text style={{ fontSize: 16, fontWeight: '700', color: colors.text }}>{tx(tool.name)}</Text>
        {tool.formula ? (
          <Text numberOfLines={1} style={{ fontSize: 13, color: textColor(module.color), fontWeight: '600' }}>
            {tool.formula}
          </Text>
        ) : null}
        <Text numberOfLines={2} style={{ fontSize: 13, lineHeight: 18, color: colors.textMuted }}>
          {tx(tool.purpose)}
        </Text>
      </View>
      <Pressable
        onPress={() => toggleFavorite(tool.id)}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="favorite"
        style={{ width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: fav ? module.color : tint(module.color, 0.9) }}
      >
        <Text style={{ fontSize: 17, color: fav ? onColor(module.color) : module.color }}>{fav ? '★' : '☆'}</Text>
      </Pressable>
    </Pressable>
  );
}
