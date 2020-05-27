import { HTMLProps } from 'react';
import { Demo } from './demo';

export interface CodePreviewerProps extends HTMLProps<HTMLDivElement> {
  children?: string;
  language?: string;
  demo?: Demo;
}

export type AutoUpdateProps = {
  demo: Demo;
};

export type DemoComponent = React.FC<unknown>;

export type SyntaxHighlighterStyle = unknown;