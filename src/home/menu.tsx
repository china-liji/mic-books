import React, { useMemo, useState, useEffect } from 'react';
import { Menu as AntdMenu, Layout } from 'antd';
import { renderMenuItem, getConfigByPath, fillOpenKeys } from './locale';
import { useStyles } from './use-styles';
import { DirProps } from './types';
import { ClickParam } from 'antd/lib/menu';
import { Spacing } from '../common/theme/spacing';
import { Title } from './title';

export function Menu({ onChange, config }: DirProps): React.ReactElement {
  const { menu } = useStyles();
  const { Sider, Content } = Layout;
  const [ openKeys, setOpenKeys ] = useState([] as string[]);

  const selectedKeys = useMemo((): string[] => {
    return [config.key];
  }, [config]);

  const onSelect = ({ key }: ClickParam): void => {
    if (key === config.key) {
      return;
    }

    onChange(
      getConfigByPath(key)
    );
  };

  useEffect((): void => {
    setOpenKeys(
      fillOpenKeys(openKeys, config)
    );
  }, [config]);

  return (
    <Sider className={menu} width={Spacing.XXXL1}>
      <Layout>
        <Title>目录</Title>
        <Content>
          <AntdMenu
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={setOpenKeys}
            mode='inline'
          >
            {renderMenuItem(onSelect)}
          </AntdMenu>
        </Content>
      </Layout>
    </Sider>
  );
}