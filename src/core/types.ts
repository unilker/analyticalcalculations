export type Lang = 'tr' | 'en';

/** Localized text. */
export type L = { tr: string; en: string };

export type DimensionId =
  | 'none'
  | 'conc'
  | 'amount'
  | 'mass'
  | 'volume'
  | 'molarMass'
  | 'massConc'
  | 'percent'
  | 'density'
  | 'pathLength'
  | 'wavelength'
  | 'frequency'
  | 'wavenumber'
  | 'energy'
  | 'speed'
  | 'molarAbs'
  | 'pressure'
  | 'molality'
  | 'normality'
  | 'massPerArea'
  | 'ppm'
  | 'ppb'
  | 'temperature'
  | 'potential'
  | 'molarEnergy'
  | 'current'
  | 'time'
  | 'charge'
  | 'diffusion'
  | 'massFlow'
  | 'area'
  | 'scanRate'
  | 'conductivity'
  | 'conductance'
  | 'perLength'
  | 'molarCond'
  | 'specificVolume'
  | 'flow'
  | 'mobility'
  | 'voltage'
  | 'angle'
  | 'magneticField'
  | 'activity'
  | 'rateConst1'
  | 'rateConst2'
  | 'rate'
  | 'crossSection'
  | 'flux'
  | 'forceConst'
  | 'molarVolume'
  | 'massAtten';

export type ModuleId =
  | 'tools'
  | 'conc'
  | 'volumetric'
  | 'stats'
  | 'calib'
  | 'acidbase'
  | 'grav'
  | 'spectro'
  | 'equilibrium'
  | 'titration'
  | 'electro'
  | 'extraction'
  | 'chroma'
  | 'qa'
  | 'sampling'
  | 'atomic'
  | 'ms'
  | 'kinetics';

export type ModuleGroup = 'basics' | 'data' | 'equilibria' | 'instrumental' | 'separations' | 'other';

export interface VariableDef {
  key: string;
  /** Display symbol, e.g. "ε" or "C₁". */
  symbol: string;
  name: L;
  dim: DimensionId;
  /** Default unit id within the dimension (falls back to the base unit). */
  unit?: string;
  /** Solver search range in base units. */
  min?: number;
  max?: number;
  /** 'log' for strictly positive quantities spanning orders of magnitude (default), 'linear' otherwise. */
  scale?: 'log' | 'linear';
  /** Variables such as stoichiometric coefficients that are inputs only. */
  inputOnly?: boolean;
  /** Pre-filled value in base units. */
  defaultValue?: number;
  hint?: L;
}

export type Values = Record<string, number>;

export interface Example {
  /** Known values in base units. */
  values: Values;
  unknown: string;
  /** Expected answer in base units (used by tests). */
  expected: number;
  description?: L;
}

export interface FormulaDef {
  kind: 'formula';
  id: string;
  module: ModuleId;
  name: L;
  purpose: L;
  /** Human-readable formula. */
  formula: string;
  variables: VariableDef[];
  /** Residual (left side − right side) evaluated in base units; zero when the equation holds. */
  equation: (v: Values) => number;
  /** Optional closed-form solutions per unknown, in base units. */
  solve?: Record<string, (v: Values) => number>;
  defaultUnknown: string;
  assumptions?: L;
  sources: string[];
  related?: string[];
  examples?: Example[];
  keywords?: string[];
}

export interface CustomToolDef {
  kind: 'custom';
  id: string;
  module: ModuleId;
  name: L;
  purpose: L;
  /** Short formula or method summary shown on the card. */
  formula?: string;
  sources: string[];
  keywords?: string[];
}

export type ToolDef = FormulaDef | CustomToolDef;

export interface ModuleDef {
  id: ModuleId;
  name: L;
  description: L;
  color: string;
  /** Short glyph shown on the module tile. */
  glyph: string;
  group: ModuleGroup;
}
