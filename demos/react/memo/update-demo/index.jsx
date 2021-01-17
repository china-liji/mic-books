import React, { useState, useCallback } from 'react';
import { ChildDemoWithMemo, ChildDemo } from './child';
import useUpdateTimes from '@/demos/hooks/use-update-times';
import { Button } from 'antd';

export function UpdateDemo() {
  let getTimesInline;
  const [date, setDate] = useState(new Date());
  const times = useUpdateTimes();

  const onButtonClick = () => {
    setDate(
      new Date()
    );
  };

  const getTimes = useCallback(
    getTimesInline = () => {
      return times;
    },
    [date]
  );

  return (
    <div>
      <blockquote>
        <h6>
          const [date, setDate] = useState(new Date());
        </h6>
        <hr data-mini />
        <p>
          date: <span>{date.toString()}</span>
        </p>
        <p>
          getTimesInline(): <span>{getTimesInline()}</span>
        </p>
        <hr data-mini />
        <p>
          <Button onClick={onButtonClick}>setDate(new Date())</Button>
          <sub>点击刷新 date</sub>
        </p>
      </blockquote>
      <hr />
      <blockquote>
        <h6>
          <span>React.memo</span> + method
          <sub data-sep='='>
            <span>useCallback</span>(getTimesInline, [date])
          </sub>
        </h6>
        <hr data-mini />
        <ChildDemoWithMemo method={getTimes} />
      </blockquote>
      <hr />
      <blockquote>
        <h6>
          <span>React.memo</span> + method
          <sub data-sep='='>
            <span>
              getTimesInline
            </span>
          </sub>
        </h6>
        <hr data-mini />
        <ChildDemoWithMemo method={getTimesInline} />
      </blockquote>
      <hr />
      <blockquote>
        <h6>
          <del>React.memo +</del>&nbsp;method
          <sub data-sep='='>
            <span>useCallback</span>(getTimesInline, [date])
          </sub>
        </h6>
        <hr data-mini />
        <ChildDemo method={getTimes} />
      </blockquote>
      <hr />
      <blockquote>
        <h6>
          <del>React.memo +</del>&nbsp;method
          <sub data-sep='='>
            getTimesInline
          </sub>
        </h6>
        <hr data-mini />
        <ChildDemo method={getTimesInline} />
      </blockquote>
    </div>
  );
}