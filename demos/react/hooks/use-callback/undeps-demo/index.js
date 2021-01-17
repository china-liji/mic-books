import React, { useCallback, useState } from 'react';
import { Popup } from './popup';

export function UndepsDemo() {
  const [open, setOpen] = useState(false);

  // ❌ 非理想的写法
  const onPopupClose = useCallback(() => {
    setOpen(false);
  }, []);

  // ✅ 理想的写法
  const onPopupClose = () => {
    setOpen(false);
  }

  return (
    <div>{
      open ?
        <Popup onClose={onPopupClose} /> :
        null
    }</div>
  );
}