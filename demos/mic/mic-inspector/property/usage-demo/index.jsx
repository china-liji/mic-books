import React from 'react';
import { Property, NamedDescriptor } from 'mic-inspector';

export function UsageDemo() {
  const descriptor = new NamedDescriptor(window, 'window.location', location);

  return (
    <div>
      <dl>
        <dt>normal</dt>
        <dd>
          <Property name='location' value={location} />
        </dd>
      </dl>
      <dl>
        <dt>props.defaultExpand = true</dt>
        <dd>
          <Property name='location' value={location} defaultExpand />
        </dd>
      </dl>
      <dl>
        <dt>props.isNonenumerable = true</dt>
        <dd>
          <Property name='location' value={location} isNonenumerable />
        </dd>
      </dl>
      <dl>
        <dt>props.preview = true</dt>
        <dd>
          <Property name='location' value={location} preview />
        </dd>
      </dl>
      <dl>
        <dt>descriptor mode</dt>
        <dd>
          <Property descriptor={descriptor} />
        </dd>
      </dl>
    </div>
  );
}