import { Demo } from '../components/code-previewer/demo';
import { InspectorProps } from 'mic-inspector';
import { TitleProps } from './title/types';

export type ConfigTitleGetter = TitleProps['onRenderTitle'];

export type ConfigTitleParam = string | ConfigTitleGetter;

export type Export = {
  [name: string]: Demo | InspectorProps;
} & {
  default: string;
};

export interface Importer {
  (): Promise<Export>;
}