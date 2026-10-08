export type Lang = 'tr' | 'en';

/** Localized text. */
export type L = { tr: string; en: string };

/** Formula or symbol text: one string for both languages, or a TR/EN pair when it contains words. */
export type LText = string | L;

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
  symbol: LText;
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
  /** Human-readable formula (Turkish decimal commas; shown with points in English). */
  formula: LText;
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
  formula?: LText;
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

/** Paragraphs or list items in both languages. */
export type LList = { tr: string[]; en: string[] };

/** Extended explanation shown on a tool's "More details" page. */
export interface ToolDetail {
  /** The chemistry behind the tool. Paragraphs are separated by blank lines. */
  concept: L;
  /** What the equation says, how it is derived, units. Lines starting with "• " render as bullets. */
  meaning: L;
  /** When to use it and its limits. */
  usage: LList;
  /** Worked example, step by step; the last step states the result. */
  solution: LList;
  /** Common student mistakes. */
  mistakes: LList;
  /** Ids of related tools. */
  related: string[];
}
