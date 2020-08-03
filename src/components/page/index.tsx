import React from 'react';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/lib/layout';
import { pageContext, useLanguage, useLanguageType } from './locale';

export function Page(props: LayoutProps): React.ReactElement {
  const [languageType, setLanguageType] = useLanguageType();
  const language = useLanguage(languageType);

  return (
    <pageContext.Provider
      value={{
        languageType,
        language,
        setLanguageType,
      }}
    >
      { language ? <Layout {...props} /> : null }
    </pageContext.Provider>
  );
}