import React, { useEffect } from 'react';
import { SubProps } from './types';

export function Sub({ onUnmount }: SubProps): React.ReactElement {
  // 将 onUnmount 加入依赖，以便对最新的 onUnmount 函数进行调用
  useEffect((): SubProps['onUnmount'] => {
    // 当组件被注销，此函数会被调用
    return onUnmount;
  }, [onUnmount]);

  return (
    <div />
  );
}