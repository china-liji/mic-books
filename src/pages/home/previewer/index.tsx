import React, { ReactElement, useContext, useState } from 'react';
import { usePreviewerStyles } from './use-styles';
import { Layout } from 'antd';
import { PreviewerTitle } from '../previewer-title';
import { useLoader, previewerContext, usePpt, usePage } from './locale';
import { Loader } from '@/src/components/loader';
import { pageContext } from '@/src/components/page/locale';
import { homePageContext } from '../locale';
import { PreviewerMode } from './types';
import { PptPagination } from '../ppt-pagination';

export function Previwer(): ReactElement {
  const { Content } = Layout;
  const { Provider } = previewerContext;
  const { language } = useContext(pageContext);
  const { config } = useContext(homePageContext);
  const [mode, setMode] = useState(PreviewerMode.Normal);
  const [ready, hasError, loader] = useLoader(config);
  const [maxPage, page, setPage] = usePage(mode);

  usePpt(page, mode, setMode);

  return (
    <Provider value={{
      page,
      maxPage,
      mode,
      ready,
      setMode,
      setPage,
    }}>
      <Layout className={usePreviewerStyles(language)} data-mode={mode} data-current={page}>
        <PreviewerTitle>{config?.title}</PreviewerTitle>
        <Content data-error={hasError}>
          <Loader loader={loader} />
        </Content>
        <PptPagination />
      </Layout>
    </Provider>
  );
}