import React, { useEffect } from 'react';
import { ContentProps } from './types';

export function Content({ children, onInit }: ContentProps): React.ReactElement {
  useEffect(onInit, []);
  
  return <>{children}</>;
}