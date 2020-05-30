import React, { useRef } from 'react';
import { ChildDemoProps } from './types';

export function ChildDemo({ title, getContent, date }: ChildDemoProps): React.ReactElement {
  const updateTimes = useRef(0);
  
  updateTimes.current++;

  return (
    <div>
      {title}
      <br />
      子组件更新次数: <span>{updateTimes.current}</span>
      <hr data-mini />
      date: {date.toLocaleTimeString()}
      <br />
      getContent(): <span>{getContent()}</span><sub>刷新标识</sub>
    </div>
  );
}

export const ChildDemoWithMemo = React.memo(ChildDemo);