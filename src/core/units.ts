import type { DimensionId } from './types';

export const NA = 6.02214076e23;
export const H_PLANCK = 6.62607015e-34;
export const C_LIGHT = 2.99792458e8;
export const E_CHARGE = 1.602176634e-19;
export const R_GAS = 8.314462618;
export const F_FARADAY = 96485.33212;
export const K_BOLTZMANN = 1.380649e-23;
export const KW_25C = 1.0e-14;

export interface UnitDef {
  id: string;
  label: string;
  /** Multiply a value in this unit by `factor` to get the base unit. */
  factor: number;
}

const u = (id: string, factor = 1, label = id): UnitDef => ({ id, label, factor });

/** First unit in each list is the base unit used by every equation. */
export const DIMENSIONS: Record<DimensionId, UnitDef[]> = {
  none: [u('-', 1, '')],
  conc: [u('M'), u('mM', 1e-3), u('µM', 1e-6), u('nM', 1e-9)],
  amount: [u('mol'), u('mmol', 1e-3), u('µmol', 1e-6)],
  mass: [u('g'), u('kg', 1e3), u('mg', 1e-3), u('µg', 1e-6)],
  volume: [u('L'), u('mL', 1e-3), u('µL', 1e-6)],
  molarMass: [u('g/mol')],
  massConc: [u('g/L'), u('mg/L', 1e-3), u('µg/L', 1e-6), u('mg/mL', 1), u('µg/mL', 1e-3), u('ng/mL', 1e-6)],
  percent: [u('%')],
  density: [u('g/mL'), u('g/cm³', 1), u('kg/L', 1), u('kg/m³', 1e-3)],
  pathLength: [u('cm'), u('mm', 0.1), u('m', 100), u('µm', 1e-4)],
  wavelength: [u('m'), u('nm', 1e-9), u('µm', 1e-6), u('Å', 1e-10), u('cm', 1e-2)],
  frequency: [u('Hz'), u('kHz', 1e3), u('MHz', 1e6), u('GHz', 1e9), u('THz', 1e12)],
  wavenumber: [u('cm⁻¹'), u('m⁻¹', 1e-2)],
  energy: [u('J'), u('eV', E_CHARGE), u('kJ/mol', 1e3 / NA), u('kcal/mol', 4184 / NA)],
  speed: [u('m/s'), u('km/s', 1e3)],
  molarAbs: [u('L mol⁻¹ cm⁻¹')],
  pressure: [u('mmHg'), u('kPa', 7.500617), u('atm', 760)],
  molality: [u('mol/kg'), u('mmol/kg', 1e-3)],
  normality: [u('N'), u('mN', 1e-3)],
  massPerArea: [u('µg/cm²')],
  ppm: [u('ppm')],
  ppb: [u('ppb')],
};

export function unitsOf(dim: DimensionId): UnitDef[] {
  return DIMENSIONS[dim];
}

export function findUnit(dim: DimensionId, id?: string): UnitDef {
  const list = DIMENSIONS[dim];
  return list.find((x) => x.id === id) ?? list[0];
}

export function toBase(value: number, dim: DimensionId, unitId?: string): number {
  return value * findUnit(dim, unitId).factor;
}

export function fromBase(value: number, dim: DimensionId, unitId?: string): number {
  return value / findUnit(dim, unitId).factor;
}
