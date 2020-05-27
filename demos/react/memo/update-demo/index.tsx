import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';
import { ChildDemo, ChildDemoWithMemo } from './child';
import { ChildDemoProps, Props } from './types';
import { useDemoStyles } from '@/demos/use-demo-styles';

export function UpdateDemo({ times }: Props): React.ReactElement {
  let getContentInlineFunc: ChildDemoProps['getContent'];
  const [date, setDate] = useState(new Date());
  const { demo } = useDemoStyles();
  const { Sider, Content } = Layout;

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
    <div className={demo}>
      <p>
        <button onClick={onButtonClick}>点击刷新 <span>date</span></button>
      </p>
      <hr />
      <Layout>
        <Sider width='30%'>
          <p>
            <span>React.memo</span> + useCallback(..., [date])
          </p>
          <ChildDemoWithMemo date={date} getContent={getContent} />
        </Sider>
        <Content>
          <p>React.memo + <span>内联函数</span></p>
          <ChildDemoWithMemo date={date} getContent={getContentInlineFunc} />
        </Content>
        <Sider width='30%'>
          <p>
            useCallback(..., [date]) <del>+ React.memo</del> 
          </p>
          <ChildDemo date={date} getContent={getContent} />
        </Sider>
      </Layout>
    </div>
  );
}