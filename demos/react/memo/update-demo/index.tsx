import React, { useState, useCallback } from 'react';
import { ChildDemoWithMemo } from './child';
import { ChildDemoProps } from './types';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function UpdateDemo(): React.ReactElement {
  let getContentInlineFunc: ChildDemoProps['getContent'];
  const [date, setDate] = useState(new Date());
  const times = useUpdateTimes();

  const onButtonClick = (): void => {
    setDate(
      new Date()
    );
  };

  const getContent = useCallback(
    getContentInlineFunc = (): number => {
      return times;
    },
    [date]
  );

  return (
    <div>
      <p>
        <Button onClick={onButtonClick}>点击刷新 <span>date</span></Button>
      </p>
      <hr />
      <ChildDemoWithMemo
        title={
          <>
            <span>React.memo</span> + useCallback(..., [date])
          </>
        }
        date={date}
        getContent={getContent}
      />
      <hr />
      <ChildDemoWithMemo
        title={
          <>React.memo + <span>内联函数</span></>
        }
        date={date}
        getContent={getContentInlineFunc}
      />
      <hr />
      <ChildDemoWithMemo
        title={
          <>
            useCallback(..., [date]) <del>+ React.memo</del> 
          </>
        }
        date={date}
        getContent={getContent}
      />
    </div>
  );
}