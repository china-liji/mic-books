import { Config } from '../menu-config';
import { MenuItemGroupProps as AntdMenuItemGroupProps } from 'antd/lib/menu';

export interface MenuItemGroupProps extends React.PropsWithChildren<AntdMenuItemGroupProps> {
  config: Config;
}