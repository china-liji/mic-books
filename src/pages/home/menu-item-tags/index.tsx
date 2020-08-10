import React, { useContext } from 'react';
import { InlineComponent } from 'mic-global';
import { renderTags } from './locale';
import { MenuItemTagsProps } from './types';
import { pageContext } from '@/src/components/page/locale';
import { useStyles } from './use-styles';

export function MenuItemTags({ tags }: MenuItemTagsProps): React.ReactElement {
  const { language } = useContext(pageContext);

  return (
    <InlineComponent className={useStyles()}>
      {renderTags(tags, language!)}
    </InlineComponent>
  );
}