import React, { useContext } from 'react';
import { usePreviewerToolsStyles } from './use-styles';
import { LanguageSelector } from '@/src/components/language-selector';
import { PPTButtonGroup } from '../ppt-button-group';
import { BlockComponent } from 'mic-global';
import { previewerContext } from '../previewer/locale';
import { PreviewerMode } from '../previewer/types';

export function PreviewerTools(): React.ReactElement {
  const { mode } = useContext(previewerContext);

  return (
    <BlockComponent className={usePreviewerToolsStyles()} data-fullscreen={mode === PreviewerMode.Ppt}>
      <PPTButtonGroup />
      <LanguageSelector />
    </BlockComponent>
  );
}