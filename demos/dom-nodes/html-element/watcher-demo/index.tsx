import React from 'react';
import { Inspector } from 'mic-inspector';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='HTMLElement' value={HTMLElement.prototype} />
      <Inspector name='ownPropertyNames' value={Object.getOwnPropertyNames(HTMLElement.prototype).sort()} />
    </div>
  );
}