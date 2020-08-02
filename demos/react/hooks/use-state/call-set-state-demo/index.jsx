import React, { useState } from 'react';
import { Button } from 'antd';

export function CallSetStateDemo() {
  const [num, setNum] = useState(0);
  
  const onClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <span>num</span> = {num}
      <hr />
      <Button onClick={onClick}>setNum(num + 1)</Button>
    </div>
  );
}