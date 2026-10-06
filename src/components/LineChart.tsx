import { useState } from 'react';
import { Text, View } from 'react-native';
import Svg, { Circle, G, Line, Polyline, Rect, Text as SvgText } from 'react-native-svg';

import { useApp } from '../i18n/AppSettings';
import { colors } from '../theme/colors';

export interface Series {
  label: string;
  color: string;
  points: [number, number][];
  /** Draw markers instead of a line. */
  scatter?: boolean;
  dashed?: boolean;
}

interface Props {
  series: Series[];
  xLabel?: string;
  yLabel?: string;
  xDomain?: [number, number];
  yDomain?: [number, number];
  /** Vertical marker line (e.g. selected pH). */
  markerX?: number;
  height?: number;
  formatTick?: (v: number) => string;
}

const PAD = { left: 48, right: 12, top: 12, bottom: 40 };

export function LineChart({ series, xLabel, yLabel, xDomain, yDomain, markerX, height = 260, formatTick = defaultTick }: Props) {
  const [width, setWidth] = useState(0);
  const { lang } = useApp();
  const tick = (v: number) => (lang === 'tr' ? formatTick(v).replace('.', ',') : formatTick(v));
  const all = series.flatMap((s) => s.points).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
  const [x0, x1] = xDomain ?? extent(all.map((p) => p[0]));
  const [y0, y1] = yDomain ?? extent(all.map((p) => p[1]));
  const w = Math.max(width - PAD.left - PAD.right, 10);
  const h = height - PAD.top - PAD.bottom;
  const sx = (x: number) => PAD.left + ((x - x0) / (x1 - x0 || 1)) * w;
  const sy = (y: number) => PAD.top + h - ((y - y0) / (y1 - y0 || 1)) * h;
  const xt = ticks(x0, x1);
  const yt = ticks(y0, y1);

  return (
    <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)} style={{ width: '100%' }}>
      {width > 0 && (
        <Svg width={width} height={height}>
          <Rect x={PAD.left} y={PAD.top} width={w} height={h} fill="#FAFCFF" stroke={colors.border} />
          {yt.map((t) => (
            <G key={`y${t}`}>
              <Line x1={PAD.left} x2={PAD.left + w} y1={sy(t)} y2={sy(t)} stroke="#E3E9F1" />
              <SvgText fontFamily="Inter, Roboto, Helvetica, Arial, sans-serif" x={PAD.left - 6} y={sy(t) + 4} fontSize={11} fill={colors.textMuted} textAnchor="end">
                {tick(t)}
              </SvgText>
            </G>
          ))}
          {xt.map((t) => (
            <G key={`x${t}`}>
              <Line x1={sx(t)} x2={sx(t)} y1={PAD.top} y2={PAD.top + h} stroke="#E3E9F1" />
              <SvgText fontFamily="Inter, Roboto, Helvetica, Arial, sans-serif" x={sx(t)} y={PAD.top + h + 16} fontSize={11} fill={colors.textMuted} textAnchor="middle">
                {tick(t)}
              </SvgText>
            </G>
          ))}
          {markerX !== undefined && markerX >= x0 && markerX <= x1 && (
            <Line x1={sx(markerX)} x2={sx(markerX)} y1={PAD.top} y2={PAD.top + h} stroke={colors.accent} strokeWidth={1.5} strokeDasharray="5,4" />
          )}
          {series.map((s) =>
            s.scatter ? (
              <G key={s.label}>
                {s.points.map(([x, y], i) => (
                  <Circle key={i} cx={sx(x)} cy={sy(y)} r={4.5} fill={s.color} stroke="#fff" strokeWidth={1.5} />
                ))}
              </G>
            ) : (
              <Polyline
                key={s.label}
                points={s.points
                  .filter(([x, y]) => Number.isFinite(y) && y >= y0 - (y1 - y0) && y <= y1 + (y1 - y0))
                  .map(([x, y]) => `${sx(x)},${sy(Math.min(Math.max(y, y0), y1))}`)
                  .join(' ')}
                fill="none"
                stroke={s.color}
                strokeWidth={2.5}
                strokeDasharray={s.dashed ? '6,4' : undefined}
              />
            ),
          )}
          {xLabel && (
            <SvgText fontFamily="Inter, Roboto, Helvetica, Arial, sans-serif" x={PAD.left + w / 2} y={height - 6} fontSize={12} fontWeight="bold" fill={colors.text} textAnchor="middle">
              {xLabel}
            </SvgText>
          )}
          {yLabel && (
            <SvgText fontFamily="Inter, Roboto, Helvetica, Arial, sans-serif" x={12} y={PAD.top + h / 2} fontSize={12} fontWeight="bold" fill={colors.text} textAnchor="middle" rotation={-90} originX={12} originY={PAD.top + h / 2}>
              {yLabel}
            </SvgText>
          )}
        </Svg>
      )}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 6 }}>
        {series.map((s) => (
          <View key={s.label} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <View style={{ width: 14, height: 4, borderRadius: 2, backgroundColor: s.color }} />
            <Text style={{ fontSize: 13, color: colors.text, fontWeight: '600' }}>{s.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function extent(xs: number[]): [number, number] {
  if (!xs.length) return [0, 1];
  let lo = Math.min(...xs);
  let hi = Math.max(...xs);
  if (lo === hi) {
    lo -= 1;
    hi += 1;
  }
  const pad = (hi - lo) * 0.06;
  return [lo - pad, hi + pad];
}

function ticks(lo: number, hi: number, count = 5): number[] {
  const span = hi - lo;
  const step0 = span / count;
  const mag = 10 ** Math.floor(Math.log10(step0));
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= count) ?? 10 * mag;
  const out: number[] = [];
  for (let t = Math.ceil(lo / step) * step; t <= hi + 1e-9 * span; t += step) out.push(Math.round(t / step) * step);
  return out;
}

function defaultTick(v: number): string {
  const a = Math.abs(v);
  if (a !== 0 && (a < 1e-2 || a >= 1e4)) return v.toExponential(0);
  return String(Number(v.toPrecision(3)));
}
