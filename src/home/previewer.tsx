import React, { useEffect, useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { useStyles } from './use-styles';
import { PreviewerProps, Export } from './types';
import { Layout } from 'antd';
import { CodePreviewer } from '../common/code-previewer';
import { Title } from './title';
import { Demo } from '../common/code-previewer/demo';

export function Previwer({ config }: PreviewerProps): React.ReactElement {
  const { name } = config;
  const { previewer } = useStyles();
  const { Content } = Layout;
  const [expo, setExport] = useState(null as Export);

  const renderers = useMemo((): typeof ReactMarkdown['defaultProps']['renderers'] => {
    return {
      code({ value, language }): React.ReactElement {
        const result = value.match(/^\s*import\s*\(\s*(\w+)\s*\)\s*;*\s*$/);

        if (result) {
          const demo = expo[result[1]];

          if (demo && demo instanceof Demo) {
            return <CodePreviewer demo={demo} language={language} />;
          }
        }

        return <CodePreviewer language={language}>{value}</CodePreviewer>;
      }
    };
  }, [expo]);

  useEffect((): void => {
    config.importer().then((expo: Export) => {
      setExport(expo);
    });
  }, [config]);

  return (
    <Layout className={previewer}>
      <Title>{name}</Title>
      <Content>
        { expo ? <ReactMarkdown source={expo.default} renderers={renderers} /> : null }
      </Content>
    </Layout>
  );
}