import { localizeFormula } from '../core/format';
import { solveFormula } from '../core/solver';
import type { FormulaDef } from '../core/types';
import { ALL_TOOLS, MODULES, TOOL_BY_ID, searchTools, toolsOf } from '../data/registry';

const formulas = ALL_TOOLS.filter((t): t is FormulaDef => t.kind === 'formula');

const close = (actual: number, expected: number, rel = 2e-3) =>
  Math.abs(actual - expected) <= rel * Math.max(Math.abs(expected), 1e-300);

describe('formula definitions', () => {
  it('have unique ids and valid modules', () => {
    const ids = ALL_TOOLS.map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
    const moduleIds = new Set(MODULES.map((m) => m.id));
    for (const t of ALL_TOOLS) expect(moduleIds.has(t.module)).toBe(true);
  });

  it('every formula has an example', () => {
    for (const f of formulas) expect(f.examples?.length ?? 0).toBeGreaterThan(0);
  });

  it('every module has tools', () => {
    for (const m of MODULES) expect(toolsOf(m.id).length).toBeGreaterThan(0);
  });
});

describe.each(formulas.flatMap((f) => (f.examples ?? []).map((ex, i) => [`${f.id} #${i + 1}`, f, ex] as const)))(
  '%s',
  (_name, f, ex) => {
    it('closed form / default solve matches the textbook value', () => {
      const r = solveFormula(f, ex.unknown, ex.values);
      expect(r.ok).toBe(true);
      if (r.ok) expect(close(r.value, ex.expected)).toBe(true);
    });

    it('numeric solver agrees with the example', () => {
      const numeric: FormulaDef = { ...f, solve: undefined };
      const r = solveFormula(numeric, ex.unknown, ex.values);
      expect(r.ok).toBe(true);
      if (r.ok) expect(close(r.value, ex.expected, 5e-3)).toBe(true);
    });

    it('round-trips: solving any other variable recovers its input', () => {
      const r = solveFormula(f, ex.unknown, ex.values);
      if (!r.ok) throw new Error('no base solution');
      const full = { ...ex.values, [ex.unknown]: r.value };
      for (const variable of f.variables) {
        if (variable.inputOnly || variable.key === ex.unknown) continue;
        const known = { ...full };
        const target = known[variable.key];
        delete known[variable.key];
        const back = solveFormula(f, variable.key, known);
        expect([variable.key, back.ok]).toEqual([variable.key, true]);
        if (back.ok) expect(close(back.value, target, 5e-3)).toBe(true);
      }
    });
  },
);

describe('solver edge cases', () => {
  it('reports missing inputs', () => {
    const r = solveFormula(TOOL_BY_ID['beer-lambert'] as FormulaDef, 'c', { A: 0.5, eps: 1000 });
    expect(r).toEqual({ ok: false, reason: 'missing' });
  });
});

describe('search', () => {
  it('finds tools in Turkish without diacritics', () => {
    expect(searchTools('cozunurluk').map((t) => t.id)).toContain('molar-solubility');
    expect(searchTools('Beer').map((t) => t.id)).toContain('beer-lambert');
    expect(searchTools('t-testi').length).toBeGreaterThan(0);
  });
});

describe('solver robustness', () => {
  it('accepts a root that falls exactly on a scan point', () => {
    const f = TOOL_BY_ID['glass-electrode-ph'] as FormulaDef;
    const r = solveFormula(f, 'pHs', { Es: 0.05, Ex: -0.0683, T: 298.15, pHx: 8.99968391519612 });
    expect(r.ok && Math.abs(r.value - 7) < 1e-6).toBe(true);
  });

  it('rejects a pole that is not a root', () => {
    const def: FormulaDef = { ...(TOOL_BY_ID['beer-lambert'] as FormulaDef), equation: (x) => 1 / (x.c - 0.5), solve: undefined };
    expect(solveFormula(def, 'c', { A: 1, eps: 1, b: 1 }).ok).toBe(false);
  });
});

describe('custom tool registry', () => {
  it('every custom tool has a component', () => {
    // Imported lazily so the RN component tree is only loaded for this check.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { CUSTOM_COMPONENTS } = require('../components/tools') as typeof import('../components/tools');
    for (const t of ALL_TOOLS.filter((x) => x.kind === 'custom')) expect([t.id, typeof CUSTOM_COMPONENTS[t.id]]).toEqual([t.id, 'function']);
  });
});

describe('formula text localisation', () => {
  const TURKISH = /[çğıöşüÇĞİÖŞÜ]/;
  it('English formula strings and symbols contain no Turkish words or decimal commas', () => {
    const bad: string[] = [];
    for (const tool of ALL_TOOLS) {
      const texts = [tool.formula, ...(tool.kind === 'formula' ? tool.variables.map((v) => v.symbol) : [])];
      for (const t of texts) {
        if (t === undefined) continue;
        const en = localizeFormula(t, 'en');
        if (TURKISH.test(en) || /\d,\d/.test(en)) bad.push(`${tool.id}: ${en}`);
      }
    }
    expect(bad).toEqual([]);
  });
  it('shows decimal points in English and commas in Turkish', () => {
    expect(localizeFormula('pH = 6,10 + log x', 'en')).toBe('pH = 6.10 + log x');
    expect(localizeFormula('pH = 6,10 + log x', 'tr')).toBe('pH = 6,10 + log x');
    expect(localizeFormula({ tr: 'E_eş', en: 'E_eq' }, 'en')).toBe('E_eq');
  });
});
