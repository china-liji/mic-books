import React from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';

export function ChildDemo({ method }) {
  const times = useUpdateTimes();

  return (
    <div>
      <p>
        子组件更新次数: <span>{times}</span>
      </p>
      <p>
        method(): <span>{method()}</span>
      </p>
    </div>
  );
}

export const ChildDemoWithMemo = React.memo(ChildDemo);