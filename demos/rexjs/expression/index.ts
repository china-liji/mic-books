import markdown from './readme.md';
import { TypesDemo } from './types-demo';
import { WatcherDemo } from './watcher-demo';
import { Demo } from '@/src/components/code-previewer/demo';

export const watcherDemo = new Demo(
  [],
  WatcherDemo
);

export const typesDemo = new Demo(
  [],
  TypesDemo,
  false,
  true
);

export default markdown;