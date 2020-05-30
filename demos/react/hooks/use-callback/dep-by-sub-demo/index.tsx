import React, { useCallback } from 'react';
import { Sub } from './sub';
import useUpdateTimes from '@/demos/hooks/use-update-times';

export function DepBySubDemo(): React.ReactElement {
  const times = useUpdateTimes();

  // 在某些特殊情况下，需要监听子组件的注销事件，你可能会如下使用
  const onSubUnmount = useCallback((): void => {
    console.log(`子组件在 times=${times} 时，被注销。`);
  }, [times]);

  return (
    <div>
      <Sub onUnmount={onSubUnmount} />
    </div>
  );
}