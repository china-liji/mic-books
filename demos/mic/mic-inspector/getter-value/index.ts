import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { File } from '@/src/components/code-previewer/file';
import { UsageDemo } from './usage-demo';
import { GetterStatusDemo } from './getter-status-demo';
import usageDemoSource from './usage-demo?txt';

export const usageDemo = new Demo(
  [
    new File('index.jsx', usageDemoSource),
  ],
  UsageDemo,
  false,
  true
);

export const getterStatusDemo = new Demo(
  [],
  GetterStatusDemo
);

export default markdown;