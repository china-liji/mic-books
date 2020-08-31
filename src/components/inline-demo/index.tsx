import React from 'react';
import { BlockComponent } from 'mic-global';
import { InlineDemoProps } from './types';
import { useInlineDemoStyles } from './use-styles';

export function InlineDemo({ demo }: InlineDemoProps): React.ReactElement {
  return (
    <BlockComponent className={useInlineDemoStyles()}>
      {demo.component ? <demo.component /> : null}
    </BlockComponent>
  );
}