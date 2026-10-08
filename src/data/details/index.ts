import type { ToolDetail } from '../../core/types';
import { ACIDBASE_DETAILS } from './acidbase';
import { ATOMIC_DETAILS } from './atomic';
import { CALIB_DETAILS } from './calib';
import { CHROMA_DETAILS } from './chroma';
import { CONC_DETAILS } from './conc';
import { ELECTRO_DETAILS } from './electro';
import { EQUILIBRIUM_DETAILS } from './equilibrium';
import { EXTRACTION_DETAILS } from './extraction';
import { GRAV_DETAILS } from './grav';
import { KINETICS_DETAILS } from './kinetics';
import { MS_DETAILS } from './ms';
import { QA_DETAILS } from './qa';
import { SAMPLING_DETAILS } from './sampling';
import { SPECTRO_DETAILS } from './spectro';
import { STATS_DETAILS } from './stats';
import { TITRATION_DETAILS } from './titration';
import { TOOLS_DETAILS } from './tools';
import { VOLUMETRIC_DETAILS } from './volumetric';

/** Detailed explanations by tool id. Tools without an entry show no "More details" button. */
export const TOOL_DETAILS: Record<string, ToolDetail> = {
  ...CONC_DETAILS,
  ...VOLUMETRIC_DETAILS,
  ...GRAV_DETAILS,
  ...EXTRACTION_DETAILS,
  ...STATS_DETAILS,
  ...CALIB_DETAILS,
  ...EQUILIBRIUM_DETAILS,
  ...ACIDBASE_DETAILS,
  ...TITRATION_DETAILS,
  ...SAMPLING_DETAILS,
  ...TOOLS_DETAILS,
  ...ELECTRO_DETAILS,
  ...SPECTRO_DETAILS,
  ...CHROMA_DETAILS,
  ...MS_DETAILS,
  ...QA_DETAILS,
  ...ATOMIC_DETAILS,
  ...KINETICS_DETAILS,
};
