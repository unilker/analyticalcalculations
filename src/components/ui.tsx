import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Keyboard, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type StyleProp, type ViewStyle } from 'react-native';

import { colors, onColor, palette, textColor, tint } from '../theme/colors';

/** Space kept between the focused input and the top of the keyboard. */
const KEYBOARD_GAP = 24;

/**
 * Scrollable page. While the keyboard is open the page shrinks to the space above it and the
 * focused input is scrolled into view (Android draws edge-to-edge, so the window no longer
 * resizes by itself).
 */
export function Screen({ children }: { children: ReactNode }) {
  const frame = useRef<View>(null);
  const scroll = useRef<ScrollView>(null);
  const scrollY = useRef(0);
  const [inset, setInset] = useState(0);

  useEffect(() => {
    const reveal = (keyboardTop: number) => {
      const input = TextInput.State.currentlyFocusedInput();
      input?.measureInWindow((_x, y, _w, h) => {
        const overflow = y + h - (keyboardTop - KEYBOARD_GAP);
        if (overflow > 0) scroll.current?.scrollTo({ y: scrollY.current + overflow, animated: true });
      });
    };
    const show = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', (e) => {
      const keyboardTop = e.endCoordinates.screenY;
      frame.current?.measureInWindow((_x, y, _w, h) => {
        // Zero when the system already resized the window for the keyboard.
        setInset(Math.max(0, y + h - keyboardTop));
        setTimeout(() => reveal(keyboardTop), 60);
      });
    });
    const hide = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => setInset(0));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <View ref={frame} style={[styles.screen, { paddingBottom: inset }]}>
      <ScrollView
        ref={scroll}
        style={styles.screen}
        contentContainerStyle={styles.screenContent}
        keyboardShouldPersistTaps="handled"
        onScroll={(e) => (scrollY.current = e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={32}
      >
        <View style={styles.inner}>{children}</View>
      </ScrollView>
    </View>
  );
}

/** Banner: gradient in the module color with the red/amber accent stripe. */
export function Banner({ color = palette.navy, children }: { color?: string; children: ReactNode }) {
  return (
    <View style={styles.bannerWrap}>
      <LinearGradient colors={[color, shade(color)]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.banner}>
        {children}
      </LinearGradient>
      <AccentStripe />
    </View>
  );
}

export function AccentStripe() {
  return (
    <View style={styles.stripe}>
      <View style={[styles.stripePart, { flex: 5, backgroundColor: palette.red }]} />
      <View style={[styles.stripePart, { flex: 2, backgroundColor: palette.amber }]} />
      <View style={[styles.stripePart, { flex: 1, backgroundColor: palette.navy }]} />
    </View>
  );
}

function shade(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.round(c * 0.62);
  return `#${((f((n >> 16) & 255) << 16) | (f((n >> 8) & 255) << 8) | f(n & 255)).toString(16).padStart(6, '0')}`;
}

export function Card({ children, style, accent }: { children: ReactNode; style?: StyleProp<ViewStyle>; accent?: string }) {
  return <View style={[styles.card, accent ? { borderLeftWidth: 5, borderLeftColor: accent } : null, style]}>{children}</View>;
}

export function SectionTitle({ children, color = colors.primary }: { children: ReactNode; color?: string }) {
  return (
    <View style={styles.sectionRow}>
      <View style={[styles.sectionDot, { backgroundColor: color }]} />
      <Text style={[styles.sectionTitle, { color: textColor(color) }]}>{children}</Text>
    </View>
  );
}

export function Body({ children, muted, style }: { children: ReactNode; muted?: boolean; style?: object }) {
  return <Text style={[styles.body, muted && { color: colors.textMuted }, style]}>{children}</Text>;
}

export function FormulaText({ children, color = colors.primary }: { children: ReactNode; color?: string }) {
  return (
    <View style={[styles.formulaBox, { backgroundColor: tint(color, 0.9), borderColor: tint(color, 0.6) }]}>
      <Text style={[styles.formula, { color: textColor(color) }]}>{children}</Text>
    </View>
  );
}

export function Chip({
  label,
  selected,
  onPress,
  color = colors.primary,
  small,
}: {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  color?: string;
  small?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      style={({ pressed }) => [
        styles.chip,
        small && styles.chipSmall,
        selected ? { backgroundColor: color, borderColor: color } : { borderColor: tint(color, 0.5), backgroundColor: colors.surface },
        pressed && { opacity: 0.75 },
      ]}
    >
      <Text style={[styles.chipText, small && { fontSize: 13 }, { color: selected ? onColor(color) : textColor(color) }]}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Button({ label, onPress, color = colors.primary, outline }: { label: string; onPress: () => void; color?: string; outline?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.button,
        outline ? { borderColor: color, borderWidth: 1.5, backgroundColor: 'transparent' } : { backgroundColor: color },
        pressed && { opacity: 0.8 },
      ]}
    >
      <Text style={[styles.buttonText, { color: outline ? textColor(color) : onColor(color) }]}>{label}</Text>
    </Pressable>
  );
}

export const numericKeyboard = Platform.OS === 'ios' ? ('numbers-and-punctuation' as const) : ('default' as const);

export function Field({
  label,
  value,
  onChangeText,
  unit,
  onUnitPress,
  invalid,
  placeholder,
  color = colors.primary,
}: {
  label: string;
  value: string;
  onChangeText: (s: string) => void;
  unit?: string;
  onUnitPress?: () => void;
  invalid?: boolean;
  placeholder?: string;
  color?: string;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <View style={styles.fieldRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9AA6B2"
          keyboardType={numericKeyboard}
          autoCorrect={false}
          autoCapitalize="none"
          style={[styles.input, styles.inputInRow, invalid && { borderColor: colors.danger, backgroundColor: colors.dangerBg }]}
        />
        {unit !== undefined && unit !== '' ? <UnitButton unit={unit} onPress={onUnitPress} color={color} /> : null}
      </View>
    </View>
  );
}

export function UnitButton({ unit, onPress, color = colors.primary }: { unit: string; onPress?: () => void; color?: string }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityHint="Change unit"
      style={({ pressed }) => [styles.unit, { borderColor: tint(color, 0.45), backgroundColor: tint(color, 0.9) }, pressed && { opacity: 0.7 }]}
    >
      <Text style={[styles.unitText, { color: textColor(color) }]}>
        {unit}
        {onPress ? ' ▾' : ''}
      </Text>
    </Pressable>
  );
}

export function TextArea({ value, onChangeText, placeholder, rows = 4 }: { value: string; onChangeText: (s: string) => void; placeholder?: string; rows?: number }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#9AA6B2"
      multiline
      autoCorrect={false}
      autoCapitalize="none"
      keyboardType={numericKeyboard}
      style={[styles.input, styles.textArea, { minHeight: rows * 24 + 20 }]}
    />
  );
}

export function ResultBox({ children }: { children: ReactNode }) {
  return <View style={styles.result}>{children}</View>;
}

export function StatRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <View style={styles.statRow}>
      <Text style={[styles.statLabel, strong && { fontWeight: '700', color: colors.text }]}>{label}</Text>
      <Text style={[styles.statValue, strong && { fontSize: 18, color: palette.navy }]} selectable>
        {value}
      </Text>
    </View>
  );
}

export function Verdict({ positive, text }: { positive: boolean; text: string }) {
  return (
    <View style={[styles.verdict, { backgroundColor: positive ? colors.dangerBg : colors.successBg, borderColor: positive ? colors.danger : colors.success }]}>
      <Text style={[styles.verdictText, { color: positive ? colors.danger : colors.success }]}>{text}</Text>
    </View>
  );
}

export function Notice({ text, tone = 'info' }: { text: string; tone?: 'info' | 'error' }) {
  return (
    <View style={[styles.notice, tone === 'error' && { backgroundColor: colors.dangerBg, borderColor: colors.danger }]}>
      <Text style={[styles.noticeText, tone === 'error' && { color: colors.danger }]}>{text}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  screenContent: { paddingBottom: 48, alignItems: 'center' },
  inner: { width: '100%', maxWidth: 760, paddingHorizontal: 16, paddingTop: 16, gap: 14 },
  bannerWrap: { borderRadius: 18, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 4 },
  banner: { padding: 20, gap: 8 },
  stripe: { flexDirection: 'row', height: 6 },
  stripePart: { height: 6 },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#0B2A4F',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  sectionRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 4 },
  sectionDot: { width: 10, height: 10, borderRadius: 5 },
  sectionTitle: { fontSize: 16, fontWeight: '800', letterSpacing: 0.2 },
  body: { fontSize: 15, lineHeight: 22, color: colors.text },
  formulaBox: { borderRadius: 12, borderWidth: 1, paddingVertical: 14, paddingHorizontal: 14 },
  formula: { fontSize: 19, lineHeight: 27, fontWeight: '700', textAlign: 'center' },
  chip: { borderWidth: 1.5, borderRadius: 999, paddingVertical: 7, paddingHorizontal: 14 },
  chipSmall: { paddingVertical: 5, paddingHorizontal: 11 },
  chipText: { fontSize: 15, fontWeight: '700' },
  button: { borderRadius: 12, paddingVertical: 12, paddingHorizontal: 18, alignItems: 'center' },
  buttonText: { fontSize: 15, fontWeight: '800' },
  field: { gap: 6 },
  fieldLabel: { fontSize: 14, fontWeight: '600', color: colors.textMuted },
  fieldRow: { flexDirection: 'row', alignItems: 'stretch', gap: 8 },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 17,
    color: colors.text,
  },
  inputInRow: { flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: 0 },
  textArea: { textAlignVertical: 'top', fontSize: 16 },
  unit: { minWidth: 72, maxWidth: 150, flexShrink: 0, borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6, justifyContent: 'center', alignItems: 'center' },
  unitText: { fontSize: 14, fontWeight: '700', textAlign: 'center' },
  result: { backgroundColor: colors.resultBg, borderRadius: 14, borderWidth: 1.5, borderColor: palette.amber, padding: 16, gap: 8 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, paddingVertical: 3 },
  statLabel: { fontSize: 15, color: colors.textMuted, flexShrink: 1 },
  statValue: { fontSize: 16, fontWeight: '700', color: colors.text, textAlign: 'right' },
  verdict: { borderWidth: 1.5, borderRadius: 10, padding: 10 },
  verdictText: { fontSize: 15, fontWeight: '800', textAlign: 'center' },
  notice: { backgroundColor: colors.surfaceAlt, borderRadius: 10, padding: 10, borderWidth: 1, borderColor: colors.border },
  noticeText: { fontSize: 14, color: colors.textMuted },
});
