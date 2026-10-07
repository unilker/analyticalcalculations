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
  /** base = value · factor + offset (offset is only used for °C → K). */
  factor: number;
  offset?: number;
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
  massConc: [u('g/L'), u('mg/L', 1e-3), u('µg/L', 1e-6), u('g/mL', 1e3), u('g/100 mL', 10), u('mg/mL', 1), u('µg/mL', 1e-3), u('ng/mL', 1e-6)],
  percent: [u('%')],
  density: [u('g/mL'), u('g/cm³', 1), u('kg/L', 1), u('kg/m³', 1e-3)],
  pathLength: [u('cm'), u('mm', 0.1), u('m', 100), u('µm', 1e-4), u('dm', 10)],
  wavelength: [u('m'), u('nm', 1e-9), u('µm', 1e-6), u('Å', 1e-10), u('cm', 1e-2)],
  frequency: [u('Hz'), u('kHz', 1e3), u('MHz', 1e6), u('GHz', 1e9), u('THz', 1e12)],
  wavenumber: [u('cm⁻¹'), u('m⁻¹', 1e-2)],
  energy: [u('J'), u('eV', E_CHARGE), u('keV', 1e3 * E_CHARGE), u('MeV', 1e6 * E_CHARGE), u('meV', 1e-3 * E_CHARGE), u('neV', 1e-9 * E_CHARGE), u('kJ/mol', 1e3 / NA), u('kcal/mol', 4184 / NA)],
  speed: [u('m/s'), u('km/s', 1e3), u('cm/s', 1e-2), u('mm/s', 1e-3)],
  molarAbs: [u('L mol⁻¹ cm⁻¹')],
  pressure: [u('mmHg'), u('kPa', 7.500617), u('atm', 760)],
  molality: [u('mol/kg'), u('mmol/kg', 1e-3)],
  normality: [u('N'), u('mN', 1e-3)],
  massPerArea: [u('µg/cm²')],
  ppm: [u('ppm')],
  ppb: [u('ppb')],
  temperature: [u('K'), { id: '°C', label: '°C', factor: 1, offset: 273.15 }],
  potential: [u('V'), u('mV', 1e-3)],
  molarEnergy: [u('J/mol'), u('kJ/mol', 1e3), u('kcal/mol', 4184)],
  current: [u('A'), u('mA', 1e-3), u('µA', 1e-6), u('nA', 1e-9)],
  time: [u('s'), u('min', 60), u('h', 3600), u('d', 86400), u('y', 365.25 * 86400), u('ms', 1e-3), u('µs', 1e-6)],
  charge: [u('C'), u('mC', 1e-3), u('µC', 1e-6)],
  diffusion: [u('cm²/s'), u('m²/s', 1e4)],
  massFlow: [u('mg/s')],
  area: [u('cm²'), u('mm²', 1e-2)],
  scanRate: [u('V/s'), u('mV/s', 1e-3)],
  conductivity: [u('S/cm'), u('mS/cm', 1e-3), u('µS/cm', 1e-6), u('S/m', 1e-2)],
  conductance: [u('S'), u('mS', 1e-3), u('µS', 1e-6)],
  perLength: [u('cm⁻¹'), u('m⁻¹', 1e-2)],
  molarCond: [u('S cm²/mol')],
  specificVolume: [u('mL/g'), u('L/g', 1e3)],
  flow: [u('L/s'), u('mL/min', 1e-3 / 60), u('µL/min', 1e-6 / 60), u('L/min', 1 / 60)],
  mobility: [u('cm²/(V·s)')],
  voltage: [u('V'), u('kV', 1e3)],
  angle: [u('°'), u('rad', 180 / Math.PI)],
  magneticField: [u('T'), u('mT', 1e-3), u('G', 1e-4)],
  activity: [u('Bq'), u('kBq', 1e3), u('MBq', 1e6), u('GBq', 1e9), u('Ci', 3.7e10), u('mCi', 3.7e7), u('µCi', 3.7e4), u('dpm', 1 / 60)],
  rateConst1: [u('s⁻¹'), u('min⁻¹', 1 / 60), u('h⁻¹', 1 / 3600)],
  rateConst2: [u('M⁻¹ s⁻¹'), u('M⁻¹ min⁻¹', 1 / 60)],
  rate: [u('M/s'), u('mM/s', 1e-3), u('µM/s', 1e-6), u('mM/min', 1e-3 / 60), u('µM/min', 1e-6 / 60)],
  crossSection: [u('barn'), u('cm²', 1e24)],
  flux: [u('cm⁻² s⁻¹')],
  forceConst: [u('N/m'), u('mdyn/Å', 100)],
  molarVolume: [u('cm³/mol')],
  massAtten: [u('cm²/g')],
};

export function unitsOf(dim: DimensionId): UnitDef[] {
  return DIMENSIONS[dim];
}

export function findUnit(dim: DimensionId, id?: string): UnitDef {
  const list = DIMENSIONS[dim];
  return list.find((x) => x.id === id) ?? list[0];
}

export function toBase(value: number, dim: DimensionId, unitId?: string): number {
  const unit = findUnit(dim, unitId);
  return value * unit.factor + (unit.offset ?? 0);
}

export function fromBase(value: number, dim: DimensionId, unitId?: string): number {
  const unit = findUnit(dim, unitId);
  return (value - (unit.offset ?? 0)) / unit.factor;
}
