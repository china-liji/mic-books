import React from 'react';
import { Demo } from '@/src/components/code-previewer/demo';
import { CodePreviewer } from '@/src/components/code-previewer';
import { PreviewerType, MarkdownRendererCodeParameter, MarkdownRenderers } from './types';
import { Inspector, InspectorProps } from 'mic-inspector';
import { Export } from '../types';
import { InlineDemo } from '@/src/components/inline-demo';

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
  demoBlock:
  {
    switch (language) {
      case PreviewerType.Demo:
      case PreviewerType.InlineDemo:
        break;
  
      default:
        break demoBlock;
    }

    const param = extractParamater(value, 'import');

    if (!param || !expo) {
      break demoBlock;
    }

    const demo = expo[param];

    if (!demo || demo instanceof Demo === false) {
      break demoBlock;
    }

    if (language === PreviewerType.InlineDemo) {
      return <InlineDemo demo={demo} />;
    }

    return <CodePreviewer demo={demo} language={language} />;
  }
  
  return <CodePreviewer language={language}>{value}</CodePreviewer>;
};