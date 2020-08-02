import React from 'react';
import { GetterStatus, Inspector } from 'mic-inspector';

export function StatusDemo() {
  return (
    <div>
      <Inspector name='GetterStatus' value={GetterStatus} />
    </div>
  );
}