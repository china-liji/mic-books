import depsDemoSource from './deps-demo?txt';
import inlineFuncDemoSource from './inline-func-demo?txt';
import outerFuncDemoSource from './outer-func-demo?txt';
import outerFuncDemoLocaleSource from './outer-func-demo/locale?txt';
import depBySubDemoSource from './dep-by-sub-demo?txt';
import depBySubDemoSubSource from './dep-by-sub-demo/sub?txt';
import depBySubDemoTypesSource from './dep-by-sub-demo/types?txt';
import markdown from './readme.md';
import { DepsDemo } from './deps-demo';
import { Demo } from '@/src/common/code-previewer/demo';
import { File } from '@/src/common/code-previewer/file';
import { InlineFuncDemo } from './inline-func-demo';
import { fileOfUseUpdateTimes } from '@/demos/hooks';

export { updateDemo as memoUpdateDemo } from '../../memo';

export const depsDemo = new Demo(
  [
    new File('index.tsx', depsDemoSource),
    fileOfUseUpdateTimes,
  ],
  DepsDemo,
  true
);

export const inlineFuncDemo = new Demo(
  [
    new File('index.tsx', inlineFuncDemoSource),
    fileOfUseUpdateTimes,
  ],
  InlineFuncDemo,
  true
);

export const outerFuncDemo = new Demo([
  new File('index.tsx', outerFuncDemoSource),
  new File('locale.ts', outerFuncDemoLocaleSource),
]);

export const depBySubDemo = new Demo([
  new File('index.tsx', depBySubDemoSource),
  new File('sub.tsx', depBySubDemoSubSource),
  new File('types.ts', depBySubDemoTypesSource),
  fileOfUseUpdateTimes,
]);

export default markdown;