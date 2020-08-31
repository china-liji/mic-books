import React from 'react';
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';
import { usePreviewerTitleStyles } from './use-styles';
import { PreviewerTools } from '../previewer-tools';

export function PreviewerTitle({ children, ...props }: BasicProps): React.ReactElement {
  return (
    <Layout.Header className={usePreviewerTitleStyles()} {...props}>
      <PreviewerTools />
      <p>{children}</p>
    </Layout.Header>
  );
}