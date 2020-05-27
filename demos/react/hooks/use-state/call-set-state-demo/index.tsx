import React, { useState } from 'react';
import { useDemoStyles } from '@/demos/use-demo-styles';

export function CallSetStateDemo(): React.ReactElement {
  const [num, setNum] = useState(0);
  const { demo } = useDemoStyles();
  
  const onClick = (): void => {
    setNum(num + 1);
  };

  return (
    <div className={demo}>
      状态值 <span>num</span>: {num}
      <hr />
      <button onClick={onClick}>setNum(num + 1)</button>
    </div>
  );
}