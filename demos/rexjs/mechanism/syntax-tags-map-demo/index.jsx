import React, { useMemo } from 'react';
import { Inspector } from 'mic-inspector';
import Rexjs from '../../rexjs';

console.dir(Rexjs);

export function SyntaxTagsMapDemo() {
  const tagMaps = useMemo(() => {
    return new Rexjs.ECMAScriptTagsMap();
  }, []);

  return <Inspector name='ECMAScriptTagMaps' value={tagMaps} />;
}