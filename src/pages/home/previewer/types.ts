export enum PreviewerType {
  Demo = 'demo',

  InlineDemo = 'inline-demo'
}

export interface MarkdownRenderers {
  code(data: MarkdownRendererCodeParameter): React.ReactElement;
}

export interface MarkdownRendererCodeParameter {
  value: string;
  
  language: string;
}