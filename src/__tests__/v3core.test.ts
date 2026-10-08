import { kineticOrders, leastSquares, lineweaverBurk, twoLineFit } from '../core/fitting';
import { complexFormula, pureWaterSolubility } from '../core/equilibria';
import { dbe, isotopePattern } from '../core/massSpec';
import { controlChart, factorialEffects, samplesNeeded, screening, uncertaintyBudget, youdenEffects } from '../core/quality';

const near = (a: number, b: number, tol: number) => expect(Math.abs(a - b)).toBeLessThanOrEqual(tol);

describe('quality assurance', () => {
  it('Youden effects follow Prichard Eq. 4.15–4.16', () => {
    const r = [10, 11, 12, 13, 14, 15, 16, 17]; // s t u v w x y z
    const e = youdenEffects(r);
    near(e[0], (10 + 11 + 12 + 13) / 4 - (14 + 15 + 16 + 17) / 4, 1e-12); // A
    near(e[1], (10 + 11 + 14 + 15) / 4 - (12 + 13 + 16 + 17) / 4, 1e-12); // B
  });

  it('every Youden factor is balanced (4 nominal, 4 alternative) and pairwise orthogonal', () => {
    for (let f = 0; f < 7; f++) {
      const sign = (row: number) => (youdenEffects(Array.from({ length: 8 }, (_, i) => (i === row ? 1 : 0)))[f] > 0 ? 1 : -1);
      const signs = Array.from({ length: 8 }, (_, i) => sign(i));
      expect(signs.filter((s) => s > 0).length).toBe(4);
    }
  });

  it('2² factorial effects', () => {
    // y = 10 + 2·A + 3·B + 1·AB (coded −1/+1) → effects 2× coefficients
    const y = [0, 1, 2, 3].map((run) => {
      const a = run & 1 ? 1 : -1;
      const b = run & 2 ? 1 : -1;
      return 10 + 2 * a + 3 * b + a * b;
    });
    const e = Object.fromEntries(factorialEffects(2, y).map((x) => [x.label, x.effect]));
    near(e.A, 4, 1e-12);
    near(e.B, 6, 1e-12);
    near(e.AB, 2, 1e-12);
  });

  it('control chart flags a point beyond 3s', () => {
    const c = controlChart([10.1, 9.9, 10.0, 10.2, 9.8, 11.0], 10, 0.2);
    expect(c.violations.some((v) => v.index === 5 && v.rule === '3s')).toBe(true);
    near(c.ucl, 10.6, 1e-12);
  });

  it('screening test metrics', () => {
    const r = screening(90, 5, 95, 10);
    near(r.sensitivity, 0.9, 1e-12);
    near(r.specificity, 0.95, 1e-12);
  });

  it('Harvey Example 7.2.6: 27 samples for e = 0.80 % with s = 2.0 %', () => {
    expect(samplesNeeded(2.0, 0.8, 0.95).n).toBe(27);
  });

  it('uncertainty budget contributions sum to one', () => {
    const b = uncertaintyBudget([
      { name: 'm', value: 0.5, u: 0.0001 },
      { name: 'V', value: 0.1, u: 0.0001 },
      { name: 'P', value: 99.9, u: 0.05 },
    ]);
    near(b.contributions.reduce((a, c) => a + c, 0), 1, 1e-12);
    near(b.uRel, Math.sqrt((0.0001 / 0.5) ** 2 + 0.001 ** 2 + (0.05 / 99.9) ** 2), 1e-15);
  });
});

describe('mass spectrometry', () => {
  it('CH₂Cl₂ shows the 100 : 64 : 10 chlorine cluster', () => {
    const r = isotopePattern('CH2Cl2');
    if (!r.ok) throw new Error(r.error);
    near(r.peaks[0].relative, 100, 1e-9);
    near(r.peaks.find((p) => p.offset === 2)!.relative, 64, 1.5);
    near(r.peaks.find((p) => p.offset === 4)!.relative, 10.2, 0.6);
    near(r.monoisotopic, 83.9534, 1e-3);
  });

  it('bromobenzene has M and M+2 of nearly equal height', () => {
    const r = isotopePattern('C6H5Br');
    if (!r.ok) throw new Error(r.error);
    near(r.peaks.find((p) => p.offset === 2)!.relative, 97.3, 1.0);
    near(r.peaks.find((p) => p.offset === 1)!.relative, 6.6, 0.4);
    expect(r.dbe).toBe(4);
  });

  it('M+1 of a C10 hydrocarbon is about 11 %', () => {
    const r = isotopePattern('C10H22');
    if (!r.ok) throw new Error(r.error);
    near(r.peaks.find((p) => p.offset === 1)!.relative, 11.1, 0.4);
    expect(r.dbe).toBe(0);
  });

  it('rejects elements without isotope data', () => {
    expect(isotopePattern('FeCl3').ok).toBe(false);
  });
});

describe('fitting', () => {
  it('two-line fit finds the break of a mole-ratio plot', () => {
    const x = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4];
    const y = x.map((xi) => Math.min(0.3 * xi, 0.6));
    near(twoLineFit(x, y)!.x, 2, 1e-9);
  });

  it('first-order data are recognised', () => {
    const t = [0, 60, 120, 180, 240, 300];
    const a = t.map((ti) => 0.05 * Math.exp(-0.004 * ti));
    const fits = kineticOrders(t, a);
    const best = fits.reduce((p, c) => (c.r2 > p.r2 ? c : p));
    expect(best.order).toBe(1);
    near(best.k, 0.004, 1e-9);
    near(best.halfLife, Math.LN2 / 0.004, 1e-6);
  });

  it('Lineweaver–Burk recovers Km and Vmax', () => {
    const S = [0.1, 0.2, 0.5, 1, 2, 5];
    const v = S.map((s) => (10 * s) / (0.8 + s));
    const r = lineweaverBurk(S, v);
    near(r.vmax, 10, 1e-9);
    near(r.km, 0.8, 1e-9);
  });

  it('least squares solves an over-determined system', () => {
    const A = [
      [1, 2],
      [3, 1],
      [2, 2],
    ];
    const x = [0.3, 0.1];
    const b = A.map((r) => r[0] * x[0] + r[1] * x[1]);
    const sol = leastSquares(A, b)!;
    near(sol[0], 0.3, 1e-12);
    near(sol[1], 0.1, 1e-12);
  });
});

describe('floating-point residue', () => {
  it('reports an exactly cancelling Youden effect as 0', () => {
    expect(youdenEffects([5.04, 5.12, 5.08, 5.15, 4.95, 5.03, 4.99, 5.06])[6]).toBe(0);
  });
});

describe('audit regressions (spectroscopy and MS)', () => {
  it('names metal-rich complexes correctly', () => {
    expect(complexFormula(2.004)).toBe('ML₂');
    expect(complexFormula(0.5)).toBe('M₂L');
    expect(complexFormula(1.5)).toBe('M₂L₃');
    expect(complexFormula(1)).toBe('ML');
  });
  it('DBE counts Na, K as monovalent and B as trivalent', () => {
    expect(dbe([{ symbol: 'C', count: 7 }, { symbol: 'H', count: 5 }, { symbol: 'O', count: 2 }, { symbol: 'Na', count: 1 }])).toBe(5);
    expect(dbe([{ symbol: 'C', count: 6 }, { symbol: 'H', count: 7 }, { symbol: 'B', count: 1 }, { symbol: 'O', count: 2 }])).toBe(4);
  });
  it('monoisotopic mass uses the most abundant isotope (¹¹B)', () => {
    const r = isotopePattern('C6H7BO2');
    if (!r.ok) throw new Error(r.error);
    near(r.monoisotopic, 122.054, 2e-3);
  });
});

describe('audit regressions (solubility)', () => {
  it('includes water OH⁻ for very insoluble hydroxides', () => {
    // Fe(OH)₃, Ksp 4e-38: [OH⁻] ≈ 1e-7 → s ≈ 4e-38 / 1e-21 = 4e-17 M (not (Ksp/27)^¼ ≈ 2e-10 M)
    const fe = pureWaterSolubility(4e-38, 1, 3, true);
    expect(fe / 4e-17).toBeGreaterThan(0.99);
    expect(fe / 4e-17).toBeLessThan(1.01);
    // Mg(OH)₂ and Ca(OH)₂ are soluble enough for the simple formula
    expect(pureWaterSolubility(1.2e-11, 1, 2, true) / (1.2e-11 / 4) ** (1 / 3)).toBeCloseTo(1, 4);
    expect(pureWaterSolubility(5.5e-6, 1, 2, true) / (5.5e-6 / 4) ** (1 / 3)).toBeCloseTo(1, 6);
    // non-hydroxide: simple formula
    expect(pureWaterSolubility(1.8e-10, 1, 1, false)).toBeCloseTo(Math.sqrt(1.8e-10), 12);
  });
});

describe('audit regressions (QA)', () => {
  it('a point on the warning limit is not beyond it', () => {
    expect(controlChart([10, 10, 10.08, 10.08, 10], 10, 0.04).violations).toEqual([]);
    expect(controlChart([10, 10, 9.92, 9.92, 10], 10, 0.04).violations).toEqual([]);
    expect(controlChart([10, 10, 10.09, 10.09, 10], 10, 0.04).violations.map((v) => v.rule)).toEqual(['2of3']);
  });
  it('default control-chart data: action limit at run 12, run of seven from run 17, no 2-of-3', () => {
    const x = [10.02, 9.98, 10.05, 9.97, 10.01, 10.03, 9.96, 10.0, 10.04, 9.99, 10.02, 10.21, 10.06, 10.08, 10.07, 10.05, 10.09, 10.06, 10.08];
    const v = controlChart(x, 10, 0.04).violations;
    expect(v.filter((r) => r.rule === '3s').map((r) => r.index + 1)).toEqual([12]);
    expect(v.filter((r) => r.rule === 'run7').map((r) => r.index + 1)).toEqual([17, 18, 19]);
    expect(v.filter((r) => r.rule === '2of3')).toEqual([]);
  });
});
