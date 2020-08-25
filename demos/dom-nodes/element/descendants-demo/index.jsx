import React from 'react';
import { fitler } from '../../locale';
import { Inspector } from 'mic-inspector';

export function DescendantsDemo() {
  return (
    <div>
      <Inspector name='list' value={fitler(Element, true)} />
    </div>
  );
}