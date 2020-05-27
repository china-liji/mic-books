import markdown from './readme.md';
import { Demo } from '@/src/common/code-previewer/demo';
import CallSetStateDemoSource from './call-set-state-demo?txt';
import { CallSetStateDemo } from './call-set-state-demo';
import { File } from '@/src/common/code-previewer/file';

export const callSetStateDemo = new Demo(
  [
    new File('index.tsx', CallSetStateDemoSource),
  ],
  CallSetStateDemo
);

export default markdown;