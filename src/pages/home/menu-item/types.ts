import { MenuItemProps as AntdMenuItemProps } from 'antd/lib/menu/MenuItem';
import { Config } from '../menu/config';

export enum PrimaryTag {
  Git = 'GitHub',

  Knowledge = 'knowledge',

  Mit = 'MIT',

  Npm = 'NPM',

  Web = 'web',

  Vs = 'vs'
}

export interface MenuItemProps extends AntdMenuItemProps {
  children?: never[];

  config: Config;

  onItemSelected(path: string): void;

  onItemUnselected(path: string): void;
}