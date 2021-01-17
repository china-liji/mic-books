import { Button } from 'antd';
import React, { useRef } from 'react';

export function ElementRefDemo() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <p>
        const inputRef = useRef(null);
      </p>
      <hr />
      <p>
        <input ref={inputRef} defaultValue='你好' />
        <sub>{"<input ref={inputRef} />"}</sub>
      </p>
      <hr data-mini />
      <p>
        <Button onClick={focusInput}>inputRef.current.focus()</Button>
        <sub>点击聚焦输入框</sub>
      </p>
    </div>
  );
}