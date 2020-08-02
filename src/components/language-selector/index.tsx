import React, { useContext } from 'react';
import { Radio } from 'antd';
import { pageContext } from '../page/locale';
import { getLanguageOptions } from './locale';
import { Language, LanguageType } from '@/src/language/types';
import { RadioChangeEvent } from 'antd/lib/radio';
import { BlockComponent, BlockComponentProps } from 'mic-global';
import { useStyles } from './use-styles';

export function LanguageSelector({ className, ...props }: BlockComponentProps): React.ReactElement {
  const { language, languageType, setLanguageType } = useContext(pageContext);

  const onChange = (e: RadioChangeEvent): void => {
    setLanguageType(e.target.value as LanguageType);
  };

  return (
    <BlockComponent className={useStyles(className)} {...props}>
      <Radio.Group
        size='small'
        options={getLanguageOptions(language as Language)}
        value={languageType}
        onChange={onChange}
        optionType='button'
      />
    </BlockComponent>
  );
}