import React, { useState, useEffect } from 'react';
import { AutoUpdateProps } from './types';
import { useStyles } from './use-styles';

export function AutoUpdate({ demo }: AutoUpdateProps): React.ReactElement {
  const [times, setTimes] = useState(1);
  const { autoUpdate } = useStyles();

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

  return (
    <div className={autoUpdate}>
      <p>组件每隔 1秒 自动刷新</p>
      <blockquote>
        <demo.component />
      </blockquote>
    </div>
  );
}