import React, { useState, useEffect, createContext } from 'react';
import { Demo } from '@/src/components/code-previewer/demo';
import { CodePreviewer } from '@/src/components/code-previewer';
import { PreviewerType, MarkdownRendererCodeParameter, MarkdownRenderers, Loader, PreviewerContext, PreviewerMode } from './types';
import { Export } from '../types';
import { InlineDemo } from '@/src/components/inline-demo';
import { usePreviewerStyles } from './use-styles';
import { Suspense } from '@/src/components/suspense';
import { Config } from '../menu-config';

export const { RegExp } = window;

export const pageAttr = 'data-page';

export const currentPageAttr = 'data-current-page';

export const previewerContext = createContext({} as PreviewerContext);

export const originalClassName = usePreviewerStyles.originalClassName as string;

export const selectorPrefix = `.${originalClassName} > .ant-layout-content > .loader > .suspense`;

export const pageSelector = [
  `.${originalClassName} > header`,
  `${selectorPrefix} > h1`,
  `${selectorPrefix} > h2`,
  `${selectorPrefix} > h3`,
  `${selectorPrefix} > h4`,
  `${selectorPrefix} > h5`,
  `${selectorPrefix} > h6`,
].join(',');

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

export const getContainer = (): HTMLElement => {
  return document.querySelector(`.${originalClassName}`) as HTMLElement;
};

export const togglePptAttributes = (isRemove = false, page: number): void => {
  const container = getContainer();
  const pageElements = container.querySelectorAll(pageSelector);

  container.querySelector(`[${currentPageAttr}]`)?.removeAttribute(currentPageAttr);

  pageElements.forEach((pageElement: HTMLElement, index: number): void => {
    if (index === page && !isRemove) {
      pageElement.setAttribute(currentPageAttr, '');
    }

    if (isRemove) {
      pageElement.removeAttribute(pageAttr);
      return;
    }

    pageElement.setAttribute(pageAttr, `${index}`);
  });
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

export const useLoader = (config: Config | null): [boolean, boolean, Loader] => {
  const [hasError, setHasError] = useState(false);
  const [loader, setLoader] = useState(null as Loader);
  const [ready, setReady] = useState(false);

  const onSuccess = (): void => {
    setReady(true);
  };

  useEffect((): void => {
    setReady(false);

    if (!config) {
      setHasError(true);
      setLoader(null);
      return;
    }

    setHasError(false);

    setLoader(
      config
        .importer()
        .then((expo: Export): React.ReactElement => {
          document.querySelector(`.${originalClassName}`)!.scrollTop = 0;

          return (
            <Suspense onSuccess={onSuccess}>
              <Markdown source={expo.default} renderers={getMarkdownRenderers(expo)} />
            </Suspense>
          );
        })
        .catch((): null => {
          setHasError(true);
          return null;
        })
    );
  }, [config?.path]);

  return [ready, hasError, loader];
};

export const useFullscreen = (isPptMode: boolean, setMode: PreviewerContext['setMode']): void => {
  useEffect((): void => {
    if (isPptMode) {
      void getContainer().requestFullscreen();
    }
  }, [isPptMode]);

  useEffect((): void => {
    getContainer().addEventListener(
      'fullscreenchange',
      (): void => {
        if (document.fullscreen) {
          return;
        }

        setMode(PreviewerMode.Normal);
      }
    );
  }, []);
};

export const usePage = (config: Config | null, mode: PreviewerMode, ready: boolean): [number, number, PreviewerContext['setPage']] => {
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  useEffect((): void => {
    setPage(0);
    
    setMaxPage(
      mode === PreviewerMode.Ppt && ready ?
        getContainer().querySelectorAll(pageSelector).length - 1 :
        0
    );
  }, [mode, config?.path, ready]);

  useEffect((): void => {
    getContainer().scrollTop = 0;
  }, [page]);

  return [maxPage, page, setPage];
};

export const usePpt = (page: number, mode: PreviewerMode, setMode: PreviewerContext['setMode']): number => {
  const isPptMode = mode === PreviewerMode.Ppt;

  useFullscreen(isPptMode, setMode);

  useEffect((): VoidFunction => {
    togglePptAttributes(!isPptMode, page);

    return (): void => {
      togglePptAttributes(true, page);
    };
  }, [page, isPptMode]);

  return page;
};