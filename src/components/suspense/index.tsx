import React, { Suspense as ReactSuspense, useState } from 'react';
import { Spin } from 'antd';
import { useSuspenseStyles } from './use-styles';
import { SuspenseProps } from './types';
import { BlockComponent } from 'mic-global';
import { Content } from './content';

export function Suspense({ className, children, onFail = null, onSuccess, ...props }: SuspenseProps): React.ReactElement {
  const [inited, setInited] = useState(false);

  const onInit = (): void => {
    setInited(true);
    onSuccess && onSuccess();
  };

  return (
    <BlockComponent className={useSuspenseStyles(className)} {...props}>
      {inited ? null : <Spin />}
      <ReactSuspense fallback={onFail}>
        <Content onInit={onInit}>{children}</Content>
      </ReactSuspense>
    </BlockComponent>
  );
}