import { useWindowDimensions } from 'react-native';

/**
 * Width breakpoints (in dp/pt) for phones, foldables and tablets.
 * - compact: phones, the folded iPhone Duo and Split View on tablets — one column.
 * - twoColumn: unfolded foldables, landscape phones and portrait tablets — tools show inputs
 *   and results side by side.
 * - split: landscape tablets — module screens show the tool list next to the selected tool.
 */
export const BREAKPOINTS = { twoColumn: 720, split: 1000 } as const;

/** Content width cap for single-column and two-column pages. */
export const MAX_WIDTH = { single: 760, wide: 1240 } as const;

export function useLayout() {
  const { width, height } = useWindowDimensions();
  const twoColumn = width >= BREAKPOINTS.twoColumn;
  return {
    width,
    height,
    twoColumn,
    split: width >= BREAKPOINTS.split,
    homeColumns: width >= 900 ? 4 : width >= 600 ? 3 : 2,
    maxWidth: twoColumn ? MAX_WIDTH.wide : MAX_WIDTH.single,
  };
}
