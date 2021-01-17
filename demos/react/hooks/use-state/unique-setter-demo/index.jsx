import React, { useState } from 'react';
import useHasChanged from '@/demos/hooks/use-has-changed';
import { Button } from 'antd';

export function UniqueSetterDemo() {
  const [num, setNum] = useState(0);
  const numHasChanged = useHasChanged(num);
  const setNumHasChanged = useHasChanged(setNum);
  
  const onClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <p>
        const [num, setNum] = useState(0);
      </p>
      <hr />
      <p>
        num: <span>{num}</span>
      </p>
      <p>
        num 是否有变化: <span>{`${numHasChanged}`}</span>
      </p>
      <p>
        setNum 是否有变化: <span>{`${setNumHasChanged}`}</span>
      </p>
      <hr />
      <p>
        <Button onClick={onClick}>setNum(num + 1)</Button>
      </p>
    </div>
  );
}