import { SuspenseProps as ReactSuspenseProps } from 'react';
import { BlockComponentProps } from 'mic-global';

export interface SuspenseProps extends BlockComponentProps {
  children?: ReactSuspenseProps['children'];

  onFail?: ReactSuspenseProps['fallback'];

  onSuccess?(): void;
}