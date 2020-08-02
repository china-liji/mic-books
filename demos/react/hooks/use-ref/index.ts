import markdown from './readme.md';
import { Demo } from '@/src/components/code-previewer/demo';
import { fileOfUseHasChanged } from '@/demos/hooks';
import interfaceJsSource from './interface-demo/index?txt';
import interfaceTsSource from './interface-demo/index.d?txt';
import { File } from '@/src/components/code-previewer/file';

export const interfaceDemo = new Demo(
  [
    new File('JavaScript', interfaceJsSource, 'js'),
    new File('TypeScript', interfaceTsSource, 'ts'),
  ]
);

export const useHasChangedDemo = new Demo(
  [fileOfUseHasChanged]
);

export default markdown;