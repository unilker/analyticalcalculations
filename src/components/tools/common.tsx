import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { parseList, unreadTokens } from '../../core/format';
import type { Lang } from '../../core/types';
import { useApp } from '../../i18n/AppSettings';
import { colors } from '../../theme/colors';
import { Card, Chip, SectionTitle, TextArea } from '../ui';

export interface ToolProps {
  color: string;
}

export const CONF_LEVELS = [0.9, 0.95, 0.99];

export function ConfidencePicker({ value, onChange, color, levels = CONF_LEVELS }: { value: number; onChange: (c: number) => void; color: string; levels?: number[] }) {
  const { t, lang } = useApp();
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 14, fontWeight: '600', color: colors.textMuted }}>{t('confidence')}</Text>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        {levels.map((c) => (
          <Chip key={c} label={pct(c, lang)} selected={value === c} onPress={() => onChange(c)} color={color} small />
        ))}
      </View>
    </View>
  );
}

export function DataCard({
  title,
  value,
  onChange,
  hint,
  color,
  rows,
  children,
}: {
  title: string;
  value: string;
  onChange: (s: string) => void;
  hint?: string;
  color: string;
  rows?: number;
  children?: ReactNode;
}) {
  const { t, lang } = useApp();
  const unread = unreadTokens(value);
  return (
    <Card>
      <SectionTitle color={color}>{title}</SectionTitle>
      <TextArea value={value} onChangeText={onChange} rows={rows} />
      <Text style={{ fontSize: 12, color: colors.textMuted }}>
        {hint ?? t('dataHintList')}
        {hint ? '' : ` (n = ${parseList(value).length})`}
      </Text>
      {unread.length > 0 && (
        <Text style={{ fontSize: 13, fontWeight: '700', color: colors.danger }}>
          {lang === 'tr'
            ? `Okunamayan ve hesaba katılmayan giriş: ${unread.slice(0, 5).join('  ')}${unread.length > 5 ? ' …' : ''}`
            : `Not a number, left out of the calculation: ${unread.slice(0, 5).join('  ')}${unread.length > 5 ? ' …' : ''}`}
        </Text>
      )}
      {children}
    </Card>
  );
}

/** Percentage label: Turkish puts the sign first (%95), English after (95%). */
export const pct = (x: number, lang: Lang = 'tr') => (lang === 'tr' ? `%${Math.round(x * 1000) / 10}` : `${Math.round(x * 1000) / 10}%`);
