import React from 'react';
import { Inspector, GetterStatus } from 'mic-inspector';

export function GetterStatusDemo(): React.ReactElement {
  return <Inspector name='GetterStatus' value={GetterStatus} defaultExpand />;
}