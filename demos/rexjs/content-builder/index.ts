import markdown from './readme.md';
import { WatcherDemo } from './watcher-demo';
import { Demo } from '@/src/components/code-previewer/demo';

export const watcherDemo = new Demo(
  [],
  WatcherDemo
);

export default markdown;