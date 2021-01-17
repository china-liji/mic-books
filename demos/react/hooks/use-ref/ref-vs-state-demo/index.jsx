import { Button } from 'antd';
import React, { useRef, useState } from 'react';

export function RefVsStateDemo() {
  const numRef = useRef(0);
  const [num, setNum] = useState(0);

  const onRefButtonClick = () => {
    numRef.current++;
  };

  const onStateButtonClick = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <blockquote>
        <h6>const numRef = useRef(0);</h6>
        <hr data-mini />
        <p>
          numRef.current: {numRef.current}
        </p>
        <hr data-mini />
        <p>
          <Button onClick={onRefButtonClick}>numRef.current++</Button>
          <sub>点击不会触发组件更新</sub>
        </p>
      </blockquote>
      <hr />
      <blockquote>
        <h6>const [num, setNum] = useState(0);</h6>
        <hr data-mini />
        <p>
          num: {num}
        </p>
        <hr data-mini />
        <p>
          <Button onClick={onStateButtonClick}>setNum({num + 1})</Button>
          <sub>点击触发组件更新</sub>
        </p>
      </blockquote>
    </div>
  );
}