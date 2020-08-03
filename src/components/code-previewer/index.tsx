import React, { useState, useContext } from 'react';
import { useStyles } from './use-styles';
import { CodePreviewerProps } from './types';
import { SyntaxHighlighter } from './locale';
import { Tabs, Button, Tooltip } from 'antd';
import { File } from './file';
import { AutoUpdate } from './auto-update';
import { ReloadOutlined } from '@ant-design/icons';
import { AutoUpdateDemo } from './auto-update/types';
import { BlockComponent } from 'mic-global';
import { pageContext } from '../page/locale';
import { Suspense } from '../suspense';

export function CodePreviewer({ className, demo, language, children, ...props }: CodePreviewerProps): React.ReactElement {
  const [demoKey, setDemoKey] = useState(0);
  const { TabPane } = Tabs;
  const { language: languageTranslation } = useContext(pageContext);

  const onClickReloadButton = (): void => {
    setDemoKey(demoKey + 1);
  };

  return (
    <BlockComponent className={useStyles(className)} {...props}>
      {
        demo ?
          (
            <Tabs defaultActiveKey='demo' type='card'>
              {
                demo.component ?
                  <TabPane tab={languageTranslation?.previewer.demo} key='demo'>
                    <p data-clean={demo.cleanStyle}>
                      <Tooltip title={languageTranslation?.previewer.reload}>
                        <Button
                          type='primary'
                          size='small'
                          shape='circle'
                          icon={<ReloadOutlined />}
                          onClick={onClickReloadButton}
                        />
                      </Tooltip>
                    </p>
                    {demo.autoUpdate ? <AutoUpdate key={demoKey} demo={demo as AutoUpdateDemo} /> : <demo.component key={demoKey} />}
                  </TabPane> :
                  null
              }
              {
                demo.files.map(({ name, source, type }: File, index: number): React.ReactElement => {
                  return (
                    <TabPane tab={name} key={`${index}`}>
                      <Suspense data-language={type}>
                        <SyntaxHighlighter language={type}>{source}</SyntaxHighlighter>
                      </Suspense>
                    </TabPane>
                  );
                })
              }
            </Tabs>
          ) :
          <Suspense data-language={language}>
            <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
          </Suspense>
      }
    </BlockComponent>
  );
}