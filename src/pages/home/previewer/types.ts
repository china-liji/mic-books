export enum PreviewerType {
  Demo = 'demo',

  InlineDemo = 'inline-demo'
}

export enum PreviewerMode {
  Normal,

  Ppt
}

export type Loader = Promise<React.ReactNode> | null;

export interface PreviewerContext {
  maxPage: number;

  mode: PreviewerMode;

  page: number;

  ready: boolean;

  setMode(mode: PreviewerMode): void;

  setPage(page: number): void;
}

export interface MarkdownRenderers {
  code(data: MarkdownRendererCodeParameter): React.ReactElement;
}

export interface MarkdownRendererCodeParameter {
  value: string;
  
  language: string;
}