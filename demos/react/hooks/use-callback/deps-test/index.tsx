import React, { useState, useCallback } from 'react';
import { useDemoStyles } from '@/demos/use-demo-styles';
import { Props } from './types';

export function DepsTest({ times }: Props): React.ReactElement {
  const { demo } = useDemoStyles();
  const [changeableDeps, setChangeableDeps] = useState(true);

  const getTimes = useCallback(
    (): number => {
      return times;
    },
    // 这里得保持 deps 的个数一致，所以是 [null]
    changeableDeps ? [times] : [null]
  );

  const onButtonClick = (): void => {
    setChangeableDeps(!changeableDeps);
  };

  return (
    <div className={demo}>
      <p>
        useCallback(..., <span>[{changeableDeps ? 'times' : 'null'}]</span>);
      </p>
      <hr />
      <p>
        每秒执行结果: <span>{getTimes()}</span>
        <sub>{
          changeableDeps ?
            '每次结果都不同，说明 useCallback 在随着 deps 的变化而更新' :
            'deps 固定为 [null]，useCallback 不会更新，结果不再变化'
        }</sub>
      </p>
      <p>
        <button onClick={onButtonClick}>
          {changeableDeps ? '移除' : '设置'}动态 deps
        </button>
      </p>
    </div>
  );
}