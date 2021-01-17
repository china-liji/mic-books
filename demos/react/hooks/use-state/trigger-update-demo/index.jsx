import React, { useState } from 'react';
import { Button } from 'antd';
import useUpdateTimes from '@/demos/hooks/use-update-times';

export function TriggerUpdateDemo() {
  const times = useUpdateTimes();
  const [hidden, setHidden] = useState(false);
  
  const onClick = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <p>
        const [hidden, setHidden] = useState(false);  
      </p>
      <hr />
      <p>
        组件更新次数：<span>{times}</span>
      </p>
      <blockquote>
        hidden: <span>{`${hidden}`}</span>
        <p hidden={hidden} style={{ width: 200, height: 100, padding: 5, backgroundColor: 'gold', opacity: 0.6 }}>
          可隐藏的区域
        </p>
      </blockquote>
      <hr />
      <p>
        <Button onClick={onClick}>
          setHidden({`${!hidden}`})
        </Button>
        <sub>点击变更状态，并更新组件</sub>
      </p>
    </div>
  );
}