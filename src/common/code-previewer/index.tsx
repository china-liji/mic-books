import React, { useState } from 'react';
import { useStyles } from './use-styles';
import { CodePreviewerProps, SyntaxHighlighterStyle } from './types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tabs, Button, Tooltip } from 'antd';
import { File } from './file';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AutoUpdate } from './auto-update';
import { ReloadOutlined } from '@ant-design/icons';

export function CodePreviewer({ className = '', demo, language, children, ...props }: CodePreviewerProps): React.ReactElement {
  const [demoKey, setDemoKey] = useState(0);
  const { codePreviewer } = useStyles();
  const { TabPane } = Tabs;

  const onClickReloadButton = (): void => {
    setDemoKey(demoKey + 1);
  };

  return (
    <div className={`${codePreviewer} ${className}`} {...props}>
      {
        demo ?
          (
            <Tabs defaultActiveKey='demo' type='card'>
              {
                demo.component ?
                  <TabPane tab='实例效果' key='demo' data-demo>
                    <p>
                      <Tooltip title='重新加载组件'>
                        <Button
                          type='primary'
                          size='small'
                          shape='circle'
                          icon={<ReloadOutlined />}
                          onClick={onClickReloadButton}
                        />
                      </Tooltip>
                    </p>
                    {demo.autoUpdate ? <AutoUpdate key={demoKey} demo={demo} /> : <demo.component key={demoKey} />}
                  </TabPane> :
                  null
              }
              {
                demo.files.map(({ name, source, type }: File, index: number): React.ReactElement => {
                  return (
                    <TabPane tab={name} key={`${index}`}>
                      <SyntaxHighlighter language={type} style={atomOneLight as SyntaxHighlighterStyle}>{source}</SyntaxHighlighter>
                    </TabPane>
                  );
                })
              }
            </Tabs>
          ) :
          <SyntaxHighlighter language={language} style={atomOneLight as SyntaxHighlighterStyle}>{children}</SyntaxHighlighter>
      }
    </div>
    
  );
}