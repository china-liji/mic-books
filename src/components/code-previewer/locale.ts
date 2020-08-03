import React from 'react';

export const SyntaxHighlighter = React.lazy((): Promise<typeof import('./syntax-highlighter')> => {
  return import('./syntax-highlighter');
});