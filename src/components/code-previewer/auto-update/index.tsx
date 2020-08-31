import React, { useState, useEffect, useContext } from 'react';
import { AutoUpdateProps } from './types';
import { useAutoUpdateStyles } from './use-styles';
import { BlockComponent } from 'mic-global';
import { pageContext } from '../../page/locale';
import { InlineDemo } from '../../inline-demo';

export function AutoUpdate({ demo, className, ...props }: AutoUpdateProps): React.ReactElement {
  const [times, setTimes] = useState(1);
  const { language } = useContext(pageContext);

  useEffect((): VoidFunction => {
    const time = setTimeout((): void => {
      // 刷新组件
      setTimes(times + 1);
    }, 1000);

    return (): void => {
      // 移除定时器
      clearTimeout(time);
    };
  }, [times]);

  return (
    <BlockComponent className={useAutoUpdateStyles(className)} {...props}>
      <p>{language?.previewer.autoUpdate}</p>
      <InlineDemo demo={demo} />
    </BlockComponent>
  );
}