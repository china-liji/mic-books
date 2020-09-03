import markdown from './readme.md';
import { ResultDemo } from './result-demo';
import { Demo } from '@/src/components/code-previewer/demo';

export const resultDemo = new Demo(
  [],
  ResultDemo,
  false,
  true
);

export default markdown;