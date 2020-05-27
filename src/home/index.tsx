import React, { useCallback, useMemo, useRef, memo } from 'react';
import { Previwer } from './previewer';
import { useStyles } from './use-styles';
import { Menu } from './menu';
import { Layout } from 'antd';
import { Config } from './config';
import { getDefaultConfig, getConfigByPath } from './locale';
import { useParams, useHistory } from 'react-router-dom';
import { RouteParams } from './types';

export function Home(): React.ReactElement | null {
  const { home } = useStyles();
  const history = useHistory();
  const key = useParams<RouteParams>()[0] || '';

  const config = useMemo((): Config => {
    let config = getConfigByPath(key);
    
    if (!config) {
      config = getDefaultConfig();

      history.replace(`/${config.key}`);
    }

    return config;
  }, [key]);

  const menu = useRef(
    memo(Menu)
  );

  const onDirChange = useCallback(({ key }: Config): void => {
    history.push(`/${key}`);
  }, []);

  return (
    <Layout className={home}>
      <menu.current config={config} onChange={onDirChange} />
      <Previwer config={config} />
    </Layout>
  );
}