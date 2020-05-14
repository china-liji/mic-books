import React from 'react';
import { useStyles } from './use-styles';
import { CodePreviewerProps } from './types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Tabs } from 'antd';
import { File } from './file';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AutoUpdate } from './auto-update';

export function CodePreviewer({ className = '', demo, language, children, ...props }: CodePreviewerProps): React.ReactElement {
  const { codePreviewer } = useStyles();
  const { TabPane } = Tabs;

  return (
    <div className={`${codePreviewer} ${className}`} {...props}>
      {
        demo ?
          (
            <Tabs defaultActiveKey='demo' type='card'>
              {
                demo.component ?
                  <TabPane tab='实例效果' key='demo' data-demo>
                    {demo.autoUpdate ? <AutoUpdate demo={demo} /> : <demo.component />}
                  </TabPane> :
                  null
              }
              {
                demo.files.map(({ name, source, type }: File, index: number): React.ReactElement => {
                  return (
                    <TabPane tab={name} key={index + ''}>
                      <SyntaxHighlighter language={type} style={atomOneLight}>{source}</SyntaxHighlighter>
                    </TabPane>
                  );
                })
              }
            </Tabs>
          ) :
          <SyntaxHighlighter language={language} style={atomOneLight}>{children}</SyntaxHighlighter>
      }
    </div>
    
  );
}