import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';

import { ToolRow } from '../../components/ToolRow';
import { ToolView } from '../../components/ToolView';
import { useLayout } from '../../components/layout';
import { Banner, Notice, Screen } from '../../components/ui';
import type { ModuleDef, ModuleId } from '../../core/types';
import { MODULE_BY_ID, toolsOf } from '../../data/registry';
import { useApp } from '../../i18n/AppSettings';
import { colors, onColor } from '../../theme/colors';

/** Width of the tool list when it sits next to the selected tool. */
const LIST_WIDTH = 380;

export default function ModuleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t, tx } = useApp();
  const layout = useLayout();
  const module = MODULE_BY_ID[id];
  const tools = module ? toolsOf(id as ModuleId) : [];
  const [selectedId, setSelectedId] = useState(tools[0]?.id);
  if (!module) return <Notice text={t('noResults')} />;
  const fg = onColor(module.color);
  const header = <Stack.Screen options={{ title: tx(module.name), headerStyle: { backgroundColor: module.color }, headerTintColor: fg }} />;

  if (layout.split) {
    // Landscape tablets: tool list on the left, the selected tool on the right.
    const selected = tools.find((tool) => tool.id === selectedId) ?? tools[0];
    return (
      <>
        {header}
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: colors.background }}>
          <View style={{ width: LIST_WIDTH, borderRightWidth: 1, borderRightColor: colors.border }}>
            <Screen edges="left">
              <ModuleBanner module={module} />
              <View style={{ gap: 10 }}>
                {tools.map((tool) => (
                  <ToolRow key={tool.id} tool={tool} selected={tool.id === selected.id} onPress={() => setSelectedId(tool.id)} />
                ))}
              </View>
            </Screen>
          </View>
          <View style={{ flex: 1 }}>
            <Screen key={selected.id} edges="right">
              <ToolView tool={selected} width={layout.width - LIST_WIDTH} />
            </Screen>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      {header}
      <Screen>
        <ModuleBanner module={module} />
        <View style={layout.twoColumn ? { flexDirection: 'row', flexWrap: 'wrap', gap: 10 } : { gap: 10 }}>
          {tools.map((tool) => (
            <View key={tool.id} style={layout.twoColumn ? { width: '49.2%', flexGrow: 1 } : undefined}>
              <ToolRow tool={tool} />
            </View>
          ))}
        </View>
      </Screen>
    </>
  );
}

function ModuleBanner({ module }: { module: ModuleDef }) {
  const { tx } = useApp();
  const fg = onColor(module.color);
  return (
    <Banner color={module.color}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
        <Text style={{ fontSize: 40, fontWeight: '900', color: fg }}>{module.glyph}</Text>
        <View style={{ flex: 1, gap: 4 }}>
          <Text style={{ fontSize: 22, fontWeight: '900', color: fg }}>{tx(module.name)}</Text>
          <Text style={{ fontSize: 14, color: fg, opacity: 0.85 }}>{tx(module.description)}</Text>
        </View>
      </View>
    </Banner>
  );
}
