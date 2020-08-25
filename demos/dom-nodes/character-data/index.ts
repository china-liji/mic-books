import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { DescendantsDemo } from './descendants-demo';
import { SubsDemo } from './subs-demo';
import { WatcherDemo } from './watcher-demo';
import { ChildNodesDemo } from './child-nodes-demo';
import childNodesDemoSource from './child-nodes-demo?txt';
import { File } from '@/src/components/code-previewer/file';

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

export const childNodesDemo = new Demo(
  [
    new File('index.jsx', childNodesDemoSource),
  ],
  ChildNodesDemo,
  false,
  true
);


export default markdown;