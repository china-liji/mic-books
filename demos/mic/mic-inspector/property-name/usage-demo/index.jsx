import React from 'react';
import { PropertyName, DescriptorNameType } from 'mic-inspector';

export function UsageDemo() {
  return (
    <div>
      <dl>
        <dt>normal</dt>
        <dd>
          <PropertyName name='abc' />
        </dd>
      </dl>
      <dl>
        <dt>props.dimmed = true</dt>
        <dd>
          <PropertyName name={Symbol('abc')} dimmed />
        </dd>
      </dl>
      <dl>
        <dt>props.type = DescriptorNameType.Index</dt>
        <dd>
          <PropertyName name={0} type={DescriptorNameType.Index} />
        </dd>
      </dl>
    </div>
  );
}