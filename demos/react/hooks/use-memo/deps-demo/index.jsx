import React, { useState, useMemo } from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function DepsDemo() {
  const [changeableDeps, setChangeableDeps] = useState(true);
  const times = useUpdateTimes();

  const ticks = useMemo(
    () => {
      return Date.now();
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
        const ticks = useMemo(..., [<span>{changeableDeps ? times : 'null'}</span>]);
      </p>
      <hr data-mini />
      <p>
        组件更新次数：<span>{times}</span>
      </p>
      <p>
        ticks:{' '}
        <span>{ticks}</span>
        <sub>{
          changeableDeps ?
            '每次结果都不同，说明 useMemo 的计算值在随着 deps 的变化而更新' :
            'deps 固定为 [null]，useMemo 不会更新，结果不再变化'
        }</sub>
      </p>
      <hr data-mini />
      <p>
        <Button onClick={onButtonClick}>
          {changeableDeps ? '移除' : '设置'}动态 deps
        </Button>
      </p>
    </div>
  );
}