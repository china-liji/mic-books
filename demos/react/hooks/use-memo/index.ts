import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { fileOfUseHasChanged, fileOfUseUpdateTimes } from '@/demos/hooks';
import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';
import depsDemoSource from './deps-demo?txt';
import uncontextDemoSource from './uncontext-demo?txt';
import uncontextLocaleSource from './uncontext-demo/locale?txt';
import { File } from '@/src/components/code-previewer/file';
import { DepsDemo } from './deps-demo';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ]
);

export const useHasChangedDemo = new Demo(
  [fileOfUseHasChanged]
);

export const depsDemo = new Demo(
  [
    new File('index.jsx', depsDemoSource),
    fileOfUseUpdateTimes,
  ],
  DepsDemo,
  true
);

export const uncontextDemo = new Demo(
  [
    new File('index.jsx', uncontextDemoSource),
    new File('locale.js', uncontextLocaleSource),
  ],
);

export default markdown;