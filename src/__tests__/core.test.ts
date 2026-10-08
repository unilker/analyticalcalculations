import { alphaFractions, speciesLabels } from '../core/acidBase';
import { formatNumber, parseList, parseNumber, parseTable, unreadTokens } from '../core/format';
import { molarMass } from '../core/molarMass';
import { findUnit, unitLabel } from '../core/units';
import {
  fCritical,
  grubbsCritical,
  grubbsTest,
  inversePrediction,
  linearRegression,
  normCdf,
  oneWayAnova,
  propagate,
  qTest,
  standardAdditionResult,
  summarize,
  tCritical,
  tTestKnown,
  tTestPaired,
  tTestTwoMeans,
} from '../core/stats';

const near = (a: number, b: number, tol: number) => expect(Math.abs(a - b)).toBeLessThanOrEqual(tol);

describe('distributions vs. Harvey Appendix 16.4–16.7', () => {
  it.each([
    [1, 0.95, 12.706],
    [4, 0.95, 2.776],
    [10, 0.95, 2.228],
    [5, 0.99, 4.032],
    [20, 0.9, 1.725],
    [30, 0.99, 2.75],
  ])('t(df=%i, %f) = %f', (df, conf, expected) => near(tCritical(conf, df), expected, 1e-3));

  it('F critical (α = 0.05 one-tailed, 4, 4) = 6.388', () => near(fCritical(0.05, 4, 4), 6.388, 2e-3));
  it('F critical (α = 0.025, 5, 5) = 7.146', () => near(fCritical(0.025, 5, 5), 7.146, 2e-3));

  it.each([
    [3, 0.05, 1.155],
    [5, 0.05, 1.715],
    [10, 0.05, 2.29],
    [10, 0.01, 2.482],
    [14, 0.05, 2.507],
  ])('Grubbs G(n=%i, α=%f) = %f', (n, a, g) => near(grubbsCritical(n, a), g, 2e-3));
});

describe('statistics', () => {
  const data = [3.08, 3.13, 3.1, 3.12, 3.14];

  it('summarizes a data set', () => {
    const s = summarize(data);
    near(s.mean, 3.114, 1e-9);
    near(s.s, 0.02408, 1e-5);
    near(s.ci[1].half, (2.776 * 0.02408) / Math.sqrt(5), 1e-4);
  });

  it('t-test against a known value', () => {
    const r = tTestKnown([98.9, 99.1, 99.4, 99.6, 98.8], 100, 0.95)!;
    expect(r.significant).toBe(true);
  });

  it('two-means t-test pools when variances are similar', () => {
    const r = tTestTwoMeans([10.1, 10.3, 10.2, 10.4], [10.6, 10.8, 10.7, 10.5], 0.95)!;
    expect(r.pooled).toBe(true);
    expect(r.significant).toBe(true);
  });

  it('paired t-test', () => {
    const r = tTestPaired([10.2, 12.7, 8.6, 17.5, 11.2], [10.6, 13.0, 8.4, 17.8, 11.5], 0.95)!;
    near(r.meanDiff, -0.22, 1e-9);
    expect(r.df).toBe(4);
  });

  it('Q-test (Harvey example: 3.067 is an outlier at α = 0.05)', () => {
    const r = qTest([3.067, 3.049, 3.039, 2.514, 3.048, 3.079, 3.094, 3.109, 3.102], '0.05');
    expect(r?.suspect).toBe(2.514);
    expect(r?.significant).toBe(true);
    near(r!.statistic, (3.039 - 2.514) / (3.109 - 2.514), 1e-9);
  });

  it('tests give no verdict when the data have no spread', () => {
    expect(tTestKnown([3.1, 3.1, 3.1], 3.0, 0.95)).toBeUndefined();
    expect(tTestPaired([10.5, 20.5, 30.5], [10.1, 20.1, 30.1], 0.95)).toBeUndefined();
    expect(tTestTwoMeans([5, 5, 5], [5.1, 5.2, 5.3], 0.95)).toBeUndefined();
    expect(qTest([2.5, 2.5, 2.5, 2.5], '0.05')).toBeUndefined();
    expect(grubbsTest([2.5, 2.5, 2.5, 2.5], 0.05)).toBeUndefined();
  });

  it('Grubbs test flags the same outlier', () => {
    const r = grubbsTest([3.067, 3.049, 3.039, 2.514, 3.048, 3.079, 3.094, 3.109, 3.102], 0.05);
    expect(r?.significant).toBe(true);
  });

  it('linear regression and inverse prediction', () => {
    const x = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
    const y = [0, 12.36, 24.83, 35.91, 48.79, 60.42];
    const reg = linearRegression(x, y);
    near(reg.slope, 120.706, 1e-2);
    near(reg.intercept, 0.209, 1e-2);
    const p = inversePrediction(reg, 29.32, 3);
    near(p.x, 0.241, 1e-3);
    near(p.sx, 0.0024, 2e-4);
  });

  it('standard additions x-intercept', () => {
    const reg = linearRegression([0, 1, 2, 3], [0.2, 0.3, 0.4, 0.5]);
    near(standardAdditionResult(reg).x, 2, 1e-9);
  });

  it('one-way ANOVA', () => {
    const r = oneWayAnova(
      [
        [10, 11, 12],
        [20, 21, 22],
        [10, 12, 11],
      ],
      0.95,
    );
    expect(r.significant).toBe(true);
    expect(r.dfBetween).toBe(2);
    expect(r.dfWithin).toBe(6);
  });

  it('propagation of uncertainty rules', () => {
    const [r1, u1] = propagate('add', [
      { value: 135.27, u: 0.2 },
      { value: 4.3, u: 0.1, invert: true },
    ]);
    near(r1, 130.97, 1e-9);
    near(u1, Math.sqrt(0.05), 1e-12);
    const [r2, u2] = propagate('mul', [
      { value: 10, u: 0.1 },
      { value: 2, u: 0.04, invert: true },
    ]);
    near(r2, 5, 1e-12);
    near(u2 / r2, Math.sqrt(0.01 ** 2 + 0.02 ** 2), 1e-12);
    const [, u3] = propagate('log10', [{ value: 1e-4, u: 1e-6 }]);
    near(u3, 0.01 * Math.LOG10E, 1e-12); // 0.4343·u/x with the exact constant
  });
});

describe('acid–base', () => {
  it('α fractions sum to one and equal ½ at pH = pKa', () => {
    const a = alphaFractions([2.15, 7.2, 12.35], 7.2);
    near(a.reduce((p, c) => p + c, 0), 1, 1e-12);
    near(a[1], a[2], 1e-3);
  });

  it('species labels', () => {
    expect(speciesLabels(3)).toEqual(['H₃A', 'H₂A⁻', 'HA²⁻', 'A³⁻']);
  });
});

describe('molar mass', () => {
  it.each([
    ['NaCl', 58.44],
    ['H2SO4', 98.072],
    ['CuSO4·5H2O', 249.68],
    ['Ca3(PO4)2', 310.17],
    ['K4[Fe(CN)6]', 368.35],
    ['(NH4)2SO4', 132.13],
    ['KHC8H4O4', 204.22],
    ['Co', 58.933],
    ['CuSO4.5H2O', 249.68],
    ['CaSO4·0.5H2O', 145.15],
    ['CaSO4·0,5H2O', 145.15],
    ['2CaSO4·H2O', 290.29],
  ])('%s = %f', (f, m) => {
    const r = molarMass(f);
    expect(r.ok).toBe(true);
    if (r.ok) near(r.molarMass, m, 0.01);
  });

  it('rejects invalid formulas', () => {
    expect(molarMass('Xx2').ok).toBe(false);
    expect(molarMass('Ca(OH').ok).toBe(false);
    expect(molarMass('').ok).toBe(false);
    expect(molarMass('CuSO4·5').ok).toBe(false);
    expect(molarMass('CaSO4.0.5H2O').ok).toBe(false);
  });
});

describe('number formatting and parsing', () => {
  it('formats with decimal comma in Turkish', () => {
    expect(formatNumber(12.0765, 'tr', 4)).toBe('12,08');
    expect(formatNumber(12.0765, 'en', 4)).toBe('12.08');
    expect(formatNumber(1.75e-5, 'tr', 3)).toBe('1,75 × 10⁻⁵');
    expect(formatNumber(2.0, 'en', 4)).toBe('2');
  });

  it('parses user input', () => {
    expect(parseNumber('1,8e-5')).toBe(1.8e-5);
    expect(parseNumber('1.8×10^-5')).toBe(1.8e-5);
    expect(parseNumber('0,25')).toBe(0.25);
    expect(parseNumber('abc')).toBeNaN();
    expect(parseList('12,5 13,1; 12,9\n13,0')).toEqual([12.5, 13.1, 12.9, 13.0]);
    expect(parseList('12.5, 13.1, 12.9')).toEqual([12.5, 13.1, 12.9]);
    expect(parseTable('0 0\n0,1 12,36\n0.2 24.83 0.5')).toEqual([
      [0, 0],
      [0.1, 12.36],
      [0.2, 24.83, 0.5],
    ]);
  });
});

describe('display ↔ input round trip', () => {
  it.each([1.75e-5, 2.5e-4, 0.001234, 0.5, 12.08, 4321.5, 6.022e23, -3.3e-12, 1e-300])('parses back what it displays: %p', (x) => {
    for (const lang of ['tr', 'en'] as const) {
      const shown = formatNumber(x, lang, 6);
      expect(Math.abs(parseNumber(shown) - x)).toBeLessThanOrEqual(Math.abs(x) * 1e-5);
    }
  });
});

describe('unit labels', () => {
  it('shows minutes as dk in Turkish and min in English', () => {
    const minute = findUnit('time', 'min');
    expect(unitLabel(minute, 'tr')).toBe('dk');
    expect(unitLabel(minute, 'en')).toBe('min');
    expect(unitLabel(findUnit('rateConst1', 'min⁻¹'), 'tr')).toBe('dk⁻¹');
    expect(unitLabel(findUnit('flow', 'mL/min'), 'tr')).toBe('mL/dk');
    expect(unitLabel(findUnit('massConc', 'mg/mL'), 'tr')).toBe('mg/mL');
  });
});

describe('weighted inverse prediction', () => {
  it('uses the weight at the unknown level (Miller & Miller 5.17)', () => {
    const x = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
    const y = [0, 12.36, 24.83, 35.91, 48.79, 60.42];
    const sy = [0.02, 0.02, 0.07, 0.13, 0.22, 0.33];
    const reg = linearRegression(x, y, sy);
    const p = inversePrediction(reg, 29.32, 3);
    const s0 = 0.07 + ((0.13 - 0.07) * (p.x - 0.2)) / 0.1;
    const w0 = (6 / s0 ** 2) / sy.reduce((a, s) => a + 1 / s ** 2, 0);
    const expected = (reg.sr / reg.slope) * Math.sqrt(1 / (3 * w0) + 1 / 6 + (29.32 - reg.yMean) ** 2 / (reg.slope ** 2 * reg.sxx));
    near(p.sx, expected, 1e-12);
    // Much wider than treating the sample as weight 1.
    const naive = (reg.sr / reg.slope) * Math.sqrt(1 / 3 + 1 / 6 + (29.32 - reg.yMean) ** 2 / (reg.slope ** 2 * reg.sxx));
    expect(p.sx / naive).toBeGreaterThan(1.3);
  });
});

describe('normal distribution accuracy', () => {
  it.each([
    [0.7071, 0.7602478],
    [0.75, 0.7733726],
    [1, 0.8413447],
    [1.96, 0.9750021],
    [3.5, 0.9997674],
  ])('Φ(%f) = %f', (z, p) => near(normCdf(z), p, 2e-7));
  it('is monotonic around z = 0.7', () => {
    expect(normCdf(0.70711)).toBeGreaterThan(normCdf(0.7071));
  });
});

describe('data entry', () => {
  it('reports tokens that are not numbers', () => {
    expect(unreadTokens('10.1 10,3 1O.2 9.9')).toEqual(['1O.2']);
    expect(parseList('10.1 10,3 1O.2 9.9')).toEqual([10.1, 10.3, 9.9]);
    expect(unreadTokens('1.2, 3.4; 5e-3\n6,0')).toEqual([]);
  });
});
