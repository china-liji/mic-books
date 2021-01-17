import React, { useState } from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function LastValueDemo() {
  const [num, setNum] = useState(1024);
  const times = useUpdateTimes();

  const onMultiChangeNumButtonClick = () => {
    setNum(num + 1);
    setNum(num + 2);
    setNum(num + 3);
    setNum(num);
  };

  const onChangeNumButtonClick = () => {
    setNum(num + 1);
    setNum(num + 2);
    setNum(num + 3);
  };

  return (
    <div>
      <p>
        const [num, setNum] = useState(1024);
      </p>
      <hr />
      <p>
        组件更新次数：<span>{times}</span>
      </p>
      <p>
        num: <span>{num}</span>
      </p>
      <hr />
      <p>
        <Button onClick={onMultiChangeNumButtonClick}>
          setNum(num + n), setNum(num);
        </Button>
        <sub>不会触发组件刷新</sub>
      </p>
      <p>
        <Button onClick={onChangeNumButtonClick}>
          setNum(num + 1), setNum(num + 2), setNum(num + 3);
        </Button>
      </p>
    </div>
  );
}