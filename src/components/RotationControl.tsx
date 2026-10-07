import * as ScreenOrientation from 'expo-screen-orientation';
import { Accelerometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import { Animated, Dimensions, Platform, Pressable, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useApp } from '../i18n/AppSettings';
import { palette } from '../theme/colors';
import { PHONE_MAX_SHORT_SIDE, poseOf, type Pose } from './rotation';

/** How long the device must stay in a new pose before the button appears. */
const SETTLE_MS = 500;
/** How long the button stays on screen. */
const OFFER_MS = 4000;

const isPhone = () => {
  const { width, height } = Dimensions.get('screen');
  return Math.min(width, height) < PHONE_MAX_SHORT_SIDE;
};

/**
 * On phones the screen keeps its orientation while the device moves in the hand. Turning the
 * phone shows a button for a few seconds that switches to the matching orientation. Tablets
 * (and phones with "rotate automatically" chosen in settings) rotate freely.
 */
export function RotationControl() {
  const { rotation } = useApp();
  const [phone, setPhone] = useState(isPhone);
  const [locked, setLocked] = useState<Pose>('portrait');
  const [offer, setOffer] = useState<Pose | null>(null);
  const enabled = Platform.OS !== 'web' && phone && rotation === 'button';

  // Foldables change between phone and tablet size when opened or closed.
  useEffect(() => {
    const sub = Dimensions.addEventListener('change', () => setPhone(isPhone()));
    return () => sub.remove();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    const apply = enabled
      ? ScreenOrientation.lockAsync(locked === 'portrait' ? ScreenOrientation.OrientationLock.PORTRAIT_UP : ScreenOrientation.OrientationLock.LANDSCAPE)
      : ScreenOrientation.unlockAsync();
    apply.catch(() => undefined);
  }, [enabled, locked]);

  useEffect(() => {
    if (!enabled) return;
    let candidate: Pose | null = null;
    let since = 0;
    let offered: Pose | null = null;
    Accelerometer.setUpdateInterval(150);
    const sub = Accelerometer.addListener(({ x, y, z }) => {
      const pose = poseOf(x, y, z);
      const now = Date.now();
      if (pose !== candidate) {
        candidate = pose;
        since = now;
        return;
      }
      if (!pose || now - since < SETTLE_MS) return;
      if (pose === locked) {
        // Turned back: withdraw the offer.
        offered = null;
        setOffer(null);
      } else if (pose !== offered) {
        offered = pose;
        setOffer(pose);
      }
    });
    return () => sub.remove();
  }, [enabled, locked]);

  useEffect(() => {
    if (!offer) return;
    const id = setTimeout(() => setOffer(null), OFFER_MS);
    return () => clearTimeout(id);
  }, [offer]);

  if (!enabled || !offer) return null;
  return (
    <RotateButton
      target={offer}
      onPress={() => {
        setLocked(offer);
        setOffer(null);
      }}
    />
  );
}

/** Floating button offering to switch to `target`. */
export function RotateButton({ target, onPress }: { target: Pose; onPress: () => void }) {
  const { t } = useApp();
  const insets = useSafeAreaInsets();
  const [opacity] = useState(() => new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 180, useNativeDriver: Platform.OS !== 'web' }).start();
  }, [opacity]);

  return (
    <Animated.View
      pointerEvents="box-none"
      style={{ position: 'absolute', right: 16 + insets.right, bottom: 24 + insets.bottom, opacity, zIndex: 10 }}
    >
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={t(target === 'landscape' ? 'rotateLandscape' : 'rotatePortrait')}
        style={({ pressed }) => ({
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          backgroundColor: palette.deepNavy,
          borderRadius: 999,
          paddingVertical: 12,
          paddingHorizontal: 18,
          borderWidth: 2,
          borderColor: palette.amber,
          opacity: pressed ? 0.8 : 1,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 4 },
          elevation: 6,
        })}
      >
        <Text style={{ fontSize: 20, color: palette.amber, fontWeight: '900' }}>⟳</Text>
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: '800' }}>{t(target === 'landscape' ? 'rotateLandscape' : 'rotatePortrait')}</Text>
      </Pressable>
    </Animated.View>
  );
}
