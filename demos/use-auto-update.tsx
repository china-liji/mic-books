import { useEffect, useState } from 'react';
import React from 'react';

export function UseAutoUpdate(): [number, React.ReactElement] {
  const [times, setTimes] = useState(1);

  useEffect((): VoidFunction => {
    const time = setTimeout((): void => {
      // 刷新组件
      setTimes(times + 1);
    }, 1000);

    return (): void => {
      // 移除定时器
      clearTimeout(time);
    };
  }, [times]);

  return [
    times,
    <q>
      组件每隔 <span>1秒</span> 自动刷新，次数标识: <span>{times}</span>
    </q>
  ];
}