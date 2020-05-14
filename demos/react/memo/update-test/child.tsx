import React, { useRef } from 'react';
import { ChildProps } from './types';

export function UpdateChildTest({ getContent, date }: ChildProps): React.ReactElement {
  const updateTimes = useRef(0);
  
  updateTimes.current++;

  return (
    <div>
      子组件更新次数: <span>{updateTimes.current}</span>
      <hr />
      date: {date.toLocaleTimeString()}
      <br />
      getContent(): <span>{getContent()}</span><sub>刷新标识</sub>
    </div>
  );
}

export const UpdateChildTestWithMemo = React.memo(UpdateChildTest);