import { useState } from 'react';
import { View } from 'react-native';
import Svg, { G, Line, Rect, Text as SvgText } from 'react-native-svg';

import { colors } from '../theme/colors';

const FONT = 'Inter, Roboto, Helvetica, Arial, sans-serif';

/** Simple vertical bar chart (e.g. isotope clusters, effect sizes). Values may be negative. */
export function BarChart({ bars, color, height = 220, valueLabel }: { bars: { label: string; value: number; highlight?: boolean }[]; color: string; height?: number; valueLabel?: (v: number) => string }) {
  const [width, setWidth] = useState(0);
  const pad = { left: 12, right: 12, top: 22, bottom: 30 };
  const max = Math.max(0, ...bars.map((b) => b.value));
  const min = Math.min(0, ...bars.map((b) => b.value));
  const span = max - min || 1;
  const w = Math.max(width - pad.left - pad.right, 10);
  const h = height - pad.top - pad.bottom;
  const y = (v: number) => pad.top + ((max - v) / span) * h;
  const slot = w / Math.max(bars.length, 1);
  const bw = Math.min(slot * 0.6, 48);
  return (
    <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)} style={{ width: '100%' }}>
      {width > 0 && (
        <Svg width={width} height={height}>
          <Line x1={pad.left} x2={pad.left + w} y1={y(0)} y2={y(0)} stroke={colors.border} strokeWidth={1.5} />
          {bars.map((b, i) => {
            const cx = pad.left + slot * (i + 0.5);
            const top = Math.min(y(b.value), y(0));
            const bh = Math.abs(y(b.value) - y(0));
            return (
              <G key={i}>
                <Rect x={cx - bw / 2} y={top} width={bw} height={Math.max(bh, 1)} fill={color} opacity={b.highlight === false ? 0.45 : 1} rx={3} />
                <SvgText x={cx} y={height - 10} fontSize={11} fontFamily={FONT} fill={colors.textMuted} textAnchor="middle">
                  {b.label}
                </SvgText>
                {valueLabel && (
                  <SvgText x={cx} y={b.value >= 0 ? top - 5 : top + bh + 13} fontSize={11} fontFamily={FONT} fontWeight="bold" fill={colors.text} textAnchor="middle">
                    {valueLabel(b.value)}
                  </SvgText>
                )}
              </G>
            );
          })}
        </Svg>
      )}
    </View>
  );
}
