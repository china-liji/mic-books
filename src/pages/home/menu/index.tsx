import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Menu as AntdMenu, Layout } from 'antd';
import { getConfigByPath } from '../locale';
import { renderMenuItem, fillOpenKeys } from './locale';
import { useStyles } from './use-styles';
import { Title } from '../title';
import { Config } from '@/src/config';
import { MenuProps } from './types';
import { REM } from 'mic-global';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { pageContext } from '@/src/components/page/locale';

export function Menu({ config }: MenuProps): React.ReactElement {
  const className = useStyles();
  const { Sider, Content } = Layout;
  const [openKeys, setOpenKeys] = useState([config.key] as string[]);
  const { language }  = useContext(pageContext);

  const selectedKeys = useMemo((): string[] => {
    return [config.key];
  }, [config]);

  useEffect((): void => {
    setOpenKeys(
      fillOpenKeys(openKeys, config)
    );
  }, [config]);

  const onOpenChange = (keys: React.Key[]): void => {
    setOpenKeys(keys as string[]);
  };

  return (
    <Sider className={className} width={REM.XXXL1}>
      <Layout>
        <Title>{language?.menu.dir}</Title>
        <Content>
          <AntdMenu
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            mode='inline'
          >
            {renderMenuItem()}
          </AntdMenu>
        </Content>
      </Layout>
    </Sider>
  );
}