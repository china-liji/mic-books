import React from 'react';
import { Inspector } from 'mic-inspector';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='CharacterData' value={CharacterData.prototype} />
      <Inspector name='ownPropertyNames' value={Object.getOwnPropertyNames(CharacterData.prototype).sort()} />
    </div>
  );
}