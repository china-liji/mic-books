import React, { useState, useEffect } from 'react';
import { Previwer } from './previewer';
import { useStyles } from './use-styles';
import { Menu } from './menu';
import { context } from './locale';
import { Page } from '@/src/components/page';
import { LanguageSelector } from '@/src/components/language-selector';
import { Config } from './menu/config';

export function Home(): React.ReactElement | null {
  const [config, setConfig] = useState(null as Config | null);

  useEffect((): void => {
    const { title, group } = config || {};

    document.title = `${title ? `${title} - ${group as string} | `: ''}mic-books`;
  }, [config?.path]);

  return (
    <context.Provider value={{
      config,
      setConfig,
    }}>
      <Page className={useStyles()}>
        <Menu />
        <Previwer />
        <LanguageSelector />
      </Page>
    </context.Provider>
  );
}