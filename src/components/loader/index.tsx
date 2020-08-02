import React, { useState, useEffect, ReactNode } from 'react';
import { Spin } from 'antd';
import { useStyles } from './use-styles';
import { LoaderProps } from './types';
import { BlockComponent } from 'mic-global';

export function Loader({ className, children, loader, ...props }: LoaderProps): React.ReactElement {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null as ReactNode);

  useEffect((): void => {
    if (!loader) {
      return;
    }

    setLoading(true);
    setContent(null);

    loader
      .then((node: ReactNode): ReactNode => {
        setContent(node);
        return node;
      })
      .finally((): void => {
        setLoading(false);
      });
  }, [loader]);

  return (
    <BlockComponent className={useStyles(className)} {...props}>
      { loading ? <Spin /> : content || children }
    </BlockComponent>
  );
}