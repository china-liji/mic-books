import React from 'react';
import { renderTypes } from '../../../locale';

export function DescendantsDemo() {
  return (
    <div>{renderTypes(HTMLElement, true)}</div>
  );
}