import React from 'react';
import { Importer, ConfigTitleParam } from './types';
import { Title } from './title';

export class Config {
  configs: Config[];
  importer: Importer | null;
  name: string;
  parent = null as Config | null;
  title: React.ReactElement;

  constructor(name: string, configs: Config[], title?: ConfigTitleParam)
  constructor(name: string, importer: Importer, title?: ConfigTitleParam)
  constructor(name: string, value: Config[] | Importer, title: ConfigTitleParam = name) {
    this.name = name;

    this.title = (
      <Title
        onRenderTitle={
          typeof title === 'function' ?
            title :
            (): string => {
              return title;
            }
        }
      />
    );
    
    if (typeof value === 'function') {
      this.configs = [];
      this.importer = value;
      return;
    }

    this.configs = value;
    this.importer = null;

    for (const v of value) {
      v.parent = this;
    }
  }

  get key(): string {
    const { parent } = this;
    const name = encodeURIComponent(this.name.toLowerCase());

    return parent ? `${parent.key}/${name}` : name;
  }

  get isLeaf(): boolean {
    return this.configs.length === 0;
  }
}