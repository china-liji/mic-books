import React from 'react';
import { Inspector } from 'mic-inspector';
import Rexjs from '../../rexjs-api';
import { UnknownFunction, PrimaryTypes } from 'mic-global';

export function WatcherDemo(): React.ReactElement {
  return (
    <div>
      <Inspector name='Rexjs.TagType' value={(Rexjs.TagType as UnknownFunction).prototype as PrimaryTypes} />
    </div>
  );
}