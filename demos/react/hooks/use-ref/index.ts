import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { fileOfUseHasChanged } from '@/demos/hooks';
import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';
import refVsStateDemoSource from './ref-vs-state-demo?txt';
import elementRefDemoSource from './element-ref-demo?txt';
import { ElementRefDemo } from './element-ref-demo';
import { RefVsStateDemo } from './ref-vs-state-demo';
import { File } from '@/src/components/code-previewer/file';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ],
);

export const elementRefDemo = new Demo(
  [
    new File('index.jsx', elementRefDemoSource),
  ],
  ElementRefDemo,
);

export const useHasChangedDemo = new Demo(
  [fileOfUseHasChanged],
);

export const refVsStateDemo = new Demo(
  [
    new File('index.jsx', refVsStateDemoSource),
  ],
  RefVsStateDemo,
);

export default markdown;