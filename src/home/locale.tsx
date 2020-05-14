import React from 'react';
import { Config } from './config';
import { Menu } from 'antd';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { Export } from './types';

export const configs = [
  new Config(
    'React',
    [
      new Config('Hooks', [
        new Config(
          'useCallback',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as any as Export;
          }
        ),
        new Config(
          'useCallback1',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as any as Export;
          }
        ),
        new Config(
          'zuseCallback1',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as any as Export;
          }
        )
      ]),
      new Config('Hooks2', [
        new Config(
          'useCallback',
          async (): Promise<Export> => {
            return await import('@/demos/react/hooks/use-callback') as any as Export;
          }
        )
      ]),
      // new Config('“useCallback”与“普通函数”的区别'),
      // new Config('函数组件&渲染函数的区别')
    ]
  )
];

export function getDefaultConfig(cfgs = configs): Config | null {
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
}

export function fillOpenKeys(openKeys: string[], { key, parent }: Config): string[] {
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
}

export function getConfigByPath(path: string, cfgs = configs): Config | null {
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
}

export function renderMenuItem(onSelect: MenuItemProps['onClick'], cfgs = configs): React.ReactElement[] {
  const { Item, SubMenu } = Menu;

  return (
    cfgs
      .slice()
      .sort(({ isLeaf: isLeaf1, name: name1 }: Config, { isLeaf: isLeaf2, name: name2 }: Config): number => {
        if (isLeaf1) {
          if (!isLeaf2) {
            return 1;
          }
        }
        else if (isLeaf2) {
          return -1;
        }

        return name1.toLowerCase() > name2.toLowerCase() ? 1 : -1;
      })
      .map(({ isLeaf, name, key, configs }: Config): React.ReactElement => {
        if (isLeaf) {
          return (
            <Item key={key} onClick={onSelect}>{name}</Item>
          );
        }

        return (
          <SubMenu key={key} title={name}>
            {renderMenuItem(onSelect, configs)}
          </SubMenu>
        );
      })
  );
}