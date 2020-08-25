import { BlockComponentProps } from 'mic-global';
import { Demo } from '../code-previewer/demo';

export interface InlineDemoProps extends BlockComponentProps {
  demo: Demo;
}