import React from 'react';
import { Inspector, Radix } from 'mic-inspector';

export function RadixDemo(): React.ReactElement {
  return <Inspector name='Radix' value={Radix} defaultExpand />;
}