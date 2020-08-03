import React, { useMemo } from 'react';
import { Previwer } from './previewer';
import { useStyles } from './use-styles';
import { Menu } from './menu';
import { Config } from '../../config';
import { getDefaultConfig, getConfigByPath } from './locale';
import { useParams, useHistory } from 'react-router-dom';
import { Page } from '@/src/components/page';
import { LanguageSelector } from '@/src/components/language-selector';

export function Home(): React.ReactElement | null {
  const history = useHistory();
  const key = useParams()[0] as string || '';

  const config = useMemo((): Config => {
    let config = getConfigByPath(key);

    if (!config) {
      config = getDefaultConfig() as Config;

      history.replace(`/${config.key}`);
    }

    return config;
  }, [key]);

  return (
    <Page className={useStyles()}>
      <Menu config={config} />
      <Previwer config={config} />
      <LanguageSelector />
    </Page>
  );
}