import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { ToolRow } from '../../components/ToolRow';
import { Banner, Notice, Screen } from '../../components/ui';
import type { ModuleId } from '../../core/types';
import { MODULE_BY_ID, toolsOf } from '../../data/registry';
import { useApp } from '../../i18n/AppSettings';
import { onColor } from '../../theme/colors';

export default function ModuleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useApp();
  const module = MODULE_BY_ID[id];
  if (!module) return <Notice text={t('noResults')} />;
  const tools = toolsOf(id as ModuleId);
  const fg = onColor(module.color);

  return (
    <>
      <Stack.Screen options={{ title: tx(module.name), headerStyle: { backgroundColor: module.color }, headerTintColor: fg }} />
      <Screen>
        <Banner color={module.color}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
            <Text style={{ fontSize: 40, fontWeight: '900', color: fg }}>{module.glyph}</Text>
            <View style={{ flex: 1, gap: 4 }}>
              <Text style={{ fontSize: 22, fontWeight: '900', color: fg }}>{tx(module.name)}</Text>
              <Text style={{ fontSize: 14, color: fg, opacity: 0.85 }}>{tx(module.description)}</Text>
            </View>
          </View>
        </Banner>
        <View style={{ gap: 10 }}>
          {tools.map((tool) => (
            <ToolRow key={tool.id} tool={tool} />
          ))}
        </View>
      </Screen>
    </>
  );
}
