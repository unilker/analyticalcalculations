import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { RotationControl } from '../components/RotationControl';
import { AppSettingsProvider } from '../i18n/AppSettings';
import { colors, palette } from '../theme/colors';

export default function RootLayout() {
  return (
    <AppSettingsProvider>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
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
        <RotationControl />
      </View>
    </AppSettingsProvider>
  );
}
