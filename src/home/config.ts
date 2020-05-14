import { Importer } from './types';

export class Config {
  configs: Config[];
  importer: Importer;
  name: string;
  parent = null as Config | null;

  constructor(name: string, configs: Config[])
  constructor(name: string, importer: Importer)
  constructor(name: string, value: Config[] | Importer) {
    this.name = name;
    
    if (typeof value === 'function') {
      this.configs = [];
      this.importer = value as Importer;
      return;
    }

    this.configs = value as Config[];
    this.importer = null;

    for (const v of value as Config[]) {
      v.parent = this;
    }
  }

  get key(): string {
    let { parent } = this;

    return (
      parent ? `${parent.key}/${this.name}` : this.name
    )
    .toLowerCase();
  }

  get isLeaf(): boolean {
    return this.configs.length === 0;
  }
}