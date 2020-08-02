import React, { useState } from 'react';
import useHasChanged from '@/demos/hooks/use-has-changed';
import { Button } from 'antd';

export function CompareSetterDemo() {
  const [num, setNum] = useState(0);
  const numHasChanged = useHasChanged(num);
  const setNumHasChanged = useHasChanged(setNum);
  
  const onClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <span>num</span> = {num}
      <br />
      <span>num</span> 是否有变化: {`${numHasChanged}`}
      <br />
      <span>setNum</span> 是否有变化: {`${setNumHasChanged}`}
      <hr />
      <Button onClick={onClick}>setNum(num + 1)</Button>
    </div>
  );
}