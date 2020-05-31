import markdown from './readme.md';
import { Demo } from '@/src/common/code-previewer/demo';
import { fileOfUseHasChanged } from '@/demos/hooks';


export const useHasChangedDemo = new Demo(
  [ fileOfUseHasChanged ]
);

export default markdown;