import { SuspenseProps as ReactSuspenseProps } from 'react';
import { BlockComponentProps } from 'mic-global';

export interface SuspenseProps extends BlockComponentProps {
  children?: ReactSuspenseProps['children'];

  fallback?: ReactSuspenseProps['fallback'];
}