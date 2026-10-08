import { formatNumber } from '../core/format';
import { solveFormula } from '../core/solver';
import type { FormulaDef } from '../core/types';
import { findUnit, fromBase } from '../core/units';
import { TOOL_DETAILS } from '../data/details';
import { ALL_TOOLS, MODULES, TOOL_BY_ID } from '../data/registry';

/** Every tool in every module must have a detailed explanation. */
const COMPLETE_MODULES = MODULES.map((m) => m.id);

describe('tool details', () => {
  const entries = Object.entries(TOOL_DETAILS);

  it.each(COMPLETE_MODULES)('every tool in module %s has details', (m) => {
    const missing = ALL_TOOLS.filter((tool) => tool.module === m && !TOOL_DETAILS[tool.id]).map((tool) => tool.id);
    expect(missing).toEqual([]);
  });

  it.each(entries)('%s is complete in both languages', (id, d) => {
    expect(TOOL_BY_ID[id]).toBeDefined();
    for (const text of [d.concept, d.meaning]) {
      expect(text.tr.trim()).not.toBe('');
      expect(text.en.trim()).not.toBe('');
    }
    for (const list of [d.usage, d.solution, d.mistakes]) {
      expect(list.tr.length).toBeGreaterThan(0);
      expect(list.en.length).toBe(list.tr.length);
    }
    for (const r of d.related) {
      expect(TOOL_BY_ID[r]).toBeDefined();
      expect(r).not.toBe(id);
    }
  });

  // The worked solution must end with the number the calculator shows for the tool's example.
  const worked = entries.filter(([id]) => TOOL_BY_ID[id].kind === 'formula' && (TOOL_BY_ID[id] as FormulaDef).examples?.length);
  it.each(worked)('%s worked example ends with the calculator result', (id, d) => {
    const def = TOOL_BY_ID[id] as FormulaDef;
    const ex = def.examples![0];
    const r = solveFormula(def, ex.unknown, ex.values);
    if (!r.ok) throw new Error('example does not solve');
    const unknown = def.variables.find((v) => v.key === ex.unknown)!;
    const shown = fromBase(r.value, unknown.dim, findUnit(unknown.dim, unknown.unit).id);
    expect(d.solution.tr.at(-1)).toContain(formatNumber(shown, 'tr', 4));
    expect(d.solution.en.at(-1)).toContain(formatNumber(shown, 'en', 4));
  });
});
