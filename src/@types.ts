declare module 'react-markdown' {
  const Default: React.FunctionComponent<{
    source: string,
    renderers: {
      code(data: { value: string, language: string }): React.ReactElement;
    }
  }>;
  
  export default Default;
}

declare module '*.md' {
  const content: string;
  
  export default content;
}

declare module '*?txt' {
  const content: string;
  
  export default content;
}