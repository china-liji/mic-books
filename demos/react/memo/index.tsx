import updateDemoSource from './update-demo/index?txt';
import ChildDemoSource from './update-demo/child?txt';
import { Demo } from '@/src/components/code-previewer/demo';
import { File } from '@/src/components/code-previewer/file';
import { UpdateDemo } from './update-demo';
import { fileOfUseUpdateTimes } from '@/demos/hooks';

export const updateDemo = new Demo(
  [
    new File('index.jsx', updateDemoSource),
    new File('child.jsx', ChildDemoSource),
    fileOfUseUpdateTimes,
  ],
  UpdateDemo,
  true
);