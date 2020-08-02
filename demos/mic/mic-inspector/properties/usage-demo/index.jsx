import React from 'react';
import { Properties } from 'mic-inspector';

export function UsageDemo() {
  return (
    <div>
      <Properties owner={document} />
    </div>
  );
}