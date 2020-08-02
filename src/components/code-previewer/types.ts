import { Demo } from './demo';
import { BlockComponentProps } from 'mic-global';

export interface CodePreviewerProps extends BlockComponentProps {
  children?: string;
  language?: string;
  demo?: Demo;
}

export interface DemoComponent extends React.FC<unknown> {}