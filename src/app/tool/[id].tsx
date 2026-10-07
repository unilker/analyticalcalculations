import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, Text } from 'react-native';

import { ToolView } from '../../components/ToolView';
import { Notice, Screen } from '../../components/ui';
import { MODULE_BY_ID, TOOL_BY_ID } from '../../data/registry';
import { useApp } from '../../i18n/AppSettings';
import { onColor } from '../../theme/colors';

export default function ToolScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx, favorites, toggleFavorite } = useApp();
  const tool = TOOL_BY_ID[id];
  if (!tool) return <Notice text={t('noResults')} />;
  const module = MODULE_BY_ID[tool.module];
  const fg = onColor(module.color);
  const fav = favorites.includes(tool.id);

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
        <ToolView key={tool.id} tool={tool} />
      </Screen>
    </>
  );
}
