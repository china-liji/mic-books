import React from 'react';
import { Inspector } from 'mic-inspector';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='Node' value={Node.prototype} />
      <Inspector name='ownPropertyNames' value={Object.getOwnPropertyNames(Node.prototype).sort()} />
    </div>
  );
}