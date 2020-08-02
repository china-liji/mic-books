import React, { useContext } from 'react';
import { InlineComponent } from 'mic-global';
import { TitleProps } from './types';
import { pageContext } from '@/src/components/page/locale';
import { Language } from '@/src/language/types';

export function Title({ onRenderTitle }: TitleProps): React.ReactElement {
  const { language } = useContext(pageContext);

  return <InlineComponent>{onRenderTitle(language as Language)}</InlineComponent>;
}