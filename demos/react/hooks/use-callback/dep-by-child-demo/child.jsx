import React, { useEffect } from 'react';

export function Child({ onUnmount }) {
  // 将 onUnmount 加入依赖，以便对最新的 onUnmount 函数进行调用
  useEffect(() => {
    // 当组件被注销，此函数会被调用
    return onUnmount;
  }, [onUnmount]);

  return (
    <div />
  );
}