import React from 'react';
import { Inspector } from 'mic-inspector';
import Rexjs from '../../rexjs';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='Rexjs.Statements' value={Rexjs.Statements.prototype} />
    </div>
  );
}