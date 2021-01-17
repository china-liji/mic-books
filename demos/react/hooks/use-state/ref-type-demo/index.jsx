import React, { useState } from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function RefTypeDemo() {
  const [obj, setObj] = useState({});
  const times = useUpdateTimes();

  const onObjButtonClick = () => {
    obj[times] = true;
    setObj(obj);
  };

  const onChangeObjButtonClick = () => {
    obj[times] = true;
    setObj({...obj});
  };

  return (
    <div>
      <p>
        const [obj, setObj] = useState({'{}'});  
      </p>
      <hr />
      <p>
        组件更新次数：<span>{times}</span>
      </p>
      <p>
        obj: <span>{JSON.stringify(obj)}</span>
      </p>
      <hr />
      <p>
        <Button onClick={onObjButtonClick}>
          obj[{times}] = true, setObj(obj);
        </Button>
        <sub>不会触发组件刷新</sub>
      </p>
      <p>
        <Button onClick={onChangeObjButtonClick}>obj[{times}] = true, setObj({'{...obj}'});</Button>
      </p>
    </div>
  );
}