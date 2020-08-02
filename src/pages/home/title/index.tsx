import React from 'react';
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';
import { useStyles } from './use-styles';

export function Title(props: BasicProps): React.ReactElement {
  return <Layout.Header className={useStyles()} {...props} />;
}