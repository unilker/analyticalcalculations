export type Pose = 'portrait' | 'landscape';

/** Shortest screen side (dp/pt) below which a device counts as a phone. */
export const PHONE_MAX_SHORT_SIDE = 600;

/**
 * How the device is physically held, from accelerometer readings (any unit: the vector is
 * normalised). Returns null when it lies flat or sits between the two poses, so small tilts in
 * the hand never count as a turn.
 */
export function poseOf(x: number, y: number, z: number): Pose | null {
  const m = Math.hypot(x, y, z);
  if (!m) return null;
  const ax = Math.abs(x) / m;
  const ay = Math.abs(y) / m;
  if (Math.abs(z) / m > 0.8) return null;
  if (ax > 0.7 && ax > 1.5 * ay) return 'landscape';
  if (ay > 0.7 && ay > 1.5 * ax) return 'portrait';
  return null;
}
