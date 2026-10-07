import type { ToolDetail } from '../../core/types';
import { CONC_DETAILS } from './conc';

/** Detailed explanations by tool id. Tools without an entry show no "More details" button. */
export const TOOL_DETAILS: Record<string, ToolDetail> = {
  ...CONC_DETAILS,
};
