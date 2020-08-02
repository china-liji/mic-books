import React from 'react';
import { GetterValue } from 'mic-inspector';

export function UsageDemo() {
  const { get } = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

  return (
    <div>
      <dl>
        <dt>GetterStatus.Protected -&gt; GetterStatus.Opened</dt>
        <dd>
          <GetterValue value={get} owner={document.body} />
          <br />
          <GetterValue value={() => { return 123; }} owner={null} />
        </dd>
      </dl>
      <dl>
        <dt>GetterStatus.Protected -&gt; GetterStatus.Unexpected</dt>
        <dd>
          <GetterValue value={get} owner={null} />
        </dd>
      </dl>
    </div>
  );
}