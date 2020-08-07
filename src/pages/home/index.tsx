import React, { useState } from 'react';
import { Previwer } from './previewer';
import { useStyles } from './use-styles';
import { Menu } from './menu';
import { context } from './locale';
import { Page } from '@/src/components/page';
import { LanguageSelector } from '@/src/components/language-selector';
import { DocLoader } from './types';

export function Home(): React.ReactElement | null {
  const [title, setTitle] = useState('');
  const [docLoader, setDocLoader] = useState(null as DocLoader | null);

  return (
    <context.Provider value={{
      title,
      setTitle,
      docLoader,
      setDocLoader,
    }}>
      <Page className={useStyles()}>
        <Menu />
        <Previwer />
        <LanguageSelector />
      </Page>
    </context.Provider>
  );
}