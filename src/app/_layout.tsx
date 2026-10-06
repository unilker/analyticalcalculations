import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AppSettingsProvider } from '../i18n/AppSettings';
import { colors, palette } from '../theme/colors';

export default function RootLayout() {
  return (
    <AppSettingsProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: palette.deepNavy },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '800' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </AppSettingsProvider>
  );
}
