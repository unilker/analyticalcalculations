import type { ComponentType } from 'react';

import { AlphaTool, PhConverterTool, RegressionTool, StdAdditionMultiTool, TwoComponentTool } from './ChemTools';
import type { ToolProps } from './common';
import {
  AnovaTool,
  DescriptiveTool,
  FTestTool,
  GrubbsTool,
  NormalProbabilityTool,
  PropagationTool,
  QTestTool,
  TTestKnownTool,
  TTestPairedTool,
  TTestTwoTool,
} from './StatsTools';
import { ConstantsTable, CriticalValuesTool, ElementsTable, KaTable, KspTable, MolarMassTool } from './TableTools';

export const CUSTOM_COMPONENTS: Record<string, ComponentType<ToolProps>> = {
  'molar-mass': MolarMassTool,
  'table-ka': KaTable,
  'table-ksp': KspTable,
  'table-elements': ElementsTable,
  'table-constants': ConstantsTable,
  'table-critical': CriticalValuesTool,
  descriptive: DescriptiveTool,
  't-test-known': TTestKnownTool,
  't-test-two': TTestTwoTool,
  't-test-paired': TTestPairedTool,
  'f-test': FTestTool,
  'q-test': QTestTool,
  grubbs: GrubbsTool,
  anova: AnovaTool,
  propagation: PropagationTool,
  'normal-probability': NormalProbabilityTool,
  'linear-regression': RegressionTool,
  'std-addition-multi': StdAdditionMultiTool,
  'ph-converter': PhConverterTool,
  'alpha-fractions': AlphaTool,
  'two-component': TwoComponentTool,
};
