import { Text, View } from 'react-native';

import type { ModuleDef, ToolDef } from '../core/types';
import { BOOKS, MODULE_BY_ID } from '../data/registry';
import { useApp } from '../i18n/AppSettings';
import { colors, onColor } from '../theme/colors';
import { FormulaCalculator } from './FormulaCalculator';
import { BREAKPOINTS, useLayout } from './layout';
import { CUSTOM_COMPONENTS } from './tools';
import { Banner, Card, Columns, FormulaText, SectionTitle } from './ui';

/**
 * Body of a tool page: banner, calculator and sources. On wide screens the calculator inputs
 * and its results (or a data tool and its description) sit in two columns.
 * `width` is the width available to this view when it does not span the whole window.
 */
export function ToolView({ tool, width }: { tool: ToolDef; width?: number }) {
  const { t, tx, lang } = useApp();
  const layout = useLayout();
  const twoColumn = (width ?? layout.width) >= BREAKPOINTS.twoColumn;
  const module = MODULE_BY_ID[tool.module];
  const fg = onColor(module.color);
  const Custom = tool.kind === 'custom' ? CUSTOM_COMPONENTS[tool.id] : undefined;
  const sources = <Sources tool={tool} module={module} />;
  const body = Custom ? <Custom color={module.color} /> : null;
  const about = (
    <Card accent={module.color}>
      {tool.formula ? <FormulaText color={module.color}>{tool.formula}</FormulaText> : null}
      <SectionTitle color={module.color}>{t('whatFor')}</SectionTitle>
      <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text }}>{tx(tool.purpose)}</Text>
    </Card>
  );

  return (
    <>
      <Banner color={module.color}>
        <Text style={{ fontSize: 12, fontWeight: '800', color: fg, opacity: 0.8, letterSpacing: 1 }}>{tx(module.name).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US')}</Text>
        <Text style={{ fontSize: 23, fontWeight: '900', color: fg }}>{tx(tool.name)}</Text>
        <Text style={{ fontSize: 14, color: fg, opacity: 0.8 }}>{lang === 'tr' ? tool.name.en : tool.name.tr}</Text>
      </Banner>

      {tool.kind === 'formula' ? (
        <FormulaCalculator def={tool} module={module} twoColumn={twoColumn} aside={sources} />
      ) : twoColumn ? (
        <Columns main={body} side={<>{about}{sources}</>} />
      ) : (
        <>
          {about}
          {body}
          {sources}
        </>
      )}
    </>
  );
}

function Sources({ tool, module }: { tool: ToolDef; module: ModuleDef }) {
  const { t } = useApp();
  return (
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
  );
}
