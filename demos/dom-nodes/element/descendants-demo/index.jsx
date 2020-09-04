import React from 'react';
import { fitlerTypes } from '../../../locale';
import { Inspector } from 'mic-inspector';

export function DescendantsDemo() {
  return (
    <div>
      <Inspector name='list' value={fitlerTypes(Element, true)} />
    </div>
  );
}