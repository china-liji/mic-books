import React from 'react';
import { Export } from '../types';
import { Config } from './config';
import { Language } from '@/src/language/types';
import { Menu } from 'antd';
import { MenuItem } from '../menu-item';
import { MenuItemProps, PrimaryTag } from '../menu-item/types';

export const renderGroups = (language: Language, onItemSelected: MenuItemProps['onItemSelected'], onItemUnselected: MenuItemProps['onItemUnselected']): React.ReactElement[] => {
  let group = '';
  const groups = [] as React.ReactElement[];
  const items = [] as React.ReactElement[];
  const { ItemGroup } = Menu;

  for (const config of getConfigs(language)) {
    const { group: g, path } = config;

    if (group !== g) {
      if (items.length > 0) {
        groups.push(
          <ItemGroup key={group} title={group}>{[...items]}</ItemGroup>
        );

        items.splice(0);
      }

      group = g;
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
      <ItemGroup key={group} title={group}>{[...items]}</ItemGroup>
    );
  }

  return groups;
};

export const getConfigs = ({ menu, text }: Language): Config[] => {
  return [
    // new Config(
    //   'useState',
    //   'use-state',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/react/hooks/use-state') as unknown as Export;
    //   },
    //   'React',
    //   ['hooks']
    // ),
    // new Config(
    //   'useRef',
    //   'use-ref',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/react/hooks/use-ref') as unknown as Export;
    //   }
    // ),
    // new Config(
    //   'useCallback',
    //   'use-callback',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/react/hooks/use-callback') as unknown as Export;
    //   }
    // ),
    // new Config(
    //   menu.typescript.interfaceAndType,
    //   'interface-vs-type',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/typescript/interface-vs-type.md') as unknown as Export;
    //   },
    //   'TypeScript',
    //   [PrimaryTag.Vs]
    // ),
    // new Config(
    //   menu.dom.node,
    //   'doc',
    //   async (): Promise<Export> => {
    //     return await import('@/demos/dom/doc') as unknown as Export;
    //   },
    //   'DOM',
    //   [PrimaryTag.Knowledge]
    // ),
    new Config(
      text.introduction,
      'readme',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/readme') as unknown as Export;
      },
      'Mic-Inspector',
      [PrimaryTag.Mit, PrimaryTag.Web, PrimaryTag.Npm, PrimaryTag.Git]
    ),
    new Config(
      '<Inspector />',
      'inspector',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/inspector') as unknown as Export;
      },
      void 0,
      []
    ),
    new Config(
      '<DomInspector />',
      'dom-inspector',
      async (): Promise<Export> => {
        return await import('@/demos/mic/mic-inspector/dom-inspector') as unknown as Export;
      }
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