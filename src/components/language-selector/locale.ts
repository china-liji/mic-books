import { RadioGroupProps } from 'antd/lib/radio';
import { LanguageType, Language } from '@/src/language/types';

export const getLanguageOptions = (language: Language): RadioGroupProps['options']  => {
  return [{
    value: LanguageType.CN,
    label: language.common.language.zhCN,
  }, {
    value: LanguageType.EN,
    label: language.common.language.enUs,
  }];
};