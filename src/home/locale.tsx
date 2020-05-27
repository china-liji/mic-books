import React from 'react';
import { Config } from './config';
import { Menu } from 'antd';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Export } from './types';

export const configs = [
  new Config(
    'Preface',
    async (): Promise<Export> => {
      return await import('@/demos/preface') as unknown as Export;
    },
    '前言',
  ),
  new Config(
    'React',
    [
      new Config('Hooks', [
        new Config(
          'useState',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-state') as unknown as Export;
          },
        ),
        new Config(
          'useCallback',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as unknown as Export;
          },
        ),
      ]),
      // new Config('“useCallback”与“普通函数”的区别'),
      // new Config('函数组件&渲染函数的区别')
    ]
  ),
];

export const getDefaultConfig = (cfgs = configs): Config | null => {
  for (const config of cfgs) {

    if (config.isLeaf) {
      return config;
    }

    const cfg = getDefaultConfig(config.configs);

    if (cfg) {
      return cfg;
    }
  }

  return null;
};

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

export const getConfigByPath = (path: string, cfgs = configs): Config | null => {
  for (const config of cfgs) {
    if (config.key === path) {
      return config;
    }

    const cfg = getConfigByPath(path, config.configs);

    if (cfg) {
      return cfg;
    }
  }

  return null;
};

export const renderMenuItem = (onSelect: MenuItemProps['onClick'], cfgs = configs): React.ReactElement[] => {
  const { Item, SubMenu } = Menu;

  return (
    cfgs
      .slice()
      .map(({ isLeaf, key, title, configs: cfgs }: Config): React.ReactElement => {
        if (isLeaf) {
          return (
            <Item key={key} onClick={onSelect}>{title}</Item>
          );
        }

        return (
          <SubMenu key={key} title={title}>
            {renderMenuItem(onSelect, cfgs)}
          </SubMenu>
        );
      })
  );
};