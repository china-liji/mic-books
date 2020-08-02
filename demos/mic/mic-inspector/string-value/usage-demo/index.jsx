import React from 'react';
import { StringValue } from 'mic-inspector';

export function UsageDemo() {
  return (
    <div>
      <dl>
        <dt>normal</dt>
        <dd>
          <StringValue value='abc' />
        </dd>
      </dl>
      <dl>
        <dt>props.before = props.after = '`'</dt>
        <dd>
          <StringValue value='abc' before='`' after='`' />
        </dd>
      </dl>
      <dl>
        <dt>props.before = '${'{'}' and props.after = '{'}'}'</dt>
        <dd>
          <StringValue value='abc' before='${' after='}' />
        </dd>
      </dl>
    </div>
  );
}