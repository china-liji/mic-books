import React from 'react';
import { Export } from '../types';
import { Config } from '../menu-config';
import { Language } from '@/src/language/types';
import { MenuItem } from '../menu-item';
import { MenuItemProps } from '../menu-item/types';
import { PrimaryTag } from '../menu-item-tags/types';
import { MenuItemGroup } from '../menu-item-group';

export const renderGroups = (language: Language, onItemSelected: MenuItemProps['onItemSelected'], onItemUnselected: MenuItemProps['onItemUnselected']): React.ReactElement[] => {
  let cfg = null as Config | null;
  const groups = [] as React.ReactElement[];
  const items = [] as React.ReactElement[];

  for (const config of getConfigs(language)) {
    const { group, path } = config;
    const { group: g } = cfg || {} as Config;

    if (group !== g) {
      if (items.length > 0) {
        groups.push(
          <MenuItemGroup key={g} config={cfg!}>
            {[...items]}
          </MenuItemGroup>
        );

        items.splice(0);
      }

      cfg = config;
    }

    items.push(
      <MenuItem
        key={path}
        config={config}
        onItemSelected={onItemSelected}
        onItemUnselected={onItemUnselected}
      />
    );
  }

  if (items.length > 0) {
    groups.push(
      <MenuItemGroup key={cfg!.group} config={cfg!}>
        {[...items]}
      </MenuItemGroup>
    );
  }

  return groups;
};

export const getConfigs = ({ menu, text }: Language): Config[] => {
  return [
    ...(
      location.hostname === 'localhost' ?
        [
          new Config(
            'useState',
            'use-state',
            async (): Promise<Export> => {
              return await import('@/demos/react/hooks/use-state') as unknown as Export;
            },
            'React',
            ['hooks']
          ),
          new Config(
            'useRef',
            'use-ref',
            async (): Promise<Export> => {
              return await import('@/demos/react/hooks/use-ref') as unknown as Export;
            },
            void 0,
            ['hooks']
          ),
          new Config(
            'useCallback',
            'use-callback',
            async (): Promise<Export> => {
              return await import('@/demos/react/hooks/use-callback') as unknown as Export;
            },
            void 0,
            ['hooks']
          ),
          new Config(
            menu.typescript.interfaceAndType,
            'interface-vs-type',
            async (): Promise<Export> => {
              return await import('@/demos/typescript/interface-vs-type.md') as unknown as Export;
            },
            'TypeScript',
            [PrimaryTag.Vs]
          ),
          new Config(
            menu.preface,
            'readme',
            async (): Promise<Export> => {
              return await import('@/demos/dom-nodes/readme.md') as unknown as Export;
            },
            'DOM Nodes'
          ),
          new Config(
            'Node',
            'node',
            async (): Promise<Export> => {
              return await import('@/demos/dom-nodes/node') as unknown as Export;
            },
            void 0,
            [PrimaryTag.Knowledge]
          ),
          new Config(
            'CharacterData',
            'character-data',
            async (): Promise<Export> => {
              return await import('@/demos/dom-nodes/character-data') as unknown as Export;
            },
            void 0,
            [PrimaryTag.Knowledge]
          ),
          new Config(
            'Element',
            'element',
            async (): Promise<Export> => {
              return await import('@/demos/dom-nodes/element') as unknown as Export;
            },
            void 0,
            [PrimaryTag.Knowledge]
          ),
          new Config(
            'HTMLElement',
            'html-element',
            async (): Promise<Export> => {
              return await import('@/demos/dom-nodes/html-element') as unknown as Export;
            },
            void 0,
            [PrimaryTag.Knowledge]
          ),
        ]: []
    ),
    new Config(
      text.introduction,
      'readme',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/readme') as unknown as Export;
      },
      'Mic-Inspector',
      [],
      [PrimaryTag.Mit, PrimaryTag.Npm, PrimaryTag.Git, PrimaryTag.Web]
    ),
    new Config(
      '<Inspector />',
      'inspector',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/inspector') as unknown as Export;
      },
      void 0,
      ['object']
    ),
    new Config(
      '<DomInspector />',
      'dom-inspector',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/dom-inspector') as unknown as Export;
      },
      void 0,
      ['dom']
    ),
    new Config(
      '<Properties />',
      'properties',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/properties') as unknown as Export;
      }
    ),
    new Config(
      '<Property />',
      'property',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/property') as unknown as Export;
      }
    ),
    new Config(
      '<PropertyName />',
      'property-name',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/property-name') as unknown as Export;
      }
    ),
    new Config(
      '<PropertyValue />',
      'property-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/property-value') as unknown as Export;
      }
    ),
    new Config(
      '<GetterValue />',
      'getter-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/getter-value') as unknown as Export;
      }
    ),
    new Config(
      '<NumberValue />',
      'number-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/number-value') as unknown as Export;
      }
    ),
    new Config(
      '<ObjectValue />',
      'object-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/object-value') as unknown as Export;
      }
    ),
    new Config(
      '<StringValue />',
      'string-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/string-value') as unknown as Export;
      }
    ),
    new Config(
      '<UnknownValue />',
      'unknown-value',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/unknown-value') as unknown as Export;
      }
    ),
  ];
};