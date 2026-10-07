import { poseOf } from '../components/rotation';

describe('device pose from the accelerometer', () => {
  it.each([
    [0, -1, 0, 'portrait'],
    [0, 9.81, 0, 'portrait'],
    [1, 0, 0, 'landscape'],
    [-9.81, 0, 0, 'landscape'],
    [0, 0, 1, null], // flat on a table
    [0.6, 0.6, 0.4, null], // half way: not a turn
    [0.3, -0.9, 0.3, 'portrait'], // tilted slightly in the hand
  ])('(%p, %p, %p) → %p', (x, y, z, pose) => expect(poseOf(x, y, z)).toBe(pose));
});
