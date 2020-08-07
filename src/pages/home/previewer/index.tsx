import React, { useEffect, useState, ReactElement, useContext } from 'react';
import { useStyles } from './use-styles';
import { Layout } from 'antd';
import { Title } from '../title';
import { getMarkdownRenderers, Markdown } from './locale';
import { Suspense } from '@/src/components/suspense';
import { Loader } from '@/src/components/loader';
import { pageContext } from '@/src/components/page/locale';
import { context } from '../locale';
import { Export } from '../types';

export function Previwer(): ReactElement {
  const { language } = useContext(pageContext);
  const className = useStyles(language);
  const { config } = useContext(context);
  const { Content } = Layout;
  const [hasError, setHasError] = useState(false);
  const [loader, setLoader] = useState(null as Promise<React.ReactNode> | null);

  useEffect((): void => {
    if (!config) {
      setHasError(true);
      setLoader(null);
      return;
    }

    setHasError(false);

    setLoader(
      config
        .importer()
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
  }, [config?.path]);

  return (
    <Layout className={className}>
      <Title>{config?.title}</Title>
      <Content data-error={hasError}>
        <Loader loader={loader} />
      </Content>
    </Layout>
  );
}