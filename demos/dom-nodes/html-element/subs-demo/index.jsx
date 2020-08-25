import React from 'react';
import { Inspector } from 'mic-inspector';
import { fitler } from '../../locale';

export function SubsDemo() {
  return (
    <div>
      <Inspector name='list' value={fitler(HTMLElement)} />
    </div>
  );
}