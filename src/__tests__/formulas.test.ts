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
        expect(back.ok).toBe(true);
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
