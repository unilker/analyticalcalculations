import { Stack } from 'expo-router';
import { Linking, Pressable, Text, View } from 'react-native';

import { Card, Chip, Screen, SectionTitle } from '../components/ui';
import { ALL_TOOLS, BOOKS } from '../data/registry';
import { useApp } from '../i18n/AppSettings';
import { colors, palette } from '../theme/colors';

const DEVELOPER = 'Dr. İlker ÜN';
const WEBSITE = { tr: 'https://kimyager.net/', en: 'https://kimyager.net/en/' } as const;

export default function Settings() {
  const { t, lang, setLang, sigFigs, setSigFigs } = useApp();
  return (
    <>
      <Stack.Screen options={{ title: t('settings') }} />
      <Screen>
        <Card>
          <SectionTitle color={palette.navy}>{t('language')}</SectionTitle>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <Chip label="Türkçe" selected={lang === 'tr'} onPress={() => setLang('tr')} color={palette.red} />
            <Chip label="English" selected={lang === 'en'} onPress={() => setLang('en')} color={palette.red} />
          </View>
        </Card>
        <Card>
          <SectionTitle color={palette.navy}>{t('sigFigs')}</SectionTitle>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            {[3, 4, 5, 6].map((n) => (
              <Chip key={n} label={String(n)} selected={sigFigs === n} onPress={() => setSigFigs(n)} color={palette.navy} />
            ))}
          </View>
        </Card>
        <Card>
          <SectionTitle color={palette.navy}>{t('about')}</SectionTitle>
          <Text style={{ fontSize: 15, lineHeight: 22, color: colors.text }}>{t('aboutText')}</Text>
          <Text style={{ fontSize: 13, color: colors.textMuted }}>{`${ALL_TOOLS.length} ${t('tools')} · v3.0`}</Text>
        </Card>
        <Card>
          <SectionTitle color={palette.navy}>{t('developer')}</SectionTitle>
          <Text style={{ fontSize: 17, fontWeight: '800', color: colors.text }}>{DEVELOPER}</Text>
          <Pressable
            accessibilityRole="link"
            onPress={() => Linking.openURL(WEBSITE[lang])}
            style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', gap: 8, opacity: pressed ? 0.6 : 1 })}
          >
            <Text style={{ fontSize: 14, color: colors.textMuted }}>{t('website')}:</Text>
            <Text style={{ fontSize: 15, fontWeight: '700', color: palette.red, textDecorationLine: 'underline' }}>{WEBSITE[lang].replace(/^https:\/\//, '').replace(/\/$/, '')}</Text>
          </Pressable>
        </Card>
        <Card>
          <SectionTitle color={palette.navy}>{t('sources')}</SectionTitle>
          {Object.entries(BOOKS).map(([k, v]) => (
            <Text key={k} style={{ fontSize: 14, color: colors.text, lineHeight: 20 }}>
              <Text style={{ fontWeight: '800', color: palette.red }}>[{k}] </Text>
              {v}
            </Text>
          ))}
        </Card>
      </Screen>
    </>
  );
}
