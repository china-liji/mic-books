import React, { useEffect, useState, ReactElement } from 'react';
import { useStyles } from './use-styles';
import { PreviewerProps } from './types';
import { Layout } from 'antd';
import { Title } from '../title';
import { Export } from '@/src/config/types';
import { getMarkdownRenderers, Markdown } from './locale';
import { Suspense } from '@/src/components/suspense';
import { Loader } from '@/src/components/loader';

export function Previwer({ config }: PreviewerProps): ReactElement {
  const className = useStyles();
  const { title } = config;
  const { Content } = Layout;
  const [loader, setLoader] = useState(null as Promise<ReactElement> | null);

  useEffect((): void => {
    setLoader(
      config.importer!().then((expo: Export): ReactElement => {
        document.querySelector(`.${useStyles.originalClassName as string}`)!.scrollTop = 0;

        return (
          <Suspense>
            <Markdown source={expo.default} renderers={getMarkdownRenderers(expo)} />
          </Suspense>
        );
      })
    );
  }, [config]);

  return (
    <Layout className={className}>
      <Title>{title}</Title>
      <Content>
        <Loader loader={loader} />
      </Content>
    </Layout>
  );
}