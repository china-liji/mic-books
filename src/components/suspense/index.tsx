import React, { Suspense as ReactSuspense } from 'react';
import { Spin } from 'antd';
import { useSuspenseStyles } from './use-styles';
import { SuspenseProps } from './types';
import { BlockComponent } from 'mic-global';

export function Suspense({ className, children, fallback = null, ...props }: SuspenseProps): React.ReactElement {
  return (
    <BlockComponent className={useSuspenseStyles(className)} {...props}>
      <Spin />
      <ReactSuspense fallback={fallback}>
        {children}
      </ReactSuspense>
    </BlockComponent>
  );
}