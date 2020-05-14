import React from 'react';
import { Layout } from 'antd';
import { BasicProps } from 'antd/lib/layout/layout';
import { useStyles } from './use-styles';

export function Title({ className = '', ...props }: BasicProps): React.ReactElement {
  const { title } = useStyles();

  return <Layout.Header className={`${className} ${title}`} {...props} />
}