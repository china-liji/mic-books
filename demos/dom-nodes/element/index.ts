import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { DescendantsDemo } from './descendants-demo';
import { SubsDemo } from './subs-demo';
import { WatcherDemo } from './watcher-demo';
import { SetAttributeDemo } from './set-attribute-demo';
import setAttributeDemoSource from './set-attribute-demo?txt';
import { HtmlApiDemo } from './html-api-demo';
import htmlApiDemoSource from './html-api-demo?txt';
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

export const setAttributeDemo = new Demo(
  [
    new File('index.jsx', setAttributeDemoSource),
  ],
  SetAttributeDemo,
  false,
  true
);

export const subsDemo = new Demo(
  [],
  SubsDemo,
  false,
  true
);

export const htmlApiDemo = new Demo(
  [
    new File('index.jsx', htmlApiDemoSource),
  ],
  HtmlApiDemo,
  false,
  true
);

export default markdown;