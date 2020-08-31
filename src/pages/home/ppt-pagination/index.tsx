import React, { useContext } from 'react';
import { Layout, Button } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useKeyboardEvents } from './locale';
import { previewerContext } from '../previewer/locale';
import { pageContext } from '@/src/components/page/locale';
import { usePptPaginationStyles } from './use-styles';

export function PptPagination(): React.ReactElement {
  const { Footer } = Layout;
  const { mode, maxPage, page, setPage } = useContext(previewerContext);
  const { language } = useContext(pageContext);

  const prevPage = (): void => {
    if (page === 0) {
      return;
    }

    setPage(page - 1);
  };

  const nextPage = (): void => {
    if (page >= maxPage) {
      return;
    }

    setPage(page + 1);
  };

  useKeyboardEvents(mode, prevPage, nextPage);

  return (
    <Footer className={usePptPaginationStyles()}>
      <Button icon={<CaretLeftOutlined />} disabled={page === 0} onClick={prevPage} title={language!.previewer.page.next} />
      <Button icon={<CaretRightOutlined />} disabled={page >= maxPage} onClick={nextPage} title={language!.previewer.page.next} />
    </Footer>
  );
}