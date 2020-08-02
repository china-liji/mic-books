import React from 'react';
import { Inspector } from 'mic-inspector';

export function UsageDemo() {
  const obj = {
    a: 1,
    b: 'abc',
    c: true,
    d() {},
    get self() {
      return obj;
    }
  };

  return (
    <div>
      <dl>
        <dt>normal</dt>
        <dd>
          <Inspector name='object' value={obj} />
        </dd>
      </dl>
      <dl>
        <dt>normal</dt>
        <dd>
          <Inspector name='location' value={location} isNonenumerable={false} />
        </dd>
      </dl>
      <dl>
        <dt>props.defaultExpand = true</dt>
        <dd>
          <Inspector name='object' value={obj} defaultExpand />
        </dd>
      </dl>
      <dl>
        <dt>props.isNonenumerable = true</dt>
        <dd>
          <Inspector name='document' value={document} isNonenumerable />
        </dd>
      </dl>
    </div>
  );
}