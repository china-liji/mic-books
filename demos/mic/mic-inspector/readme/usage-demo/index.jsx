import React from 'react';
import { useStyles } from './use-styles';
import { DomInspector, Inspector, Properties, Property, PropertyName, PropertyValue, GetterValue, NumberValue, ObjectValue, StringValue, UnknownValue } from 'mic-inspector';

export function UsageDemo() {
  const obj = {
    a: 1,
    b: 2,
    get self() {
      if (this === obj) {
        return obj;
      }

      throw new Error('here is an error');
    }
  };

  return (
    <div className={useStyles()}>
      <dl>
        <dt>Inspector</dt>
        <dd>
          <Inspector name='document' value={document} />
          <Inspector name='object' value={obj} defaultExpand />
        </dd>
      </dl>
      <dl>
        <dt>DomInspector</dt>
        <dd>
          <DomInspector dom={document} />
        </dd>
      </dl>
      <dl>
        <dt>Properties</dt>
        <dd>
          <Properties owner={obj} />
        </dd>
      </dl>
      <dl>
        <dt>Property</dt>
        <dd>
          <Property name='object' value={obj} defaultExpand isNonenumerable={false} />
        </dd>
      </dl>
      <dl>
        <dt>PropertyName</dt>
        <dd>
          <PropertyName name='enumerable' />
          <br />
          <PropertyName name='nonenumerable' dimmed />
        </dd>
      </dl>
      <dl>
        <dt>PropertyValue</dt>
        <dd>
          <PropertyValue>This is a super component of other type values</PropertyValue>
        </dd>
      </dl>
      <dl>
        <dt>GetterValue</dt>
        <dd>
          <dl>
            <dt>GetterStatus.Protected -&gt; GetterStatus.Opened</dt>
            <dd>
              <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self').get} owner={obj} />
            </dd>
          </dl>
          <dl>
            <dt>GetterStatus.Protected -&gt; GetterStatus.Unexpected</dt>
            <dd>
              <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self').get} owner={null} />
            </dd>
          </dl>
        </dd>
      </dl>
      <dl>
        <dt>NumberValue</dt>
        <dd>
          You can press the alt/cmd key and click the number to change the number radix.
          <br />
          <NumberValue value={255} />
        </dd>
      </dl>
      <dl>
        <dt>ObjectValue</dt>
        <dd>
          <dl>
            <dt>object - normal mode</dt>
            <dd>
              <ObjectValue value={obj} />
            </dd>
          </dl>
          <dl>
            <dt>object - preview mode</dt>
            <dd>
              <ObjectValue value={obj} preview />
            </dd>
          </dl>
          <dl>
            <dt>array - normal mode</dt>
            <dd>
              <ObjectValue value={[1, 2, 3]} />
            </dd>
          </dl>
          <dl>
            <dt>array - preview mode</dt>
            <dd>
              <ObjectValue value={[1, 2, 3]} preview />
            </dd>
          </dl>
        </dd>
      </dl>
      <dl>
        <dt>StringValue</dt>
        <dd>
          <StringValue value={'123'.repeat(10)} />
          <br />
          <StringValue value={'123'.repeat(10)} before={'\''} after={'\''} />
          <br />
          <StringValue value={'123'.repeat(10)} before='`' after='`' />
        </dd>
      </dl>
      <dl>
        <dt>UnknownValue</dt>
        <dd>
          <UnknownValue value={obj} />
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
        </dd>
      </dl>
    </div>
  );
}