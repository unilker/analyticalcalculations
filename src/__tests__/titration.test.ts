import { craigDistribution, ionicStrength, jobIntersection, logGammaDavies, logGammaExtended, vanDeemterOptimum } from '../core/equilibria';
import {
  acidBaseEquivalenceVolumes,
  acidBasePH,
  alphaY4,
  derivativeEndPoint,
  edtaPM,
  precipitationPAg,
  redoxPotential,
} from '../core/titration';

const near = (a: number, b: number, tol: number) => expect(Math.abs(a - b)).toBeLessThanOrEqual(tol);

describe('acid–base titration curves', () => {
  const hoac = { kind: 'weakAcid' as const, ca: 0.1, va: 0.05, ct: 0.1, pKas: [-Math.log10(1.75e-5)] };

  it('50.00 mL 0.100 M HOAc with 0.100 M NaOH', () => {
    near(acidBasePH(hoac, 0), 2.88, 0.01);
    near(acidBasePH(hoac, 0.025), 4.757, 0.005); // half-equivalence: pH = pKa
    near(acidBasePH(hoac, 0.05), 8.73, 0.01); // equivalence
    near(acidBasePH(hoac, 0.06), 11.96, 0.01); // excess NaOH
  });

  it('strong acid with strong base gives pH 7 at equivalence', () => {
    const p = { kind: 'strongAcid' as const, ca: 0.1, va: 0.05, ct: 0.1 };
    near(acidBasePH(p, 0), 1.0, 1e-6);
    near(acidBasePH(p, 0.05), 7.0, 1e-6);
    near(acidBasePH(p, 0.025), -Math.log10(0.0025 / 0.075), 1e-6);
  });

  it('weak base (NH₃) with HCl', () => {
    const p = { kind: 'weakBase' as const, ca: 0.1, va: 0.05, ct: 0.1, pKas: [-Math.log10(5.71e-10)] };
    near(acidBasePH(p, 0), 11.12, 0.01);
    near(acidBasePH(p, 0.025), 9.24, 0.01);
    near(acidBasePH(p, 0.05), 5.27, 0.01);
  });

  it('phosphoric acid has three equivalence volumes and pH ≈ (pKa1 + pKa2)/2 at the first', () => {
    const p = { kind: 'weakAcid' as const, ca: 0.1, va: 0.025, ct: 0.1, pKas: [1.959, 7.125, 12.319] };
    const eqs = acidBaseEquivalenceVolumes(p);
    expect(eqs.map((v) => Math.round(v * 1e5) / 1e5)).toEqual([0.025, 0.05, 0.075]);
    near(acidBasePH(p, eqs[0]), (1.959 + 7.125) / 2, 0.15);
    near(acidBasePH(p, eqs[1]), (7.125 + 12.319) / 2, 0.3);
  });
});

describe('EDTA titration (Christian Example 9.4: Ca²⁺ at pH 10, K′ = 1.8 × 10¹⁰)', () => {
  const p = { cm: 0.1, vm: 0.1, cy: 0.1, kEff: 1.8e10 };
  it.each([
    [0, 1.0],
    [0.05, 1.48],
    [0.1, 5.77],
    [0.15, 9.95],
  ])('V = %f L → pCa = %f', (v, pCa) => near(edtaPM(p, v), pCa, 0.01));

  it('α(Y⁴⁻) at pH 10 is about 0.35', () => near(alphaY4(10), 0.35, 0.01));
});

describe('precipitation titration (Cl⁻ with Ag⁺, Ksp = 1.0 × 10⁻¹⁰)', () => {
  const p = { cx: 0.1, vx: 0.05, cAg: 0.1, ksp: 1e-10 };
  it('pAg at the equivalence point is 5.00', () => near(precipitationPAg(p, 0.05), 5.0, 1e-6));
  it('pAg before equivalence', () => near(precipitationPAg(p, 0.025), 10 + Math.log10(0.0025 / 0.075), 1e-4));
  it('pAg after equivalence', () => near(precipitationPAg(p, 0.06), -Math.log10(0.001 / 0.11), 1e-4));
});

describe('redox titration (Fe²⁺ with Ce⁴⁺ in 1 M H₂SO₄)', () => {
  const p = { c1: 0.1, v1: 0.05, n1: 1, e1: 0.68, c2: 0.1, n2: 1, e2: 1.44 };
  it('E = E°(Fe) at half equivalence', () => near(redoxPotential(p, 0.025), 0.68, 1e-3));
  it('E = (E1 + E2)/2 at equivalence', () => near(redoxPotential(p, 0.05), 1.06, 1e-3));
  it('E = E°(Ce) at twice the equivalence volume', () => near(redoxPotential(p, 0.1), 1.44, 1e-3));
  it('two-electron analyte: Sn²⁺ with Fe³⁺ (E_eq = (2·0.139 + 0.771)/3)', () => {
    const q = { c1: 0.05, v1: 0.05, n1: 2, e1: 0.139, c2: 0.1, n2: 1, e2: 0.771 };
    near(redoxPotential(q, 0.05), (2 * 0.139 + 0.771) / 3, 2e-3);
  });
});

describe('derivative end point', () => {
  it('finds the inflection of a synthetic curve', () => {
    const p = { kind: 'weakAcid' as const, ca: 0.1, va: 0.05, ct: 0.1, pKas: [4.757] };
    const v = Array.from({ length: 41 }, (_, i) => 0.03 + i * 0.001);
    const r = derivativeEndPoint(v, v.map((x) => acidBasePH(p, x)))!;
    near(r.vFirst, 0.05, 0.0006);
    near(r.vSecond!, 0.05, 0.0006);
  });
});

describe('activity and separations helpers', () => {
  it('ionic strength of 0.10 M Na₂SO₄ is 0.30 M', () => near(ionicStrength([{ c: 0.2, z: 1 }, { c: 0.1, z: -2 }]), 0.3, 1e-12));
  it('extended Debye–Hückel: γ(Ca²⁺, α = 600 pm) at μ = 0.1', () => near(10 ** logGammaExtended(2, 0.1, 600), 0.405, 0.01));
  it('Davies γ for z = 1 at μ = 0.01', () => near(10 ** logGammaDavies(1, 0.01), 0.90, 0.01));
  it('Craig distribution sums to 1 and peaks near n·p', () => {
    const f = craigDistribution(30, 0.5);
    near(f.reduce((a, b) => a + b, 0), 1, 1e-12);
    expect(f.indexOf(Math.max(...f))).toBe(15);
  });
  it('van Deemter optimum', () => {
    const o = vanDeemterOptimum(0.1, 0.4, 0.01);
    near(o.u, Math.sqrt(40), 1e-12);
    near(o.h, 0.1 + 2 * Math.sqrt(0.004), 1e-12);
  });
  it('Job plot of a 1:2 complex intersects at x = 0.667', () => {
    const x = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const y = x.map((xi) => Math.min(xi / 2, 1 - xi) * 1.2);
    const r = jobIntersection(x, y)!;
    near(r.x, 2 / 3, 1e-6);
    near(r.ratio, 2, 1e-5);
  });
});

describe('Job plot with curvature near the maximum', () => {
  it('skips the curved points next to the maximum', () => {
    const x = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
    const y = [0, 0.091, 0.18, 0.272, 0.359, 0.44, 0.502, 0.494, 0.361, 0.179, 0];
    const r = jobIntersection(x, y)!;
    near(r.ratio, 2, 0.05);
  });
});

describe('EDTA curve with an auxiliary complexing agent', () => {
  // Harvey Example 9.3.x: 50.0 mL 5.00 mM Cd²⁺ with 0.0100 M EDTA, pH 10, α_Cd = 0.0881, Kf = 2.88e16.
  const aM = 0.0881;
  const p = { cm: 5.0e-3, vm: 0.05, cy: 0.01, kEff: aM * alphaY4(10) * 2.88e16, alphaM: aM };
  it('before equivalence pCd follows the excess metal', () => {
    expect(edtaPM(p, 0.005)).toBeCloseTo(3.494, 2);
  });
  it('after equivalence pCd matches Harvey (≈15.3 at 30 mL)', () => {
    expect(Math.abs(edtaPM(p, 0.03) - 15.32)).toBeLessThan(0.03);
  });
});
