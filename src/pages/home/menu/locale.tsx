import React, {} from 'react';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Menu } from 'antd';
import { Config } from '@/src/config';
import { config } from '@/demos/config';

export const fillOpenKeys = (openKeys: string[], { key, parent }: Config): string[] => {
  if (openKeys.indexOf(key) === -1) {
    openKeys.push(key);
  }

  while (parent) {
    const { key: k } = parent;

    if (openKeys.indexOf(k) === -1) {
      openKeys.push(k);
    }

    parent = parent.parent;
  }

  return openKeys.slice();
};

export const renderMenuItem = (onSelect: MenuItemProps['onClick'], cfg = config): React.ReactElement[] => {
  const { Item, SubMenu } = Menu;

  return (
    cfg
      .slice()
      .map(({ isLeaf, key, title, configs }: Config): React.ReactElement => {
        if (isLeaf) {
          return (
            <Item key={key} data-key={key} onClick={onSelect}>{title}</Item>
          );
        }

        return (
          <SubMenu key={key} title={title}>
            {renderMenuItem(onSelect, configs)}
          </SubMenu>
        );
      })
  );
};