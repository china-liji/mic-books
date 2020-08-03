import React, { useEffect, useState, ReactElement, useContext } from 'react';
import { useStyles } from './use-styles';
import { PreviewerProps } from './types';
import { Layout } from 'antd';
import { Title } from '../title';
import { Export } from '@/src/config/types';
import { getMarkdownRenderers, Markdown } from './locale';
import { Suspense } from '@/src/components/suspense';
import { Loader } from '@/src/components/loader';
import { pageContext } from '@/src/components/page/locale';

export function Previwer({ config }: PreviewerProps): ReactElement {
  const { language } = useContext(pageContext);
  const className = useStyles(language);
  const { title } = config;
  const { Content } = Layout;
  const [hasError, setHasError] = useState(false);
  const [loader, setLoader] = useState(null as Promise<React.ReactNode> | null);

  useEffect((): void => {
    setHasError(false);

    setLoader(
      config
        .importer!()
        .then((expo: Export): ReactElement => {
          document.querySelector(`.${useStyles.originalClassName as string}`)!.scrollTop = 0;

          return (
            <Suspense>
              <Markdown source={expo.default} renderers={getMarkdownRenderers(expo)} />
            </Suspense>
          );
        })
        .catch((): null => {
          setHasError(true);
          return null;
        })
    );
  }, [config]);

  return (
    <Layout className={className}>
      <Title>{title}</Title>
      <Content data-error={hasError}>
        <Loader loader={loader} />
      </Content>
    </Layout>
  );
}