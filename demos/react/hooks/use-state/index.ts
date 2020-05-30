import markdown from './readme.md';
import CallSetStateDemoSource from './call-set-state-demo?txt';
import CompareSetterDemoSource from './compare-setter-demo?txt';
import useHasChangedSource from '@/demos/hooks/use-has-changed?txt';
import ineffectiveCallSource from './ineffective-call-demo?txt';
import { Demo } from '@/src/common/code-previewer/demo';
import { CallSetStateDemo } from './call-set-state-demo';
import { File } from '@/src/common/code-previewer/file';
import { CompareSetterDemo } from './compare-setter-demo';
import { fileOfUseHasChanged, fileOfUseUpdateTimes } from '@/demos/hooks';
import { IneffectiveCallDemo } from './ineffective-call-demo';

export const callSetStateDemo = new Demo(
  [
    new File('index.tsx', CallSetStateDemoSource),
  ],
  CallSetStateDemo
);

export const compareSetterDemo = new Demo(
  [
    new File('index.tsx', CompareSetterDemoSource),
    new File('use-has-changed.ts', useHasChangedSource),
    fileOfUseHasChanged,
  ],
  CompareSetterDemo
);

export const ineffectiveCallDemo = new Demo(
  [
    new File('index.tsx', ineffectiveCallSource),
    fileOfUseUpdateTimes,
  ],
  IneffectiveCallDemo
);

export default markdown;