import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { DescendantsDemo } from './descendants-demo';
import { SubsDemo } from './subs-demo';
import { WatcherDemo } from './watcher-demo';

export const watcherDemo = new Demo(
  [],
  WatcherDemo
);

export const descendantsDemo = new Demo(
  [],
  DescendantsDemo,
  false,
  true
);

export const subsDemo = new Demo(
  [],
  SubsDemo,
  false,
  true
);

export default markdown;