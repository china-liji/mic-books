import React from 'react';
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
            ...fitlerTypes(Rexjs.SyntaxTag, false, Rexjs),
            ...fitlerTypes(Rexjs.SyntaxTag, true, Rexjs)
          ]} />
    </div>
  );
}