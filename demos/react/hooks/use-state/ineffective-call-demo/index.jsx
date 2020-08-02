import React, { useState } from 'react';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function IneffectiveCallDemo() {
  const [num, setNum] = useState(0);
  const [obj, setObj] = useState({ a: 1, b: 2 });
  const times = useUpdateTimes();

  const onNumButtonClick = () => {
    setNum(num);
  };

  const onChangeNumButtonClick = () => {
    setNum(num + 1);
  };

  const onObjButtonClick = () => {
    obj[times] = times;
    setObj(obj);
  };

  const onChangeObjButtonClick = () => {
    obj[times] = times;
    setObj({...obj});
  };

  const onMultiChangeNumButtonClick = () => {
    setNum(num + 1);
    setNum(num + 2);
    setNum(num + 3);
    setNum(num);
  };

  return (
    <div>
      组件更新次数：{times}
      <hr />
      <blockquote>
        值类型数据测试，同理适用于 string、boolean、number、null、undefined 等。
        <hr data-mini />
        <span>num</span>: {num}
        <br />
        <Button onClick={onNumButtonClick}>
          setNum(num)<sub>不会触发组件刷新</sub>
        </Button>
        <br />
        <Button onClick={onChangeNumButtonClick}>setNum(num + 1)</Button>
      </blockquote>
      <hr />
      <blockquote>
        引用类型数据测试，同理适用于 object、function、Array、Symbo 等。
        <hr data-mini />
        <span>obj</span>: {JSON.stringify(obj)}
        <br />
        <Button onClick={onObjButtonClick}>
          obj[times] = times &amp; setObj(obj)<sub>不会触发组件刷新</sub>
        </Button>
        <br />
        <Button onClick={onChangeObjButtonClick}>obj[times] = times &amp; setObj({'{...obj}'})</Button>
      </blockquote>
      <hr />
      <blockquote>
        同一阶段，多次调用，以最后一个“新值”为准，并与“旧值”对比，如果一致，则不会触发更新。
        <hr data-mini />
        <span>num</span>: {num}
        <br />
        <Button onClick={onMultiChangeNumButtonClick}>
          setNum(num + n) &amp; setNum(num)<sub>不会触发组件刷新</sub>
        </Button>
      </blockquote>
    </div>
  );
}