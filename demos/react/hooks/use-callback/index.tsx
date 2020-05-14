import depsSource from './deps-test?txt';
import depsTypesSource from './deps-test/types?txt';
import inlineFuncSource from './inline-func-test?txt';
import inlineFuncTypesSource from './inline-func-test/types?txt';
import outerFuncSource from './outer-func-test?txt';
import outerFuncLocaleSource from './outer-func-test/locale?txt';
import depBySubSource from './dep-by-sub-test?txt';
import depBySubSubSource from './dep-by-sub-test/sub?txt';
import depBySubTypesSource from './dep-by-sub-test/types?txt';
import markdown from './readme.md';
import { DepsTest } from './deps-test';
import { Demo } from '@/src/common/code-previewer/demo';
import { File } from '@/src/common/code-previewer/file';
import { InlineFuncTest } from './inline-func-test';

export { updateDemo as memoUpdateDemo } from '../../memo';

export const depsDemo = new Demo(
  [
    new File('index.tsx', depsSource),
    new File('types.ts', depsTypesSource)
  ],
  DepsTest,
  true
);

export const inlineFuncDemo = new Demo(
  [
    new File('index.tsx', inlineFuncSource),
    new File('types.ts', inlineFuncTypesSource)
  ],
  InlineFuncTest,
  true
);

export const outerFuncDemo = new Demo([
  new File('index.tsx', outerFuncSource),
  new File('locale.ts', outerFuncLocaleSource)
]);

export const depBySubDemo = new Demo([
  new File('index.tsx', depBySubSource),
  new File('sub.tsx', depBySubSubSource),
  new File('types.ts', depBySubTypesSource)
]);

export default markdown;