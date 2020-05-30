import React, { useState } from 'react';
import { Button } from 'antd';

export function CallSetStateDemo(): React.ReactElement {
  const [num, setNum] = useState(0);
  
  const onClick = (): void => {
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