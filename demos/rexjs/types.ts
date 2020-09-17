import { PrimaryTypes } from 'mic-global';

export interface RexjsObject {
  (): void;

  prototype: PrimaryTypes;
}

export interface RexjsApi {
  [property: string]: RexjsObject;
}