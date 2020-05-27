import React, { useCallback } from 'react';
import { saveInput } from './locale';

export function OuterFuncDemo(): React.ReactElement {
  // 引入外部函数，避免每次都临时创建内联函数
  const onChange = useCallback(saveInput, []);

  return (
    <input onChange={onChange} />
  );
}