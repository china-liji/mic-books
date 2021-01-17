import { Tooltip } from 'antd';
import React, { useMemo } from 'react';
import { alignType } from './locale';

export function UncontextDemo() {
  let align;

  // ❌ 非理想的写法
  align = useMemo(() => {
    return {
      offset: [5, 5],
      targetOffset: [10, 10],
    };
  }, []);

  // ✅ 理想的写法
  align = alignType;

  return (
    <Tooltip align={align} />
  );
}