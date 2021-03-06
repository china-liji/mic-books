import React, { useState, useCallback } from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function DepsDemo() {
  const [changeableDeps, setChangeableDeps] = useState(true);
  const times = useUpdateTimes();

  const getTimes = useCallback(
    () => {
      return times;
    },
    // 这里得保持 deps 的个数一致，所以是 [null]
    changeableDeps ? [times] : [null]
  );

  const onButtonClick = () => {
    setChangeableDeps(!changeableDeps);
  };

  return (
    <div>
      <p>
        getTimes = useCallback(..., [<span>{changeableDeps ? times : 'null'}</span>]);
      </p>
      <p>
        getTimes():{' '}
        <span>{getTimes()}</span>
        <sub>{
          changeableDeps ?
            '每次结果都不同，说明 useCallback 在随着 deps 的变化而更新' :
            'deps 固定为 [null]，useCallback 不会更新，结果不再变化'
        }</sub>
      </p>
      <hr />
      <p>
        <Button onClick={onButtonClick}>
          {changeableDeps ? '移除' : '设置'}动态 deps
        </Button>
      </p>
    </div>
  );
}