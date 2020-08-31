import React, { useState, useEffect } from 'react';
import { Previwer } from './previewer';
import { useHomeStyles } from './use-styles';
import { Menu } from './menu';
import { homePageContext } from './locale';
import { Page } from '@/src/components/page';
import { Config } from './menu-config';

export function Home(): React.ReactElement | null {
  const [config, setConfig] = useState(null as Config | null);
  const { Provider } = homePageContext;

  useEffect((): void => {
    const { title, group } = config || {};

    document.title = `${title ? `${title} - ${group as string} | `: ''}mic-books`;
  }, [config?.path]);

  return (
    <Provider value={{
      config,
      setConfig,
    }}>
      <Page className={useHomeStyles()}>
        <Menu />
        <Previwer />
      </Page>
    </Provider>
  );
}