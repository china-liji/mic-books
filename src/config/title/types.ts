import { InlineComponentProps } from 'mic-global';
import { Language } from '@/src/language/types';

export interface TitleProps extends InlineComponentProps {
  onRenderTitle(language: Language): string;
}