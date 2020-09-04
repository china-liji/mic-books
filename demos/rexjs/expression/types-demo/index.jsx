import React from 'react';
import Rexjs from '../../rexjs-api';
import { fitlerTypes } from '../../../locale';
import { Inspector } from 'mic-inspector';

export function TypesDemo() {
  return (
    <div>
      <Inspector
        name='all'
        value={
          [
            ...fitlerTypes(Rexjs.Expression, false, Rexjs),
            ...fitlerTypes(Rexjs.Expression, true, Rexjs)
          ]} />
    </div>
  );
}