import React from 'react';
import { Inspector } from 'mic-inspector';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='Element' value={Element.prototype} />
      <Inspector name='ownPropertyNames' value={Object.getOwnPropertyNames(Element.prototype).sort()} />
    </div>
  );
}