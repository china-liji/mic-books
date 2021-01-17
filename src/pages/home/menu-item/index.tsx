import React, { useContext, useEffect } from 'react';
import { Menu } from 'antd';
import { MenuItemProps } from './types';
import { Link, useParams } from 'react-router-dom';
import { homePageContext } from '../locale';
import { useMenuItemStyles } from './use-styles';
import { MenuItemTags } from '../menu-item-tags';
import { scrollIntoViewIfNeed } from './locale';

export function MenuItem({ config, eventKey, selectedKeys, onItemSelected, onItemUnselected, ...props }: MenuItemProps): React.ReactElement {
  const { title, tags, pathname } = config;
  const key = (useParams()[0] as string || '').toLocaleLowerCase();
  const { Item } = Menu;
  const { setConfig } = useContext(homePageContext);
  const matchedHtmlTag = /^\s*<\s*([\w.$_]+)\s*\/>\s*$/.exec(title);

  eventKey = pathname;

  useEffect((): void => {
    if (key !== pathname) {
      if (selectedKeys && selectedKeys[0] === pathname) {
        onItemUnselected(pathname);
      }

      return;
    }

    onItemSelected(pathname);
    setConfig(config);
    scrollIntoViewIfNeed(pathname);
  }, [key, pathname]);

  return (
    <Item className={useMenuItemStyles()} data-path={pathname} eventKey={eventKey} data-html-tag={!!matchedHtmlTag} {...props}>
      <Link to={`/${pathname}`}>
        <q>{matchedHtmlTag ? matchedHtmlTag[1] : title}</q>
        <MenuItemTags tags={tags} />
      </Link>
    </Item>
  );
}