import { Demo } from '../demo';
import { DemoComponent } from '../types';
import { BlockComponentProps } from 'mic-global';

export interface AutoUpdateDemo extends Demo {
  component: DemoComponent;
}

export interface AutoUpdateProps extends BlockComponentProps {
  demo: AutoUpdateDemo;
}