import React, { useMemo } from 'react';
import { Inspector } from 'mic-inspector';
import Rexjs from '../../rexjs-api';

export function ResultDemo() {
  const parser = useMemo(() => {
    const parser = new Rexjs.ECMAScriptParser();

    parser.parse(
      new Rexjs.File(
        'index.js',
        'var a = 1'
      )
    );

    return parser;
  }, []);

  return <Inspector name='globalStatements' value={parser.statements} defaultExpand />;
}