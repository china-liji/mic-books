import React, { useContext } from 'react';
import { InlineComponent } from 'mic-global';
import { TranslationProps } from './types';
import { pageContext } from '@/src/components/page/locale';
import { Language } from '@/src/language/types';

export function Translation({ onTranslate }: TranslationProps): React.ReactElement {
  const { language } = useContext(pageContext);

  return <InlineComponent>{onTranslate(language as Language)}</InlineComponent>;
}