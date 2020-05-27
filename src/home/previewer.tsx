import React, { useEffect, useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useStyles } from './use-styles';
import { PreviewerProps, Export, MarkdownRenderers } from './types';
import { Layout } from 'antd';
import { CodePreviewer } from '../common/code-previewer';
import { Title } from './title';
import { Demo } from '../common/code-previewer/demo';

export function Previwer({ config }: PreviewerProps): React.ReactElement {
  const { title } = config;
  const { previewer } = useStyles();
  const { Content } = Layout;
  const [expo, setExport] = useState(null as Export);

  const renderers = useMemo((): MarkdownRenderers => {
    return {
      code({ value = '', language }: Parameters<MarkdownRenderers['code']>[0]): React.ReactElement {
        const result = /^\s*import\s*\(\s*(\w+)\s*\)\s*;*\s*$/.exec(value);

        if (result) {
          const demo = expo[result[1]];

          if (demo && demo instanceof Demo) {
            return <CodePreviewer demo={demo} language={language} />;
          }
        }

        return <CodePreviewer language={language}>{value}</CodePreviewer>;
      },
    };
  }, [expo]);

  useEffect((): void => {
    void config.importer().then((expo: Export): void => {
      setExport(expo);
    });
  }, [config]);

  return (
    <Layout className={previewer}>
      <Title>{title}</Title>
      <Content>
        { expo ? <ReactMarkdown source={expo.default} renderers={renderers} /> : null }
      </Content>
    </Layout>
  );
}