import React, { useCallback } from 'react';
import { useDemoStyles } from '@/demos/use-demo-styles';
import { Props } from './types';

export function InlineFuncTest({ times }: Props): React.ReactElement {
  let getTimes: () => number;
  const { demo } = useDemoStyles();

  const getTimesWithUseCallback = useCallback(
    // 这里每次都会生成一个新的函数，所以每次不同的 times 都会被闭包于函数内
    getTimes = (): number => {
      return times;
    },
    // 这里没有依赖，所以 callback 不会刷新
    []
  );

  return (
    <div className={demo}>
      <p>
        <b>内联函数</b> 每秒执行结果: <span>{getTimes()}</span>
        <sub>每次结果都不同，说明内联函数随组件刷新而重新生成</sub>
      </p>
      <p>
        <b>useCallback</b> 每秒执行结果: <span>{getTimesWithUseCallback()}</span>
        <sub>无论内联函数生成多少次，只要 deps 不发生变化，useCallback 就不会更新，所以结果永远一致</sub>
      </p>
    </div>
  );
}