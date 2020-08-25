import React from 'react';
import { Inspector } from 'mic-inspector';
import { getNodeTypes } from './locale';

export function TypesDemo() {
  return (
    <div>{
      getNodeTypes().map((type) => {
        return <Inspector key={type} name={`Node.${type}`} value={Node[type]} />;
      })
    }</div>
  );
}