import React from 'react';
import { BlockComponent } from 'mic-global';
import { InlineDemoProps } from './types';
import { useStyles } from './use-styles';

export function InlineDemo({ demo }: InlineDemoProps): React.ReactElement {
  return (
    <BlockComponent className={useStyles()}>
      {demo.component ? <demo.component /> : null}
    </BlockComponent>
  );
}