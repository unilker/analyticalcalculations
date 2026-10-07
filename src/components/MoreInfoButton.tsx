import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';

import { TOOL_DETAILS } from '../data/details';
import { useApp } from '../i18n/AppSettings';
import { textColor, tint } from '../theme/colors';

/** Opens the detailed explanation of a tool; renders nothing if the tool has none yet. */
export function MoreInfoButton({ toolId, color }: { toolId: string; color: string }) {
  const { t } = useApp();
  if (!TOOL_DETAILS[toolId]) return null;
  return (
    <Pressable
      onPress={() => router.push({ pathname: '/info/[id]', params: { id: toolId } })}
      accessibilityRole="button"
      style={({ pressed }) => ({
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 2,
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 999,
        borderWidth: 1.5,
        borderColor: color,
        backgroundColor: pressed ? tint(color, 0.85) : tint(color, 0.94),
      })}
    >
      <Text style={{ fontSize: 16 }}>📖</Text>
      <Text style={{ fontSize: 15, fontWeight: '800', color: textColor(color) }}>{t('moreInfo')}</Text>
    </Pressable>
  );
}
