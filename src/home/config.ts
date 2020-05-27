import { Importer } from './types';

export class Config {
  configs: Config[];
  importer: Importer;
  name: string;
  parent = null as Config | null;
  title: string;

  constructor(name: string, configs: Config[], title?: string)
  constructor(name: string, importer: Importer, title?: string)
  constructor(name: string, value: Config[] | Importer, title = name) {
    this.name = name;
    this.title = title;
    
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

    return encodeURI(
      (
        parent ? `${parent.key}/${this.name}` : this.name
      ).toLowerCase()
    );
  }

  get isLeaf(): boolean {
    return this.configs.length === 0;
  }
}