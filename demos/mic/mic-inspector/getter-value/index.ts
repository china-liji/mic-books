import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { File } from '@/src/components/code-previewer/file';
import { UsageDemo } from './usage-demo';
import usageDemoSource from './usage-demo?txt';
import { GetterStatus, InspectorProps } from 'mic-inspector';

export const usageDemo = new Demo(
  [
    new File('index.jsx', usageDemoSource),
  ],
  UsageDemo,
  false,
  true
);

export const getterStatusProps: InspectorProps = {
  name: 'GetterStatus',
  value: GetterStatus,
  defaultExpand: true,
};

export default markdown;