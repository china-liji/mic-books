import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';
import depsDemoSource from './deps-demo?txt';
import inlineFuncDemoSource from './inline-func-demo?txt';
import outerFuncDemoSource from './outer-func-demo?txt';
import outerFuncDemoLocaleSource from './outer-func-demo/locale?txt';
import depBySubDemoSource from './dep-by-sub-demo?txt';
import depBySubDemoSubSource from './dep-by-sub-demo/sub?txt';
import markdown from './readme.md';
import { DepsDemo } from './deps-demo';
import { Demo } from '@/src/components/code-previewer/demo';
import { File } from '@/src/components/code-previewer/file';
import { InlineFuncDemo } from './inline-func-demo';
import { fileOfUseUpdateTimes } from '@/demos/hooks';

export { updateDemo as memoUpdateDemo } from '../../memo';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ]
);

export const depsDemo = new Demo(
  [
    new File('index.jsx', depsDemoSource),
    fileOfUseUpdateTimes,
  ],
  DepsDemo,
  true
);

export const inlineFuncDemo = new Demo(
  [
    new File('index.jsx', inlineFuncDemoSource),
    fileOfUseUpdateTimes,
  ],
  InlineFuncDemo,
  true
);

export const outerFuncDemo = new Demo([
  new File('index.jsx', outerFuncDemoSource),
  new File('locale.js', outerFuncDemoLocaleSource),
]);

export const depBySubDemo = new Demo([
  new File('index.jsx', depBySubDemoSource),
  new File('sub.jsx', depBySubDemoSubSource),
  fileOfUseUpdateTimes,
]);

export default markdown;