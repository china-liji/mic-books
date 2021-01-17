import markdown from './readme.md';
import UpdateDemoSource from './update-demo?txt';
import UniqueSetterDemoSource from './unique-setter-demo?txt';
import refTypeDemoSource from './ref-type-demo?txt';
import lastValueDemoSource from './last-value-demo?txt';
import valueTypeDemoSource from './value-type-demo?txt';
import triggerUpdateDemoSource from './trigger-update-demo?txt';
import { Demo } from '@/src/components/code-previewer/demo';
import { ValueTypeDemo } from './value-type-demo';
import { RefTypeDemo } from './ref-type-demo';
import { UpdateDemo } from './update-demo';
import { File } from '@/src/components/code-previewer/file';
import { UniqueSetterDemo } from './unique-setter-demo';
import { fileOfUseHasChanged, fileOfUseUpdateTimes } from '@/demos/hooks';
import { TriggerUpdateDemo } from './trigger-update-demo';
import { LastValueDemo } from './last-value-demo';
import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ],
);

export const updateDemo = new Demo(
  [
    new File('index.jsx', UpdateDemoSource),
    fileOfUseUpdateTimes,
  ],
  UpdateDemo,
  true,
);

export const uniqueSetterDemo = new Demo(
  [
    new File('index.jsx', UniqueSetterDemoSource),
    fileOfUseHasChanged,
  ],
  UniqueSetterDemo,
);

export const valueTypeDemo = new Demo(
  [
    new File('index.jsx', valueTypeDemoSource),
    fileOfUseUpdateTimes,
  ],
  ValueTypeDemo,
);

export const refTypeDemo = new Demo(
  [
    new File('index.jsx', refTypeDemoSource),
    fileOfUseUpdateTimes,
  ],
  RefTypeDemo,
);

export const lastValueDemo = new Demo(
  [
    new File('index.jsx', lastValueDemoSource),
    fileOfUseUpdateTimes,
  ],
  LastValueDemo,
);

export const triggerUpdateDemo = new Demo(
  [
    new File('index.jsx', triggerUpdateDemoSource),
    fileOfUseUpdateTimes,
  ],
  TriggerUpdateDemo,
);

export default markdown;