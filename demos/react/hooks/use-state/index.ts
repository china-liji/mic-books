import markdown from './readme.md';
import CallSetStateDemoSource from './call-set-state-demo?txt';
import CompareSetterDemoSource from './compare-setter-demo?txt';
import useHasChangedSource from '@/demos/hooks/use-has-changed?txt';
import ineffectiveCallSource from './ineffective-call-demo?txt';
import { Demo } from '@/src/components/code-previewer/demo';
import { CallSetStateDemo } from './call-set-state-demo';
import { File } from '@/src/components/code-previewer/file';
import { CompareSetterDemo } from './compare-setter-demo';
import { fileOfUseHasChanged, fileOfUseUpdateTimes } from '@/demos/hooks';
import { IneffectiveCallDemo } from './ineffective-call-demo';
import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ]
);

export const callSetStateDemo = new Demo(
  [
    new File('index.jsx', CallSetStateDemoSource),
  ],
  CallSetStateDemo
);

export const compareSetterDemo = new Demo(
  [
    new File('index.jsx', CompareSetterDemoSource),
    new File('use-has-changed.js', useHasChangedSource),
    fileOfUseHasChanged,
  ],
  CompareSetterDemo
);

export const ineffectiveCallDemo = new Demo(
  [
    new File('index.jsx', ineffectiveCallSource),
    fileOfUseUpdateTimes,
  ],
  IneffectiveCallDemo
);

export default markdown;