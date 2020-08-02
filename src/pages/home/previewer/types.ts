import { Config } from '@/src/config';

export enum PreviewerType {
  Demo = 'demo',

  Inspector = 'inspector'
}

export interface PreviewerProps {
  config: Config;
}

export interface MarkdownRenderers {
  code(data: MarkdownRendererCodeParameter): React.ReactElement;
}

export interface MarkdownRendererCodeParameter {
  value: string;
  
  language: string;
}