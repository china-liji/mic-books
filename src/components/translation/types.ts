import { InlineComponentProps } from 'mic-global';
import { Language } from '@/src/language/types';

export interface TranslationProps extends InlineComponentProps {
  onTranslate(language: Language): string;
}