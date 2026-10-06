// App palette: red, navy and deep navy as primary colors, amber and graphite as accents.
// The remaining shades are tints/shades of these.
export const palette = {
  red: '#E30613',
  crimson: '#B0000E',
  navy: '#154377',
  deepNavy: '#0B2A4F',
  ink: '#00101A',
  blue: '#2C6CB0',
  amber: '#F7B500',
  orange: '#D96C00',
  graphite: '#383E42',
  livid: '#5E6E78',
  white: '#FFFFFF',
};

export const colors = {
  background: '#F2F5FA',
  surface: '#FFFFFF',
  surfaceAlt: '#E8EEF6',
  border: '#D3DCE8',
  text: palette.ink,
  textMuted: '#4F5D6B',
  primary: palette.navy,
  primaryDark: palette.deepNavy,
  accent: palette.red,
  highlight: palette.amber,
  success: '#1E8E4E',
  successBg: '#E3F4EA',
  danger: palette.red,
  dangerBg: '#FDE7E8',
  resultBg: '#FFF6DB',
};

/** Variant of a palette color that stays readable as text on white (amber is darkened). */
export function textColor(hex: string): string {
  return hex.toUpperCase() === palette.amber ? '#8A6500' : hex;
}

/** Readable text color on top of a solid background color. */
export function onColor(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.4 ? palette.ink : palette.white;
}

/** Mixes a color with white; amount 0 → color, 1 → white. */
export function tint(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16);
  const mix = (c: number) => Math.round(c + (255 - c) * amount);
  const r = mix((n >> 16) & 255);
  const g = mix((n >> 8) & 255);
  const b = mix(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
