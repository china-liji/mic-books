import React from 'react';
import { Inspector } from 'mic-inspector';
import { fitlerTypes } from '../../../locale';

export function SubsDemo() {
  return (
    <div>
      <Inspector name='list' value={fitlerTypes(HTMLElement)} />
    </div>
  );
}