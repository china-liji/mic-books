import React from 'react';
import { Menu } from 'antd';
import { MenuItemGroupProps } from './types';
import { MenuItemTags } from '../menu-item-tags';
import { useMenuItemGroupStyles } from './use-styles';

export function MenuItemGroup({ config, title, ...props }: MenuItemGroupProps): React.ReactElement {
  const { group, groupTags } = config;
  const { ItemGroup } = Menu;

  void title;

  return (
    <ItemGroup
      className={useMenuItemGroupStyles()}
      title={
        <>
          {group}
          <MenuItemTags tags={groupTags} />
        </>
      }
      {...props}
    />
  );
}