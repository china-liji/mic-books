import React from 'react';
import { Demo } from '@/src/components/code-previewer/demo';
import { CodePreviewer } from '@/src/components/code-previewer';
import { PreviewerType, MarkdownRendererCodeParameter, MarkdownRenderers } from './types';
import { Inspector, InspectorProps } from 'mic-inspector';
import { Export } from '../types';

export const { RegExp } = window;

export const Markdown = React.lazy((): Promise<typeof import('react-markdown')> => {
  return import('react-markdown');
});

export const getMarkdownRenderers = (expo: Export): MarkdownRenderers => {
  return {
    code({ value, language }: MarkdownRendererCodeParameter): React.ReactElement {
      return renderCodePreviewer(expo, value, language);
    },
  };
};

export const extractParamater = (value: string, type: string): string => {
  return (new RegExp(`^\\s*${type}\\s*\\(\\s*(\\w+)\\s*\\)\\s*;*\\s*$`).exec(value) || ['', ''])[1];
};

export const renderCodePreviewer = (expo?: Export, value = '', language = ''): React.ReactElement => {
  if (language === PreviewerType.Demo) {
    const param = extractParamater(value, 'import');

    if (param && expo) {
      const demo = expo[param];

      if (demo && demo instanceof Demo) {
        return <CodePreviewer demo={demo} language={language} />;
      }
    }
  }
  else if (language === PreviewerType.Inspector) {
    const param = extractParamater(value, 'inspect');

    if (param && expo && expo[param]) {
      return <Inspector {...expo[param] as InspectorProps} />;
    }
  }

  return <CodePreviewer language={language}>{value}</CodePreviewer>;
};