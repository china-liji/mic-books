import React, { useContext, useState } from 'react';
import { Menu as AntdMenu, Layout } from 'antd';
import { renderGroups } from './locale';
import { useMenuStyles } from './use-styles';
import { REM } from 'mic-global';
import { pageContext } from '@/src/components/page/locale';
import { homePageContext } from '../locale';
import { Language } from '@/src/language/types';

export function Menu(): React.ReactElement {
  const { Sider } = Layout;
  const { language }  = useContext(pageContext);
  const { setConfig } = useContext(homePageContext);
  const [selectedKeys, setSelectedKeys] = useState([] as string[]);
  let runtimePath = selectedKeys[0];

  const onItemSelected = (path: string): void => {
    runtimePath = path;

    setSelectedKeys([path]);
  };

  const onItemUnselected = (path: string): void => {
    // 如果在 unselected 之前， runtimePath 被设置过（onItemSelected），则不进行以下清空操作
    if (runtimePath !== path) {
      return;
    }

    setConfig(null);
    setSelectedKeys([]);
  };

  return (
    <Sider className={useMenuStyles()} width={REM.XXXL1}>
      <AntdMenu mode='inline' selectedKeys={selectedKeys}>
        {renderGroups(language as Language, onItemSelected, onItemUnselected)}
      </AntdMenu>
    </Sider>
  );
}