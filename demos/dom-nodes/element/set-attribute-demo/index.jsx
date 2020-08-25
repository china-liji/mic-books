import React, { useMemo, useState } from 'react';
import { DomInspector, Inspector } from 'mic-inspector';
import { Input, Button, Divider } from 'antd';

export function SetAttributeDemo() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [key, setKey] = useState(1);

  const element = useMemo(() => {
    // 使用 xml，是为了创建 Element 实例，而不是 HTMLElement 实例。
    return new DOMParser().parseFromString('<element />', 'text/xml').querySelector('element');
  }, []);

  const reset = () => {
    setName('');
    setValue('');
    setKey(key + 1);
  };

  const onNameChanged = ({ target }) => {
    setName(target.value);
  };

  const onValueChanged = ({ target }) => {
    setValue(target.value);
  };

  const onAddAttr = () => {
    element.setAttribute(
      name.trim(),
      value.trim()
    );

    reset();
  };

  const onRemoveAttr = () => {
    element.removeAttribute(
      name.trim()
    );

    reset();
  }
  
  const danger = !/^\s*[A-z$_]|^\s*$/.test(name);

  return (
    <div>
      <DomInspector key={`${key}-dom`} dom={element} expandLevel={1} />
      <br />
      <Inspector key={key} name='element.attributes' value={element.attributes} defaultExpand />
      <Divider />
      <Input.Group compact>
        <Input style={{ width: '100px' }} placeholder='属性名' value={name} onChange={onNameChanged} />
        <Input addonBefore='=' style={{ width: '132px' }} value={value} placeholder='属性值' onChange={onValueChanged} />
        <Button onClick={onAddAttr} danger={danger} disabled={name.trim().length === 0}>{danger ? '属性名不规范' : '设置属性'}</Button>
        <Button onClick={onRemoveAttr} disabled={!element.hasAttribute(name.trim())}>删除属性</Button>
      </Input.Group>
    </div>
  );
}