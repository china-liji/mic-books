import { File } from '@/src/common/code-previewer/file';
import useHasChangedSource from './use-has-changed?txt';
import useUpdateTimesSource from './use-update-times?txt';

export const fileOfUseHasChanged = new File('use-has-changed.ts', useHasChangedSource);

export const fileOfUseUpdateTimes = new File('use-update-times.ts', useUpdateTimesSource);