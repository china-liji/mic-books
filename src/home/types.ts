import { Config } from '../configs/config';

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

export type MarkdownRendererCodeParameter = {
  value: string;
  language: string;
};

export type MarkdownRenderers = {
  code(MarkdownRendererCodeParameter): React.ReactElement;
};