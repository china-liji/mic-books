import React, { useContext, useEffect } from 'react';
import { Menu } from 'antd';
import { MenuItemProps } from './types';
import { Link, useParams } from 'react-router-dom';
import { context } from '../locale';
import { useStyles } from './use-styles';
import { renderTags } from './locale';
import { pageContext } from '@/src/components/page/locale';

export function MenuItem({ config, eventKey, selectedKeys, onItemSelected, onItemUnselected, ...props }: MenuItemProps): React.ReactElement {
  let { path } = config;
  const { title } = config;
  const key = (useParams()[0] as string || '').toLocaleLowerCase();
  const lowerCasePath = path.toLocaleLowerCase();
  const { Item } = Menu;
  const { setConfig } = useContext(context);
  const { language } = useContext(pageContext);
  const matchedHtmlTag = /^\s*<\s*([\w.$_]+)\s*\/>\s*$/.exec(title);

  path = path.toLocaleLowerCase();
  eventKey = path;

  useEffect((): void => {
    if (key !== lowerCasePath) {
      if (selectedKeys && selectedKeys[0] === path) {
        onItemUnselected(path);
      }

      return;
    }

    onItemSelected(path);
    setConfig(config);
  }, [key, path]);

  return (
    <Item className={useStyles()} eventKey={eventKey} data-html-tag={!!matchedHtmlTag} {...props}>
      <Link to={`/${lowerCasePath}`}>
        <q>{matchedHtmlTag ? matchedHtmlTag[1] : title}</q>
        <span>{renderTags(config, language!)}</span>
      </Link>
    </Item>
  );
}