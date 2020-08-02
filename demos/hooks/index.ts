import { File } from '@/src/components/code-previewer/file';
import useHasChangedSource from './use-has-changed?txt';
import useUpdateTimesSource from './use-update-times?txt';

export const fileOfUseHasChanged = new File('use-has-changed.js', useHasChangedSource);

export const fileOfUseUpdateTimes = new File('use-update-times.js', useUpdateTimesSource);