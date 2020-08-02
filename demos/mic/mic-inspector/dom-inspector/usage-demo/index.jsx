import React from 'react';
import { DomInspector } from 'mic-inspector';

export function UsageDemo() {
  return (
    <div>
      <DomInspector dom={document} />
    </div>
  );
}