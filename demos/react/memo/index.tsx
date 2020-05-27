import updateDemoSource from './update-demo/index?txt';
import ChildDemoSource from './update-demo/child?txt';
import updateDemoTypesSource from './update-demo/types?txt';

import { Demo } from '@/src/common/code-previewer/demo';
import { File } from '@/src/common/code-previewer/file';
import { UpdateDemo } from './update-demo';

export const updateDemo = new Demo(
  [
    new File('index.tsx', updateDemoSource),
    new File('child.tsx', ChildDemoSource),
    new File('types.ts', updateDemoTypesSource),
  ],
  UpdateDemo,
  true
);