import React, {} from 'react';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Menu } from 'antd';
import { Config } from '@/src/config';
import { config } from '@/demos/config';
import { Link } from 'react-router-dom';

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

export const renderMenuItem = (cfg = config): React.ReactElement[] => {
  const { Item, SubMenu } = Menu;

  return (
    cfg
      .slice()
      .map(({ isLeaf, key, title, configs }: Config): React.ReactElement => {
        if (isLeaf) {
          return (
            <Item key={key} data-key={key}>
              <Link to={`/${key}`}>{title}</Link>
            </Item>
          );
        }

        return (
          <SubMenu key={key} title={title}>
            {renderMenuItem(configs)}
          </SubMenu>
        );
      })
  );
};