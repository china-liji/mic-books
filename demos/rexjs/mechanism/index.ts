import markdown from './readme.md';
import { SyntaxTagsMapDemo } from './syntax-tags-map-demo';
import { Demo } from '@/src/components/code-previewer/demo';

export const syntaxTagsMapDemo = new Demo(
  [],
  SyntaxTagsMapDemo,
  false,
  true
);

export default markdown;