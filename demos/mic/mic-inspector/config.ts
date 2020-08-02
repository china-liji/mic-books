import { Config } from '@/src/config';
import { Export } from '@/src/config/types';

export const micInspectorConfig = new Config('Mic-Inspector', [
  new Config(
    'readme',
    async (): Promise<Export> => {
      return await import('./readme') as unknown as Export;
    },
    'ReadMe.md'
  ),
  new Config(
    'inspector',
    async (): Promise<Export> => {
      return await import('./inspector') as unknown as Export;
    },
    '<Inspector />'
  ),
  new Config(
    'dom-inspector',
    async (): Promise<Export> => {
      return await import('./dom-inspector') as unknown as Export;
    },
    '<DomInspector />'
  ),
  new Config(
    'properties',
    async (): Promise<Export> => {
      return await import('./properties') as unknown as Export;
    },
    '<Properties />'
  ),
  new Config(
    'property',
    async (): Promise<Export> => {
      return await import('./property') as unknown as Export;
    },
    '<Property />'
  ),
  new Config(
    'property-name',
    async (): Promise<Export> => {
      return await import('./property-name') as unknown as Export;
    },
    '<PropertyName />'
  ),
  new Config(
    'property-value',
    async (): Promise<Export> => {
      return await import('./property-value') as unknown as Export;
    },
    '<PropertyValue />'
  ),
  new Config(
    'getter-value',
    async (): Promise<Export> => {
      return await import('./getter-value') as unknown as Export;
    },
    '<GetterValue />'
  ),
  new Config(
    'number-value',
    async (): Promise<Export> => {
      return await import('./number-value') as unknown as Export;
    },
    '<NumberValue />'
  ),
  new Config(
    'object-value',
    async (): Promise<Export> => {
      return await import('./object-value') as unknown as Export;
    },
    '<ObjectValue />'
  ),
  new Config(
    'string-value',
    async (): Promise<Export> => {
      return await import('./string-value') as unknown as Export;
    },
    '<StringValue />'
  ),
  new Config(
    'unknown-value',
    async (): Promise<Export> => {
      return await import('./unknown-value') as unknown as Export;
    },
    '<UnknownValue />'
  ),
]);