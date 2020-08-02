import React from 'react';
import { ObjectValue } from 'mic-inspector';

export function UsageDemo() {
  const obj = {
    a: 1,
    b: 'abc',
    c: true,
    d() {},
    get self() {
      return obj;
    },
    get arr() {
      return arr;
    }
  };

  const arr = [obj, 1, 'a', document.body];

  return (
    <div>
      <dl>
        <dt>object # normal</dt>
        <dd>
          <ObjectValue value={obj} />
        </dd>
      </dl>
      <dl>
        <dt>array # normal</dt>
        <dd>
          <ObjectValue value={arr} />
        </dd>
      </dl>
      ----------
      <dl>
        <dt>object # empty</dt>
        <dd>
          <ObjectValue value={{}} />
        </dd>
      </dl>
      <dl>
        <dt>array # empty</dt>
        <dd>
          <ObjectValue value={[]} />
        </dd>
      </dl>
      ----------
      <dl>
        <dt>object # props.preview = true</dt>
        <dd>
          <ObjectValue value={obj} preview />
        </dd>
      </dl>
      <dl>
        <dt>array # props.preview = true</dt>
        <dd>
          <ObjectValue value={arr} preview />
        </dd>
      </dl>
      ----------
      <dl>
        <dt>object # props.maxPropertyLength = 2</dt>
        <dd>
          <ObjectValue value={obj} maxPropertyLength={2} />
        </dd>
      </dl>
      <dl>
        <dt>array # props.maxPropertyLength = 2</dt>
        <dd>
          <ObjectValue value={arr} maxPropertyLength={2} />
        </dd>
      </dl>
    </div>
  );
}