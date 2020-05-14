import updateSource from './update-test/index?txt';
import updateChildSource from './update-test/child?txt';
import updateTypesSource from './update-test/types?txt';

import { Demo } from '@/src/common/code-previewer/demo';
import { File } from '@/src/common/code-previewer/file';
import { UpdateTest } from './update-test';

export const updateDemo = new Demo(
  [
    new File('index.tsx', updateSource),
    new File('child.tsx', updateChildSource),
    new File('types.ts', updateTypesSource)
  ],
  UpdateTest,
  true
);