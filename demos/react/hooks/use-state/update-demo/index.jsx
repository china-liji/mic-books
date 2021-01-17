import React, { useState } from 'react';
import { Button } from 'antd';
import useUpdateTimes from '@/demos/hooks/use-update-times';

export function UpdateDemo() {
  const times = useUpdateTimes();
  const [num, setNum] = useState(times);
  
  const onClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>
        const [num, setNum] = useState(<span>{times}</span>);
      </p>
      <hr data-mini />
      <p>
        num: <span>{num}</span>
        <sub>该状态值随更新函数 setNum 的调用而更新，并不随 useState 的参数改变</sub>
      </p>
      <hr />
      <p>
        <Button onClick={onClick}>setNum(num + 1)</Button>
      </p>
    </div>
  );
}