import React from 'react';
import { NumberValue, Radix } from 'mic-inspector';

export function UsageDemo() {
  const number = 15;

  return (
    <div>
      <dl>
        <dt>normal</dt>
        <dd>
          <NumberValue value={number} />
        </dd>
      </dl>
      <dl>
        <dt>radix = Radix.Binary</dt>
        <dd>
          <NumberValue value={number} radix={Radix.Binary} />
        </dd>
      </dl>
      <dl>
        <dt>radix = Radix.Octal</dt>
        <dd>
          <NumberValue value={number} radix={Radix.Octal} />
        </dd>
      </dl>
      <dl>
        <dt>radix = Radix.Decimal</dt>
        <dd>
          <NumberValue value={number} radix={Radix.Decimal} />
        </dd>
      </dl>
      <dl>
        <dt>radix = Radix.Hex</dt>
        <dd>
          <NumberValue value={number} radix={Radix.Hex} />
        </dd>
      </dl>
      <dl>
        <dt>You can press the alt/cmd key and click the number to change the number radix.</dt>
        <dd>
          <NumberValue value={number} />
        </dd>
      </dl>
    </div>
  );
}