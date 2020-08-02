import React from 'react';
import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { SyntaxHighlighterStyle } from './types';
import { prism as style } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useInitLanguage } from './locale';

export function SyntaxHighlight(props: ReactSyntaxHighlighter['props']): React.ReactElement {
  useInitLanguage();

  return <ReactSyntaxHighlighter style={style as SyntaxHighlighterStyle} {...props} />;
}

export default SyntaxHighlight;