import React from 'react';
import { UnknownValue } from 'mic-inspector';

export function UsageDemo() {
  return (
    <div>
      <UnknownValue value={location} />
      <br />
      <UnknownValue value='abc' />
      <br />
      <UnknownValue value={123} />
      <br />
      <UnknownValue value={undefined} />
      <br />
      <UnknownValue value={true} />
      <br />
      <UnknownValue value={false} />
      <br />
      <UnknownValue value={location.reload} />
    </div>
  );
}