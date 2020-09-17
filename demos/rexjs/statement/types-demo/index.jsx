import React, { useMemo } from 'react';
import Rexjs from '../../rexjs';
import { fitlerTypes } from '../../../locale';
import { Inspector } from 'mic-inspector';

export function TypesDemo() {
  return (
    <div>
      <Inspector
        name='all'
        value={
          [
            ...fitlerTypes(Rexjs.Statement, false, Rexjs),
            ...fitlerTypes(Rexjs.Statement, true, Rexjs)
          ]} />
    </div>
  );
}