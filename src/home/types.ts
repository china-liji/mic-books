import { Config } from '../configs/config';
import ReactMarkdown from 'react-markdown';

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

export type MarkdownRenderers = typeof ReactMarkdown['defaultProps']['renderers'];