import React, { useMemo } from 'react';
import { Inspector } from 'mic-inspector';
import Rexjs from '../../rexjs-api';

export function SyntaxTagsMapDemo() {
  const tagMaps = useMemo(() => {
    return new Rexjs.ECMAScriptTagsMap();
  }, []);

  return <Inspector name='ECMAScriptTagMaps' value={tagMaps} />;
}