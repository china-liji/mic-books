import { Config } from './config';
import { Demo } from '../common/code-previewer/demo';

export type PreviewerProps = {
  config: Config;
};

export type RouteParams = {
  [name: number]: string;
};

export type DirProps = {
  config: Config;
  onChange(config: Config): void;
};

export type Export = {
  [name: string]: Demo;
} & {
  default: string;
};

export type Importer = () => Promise<Export>;
