import { Importer } from '../types';

export class Config {
  static currentGroup = '';

  static currentTags = [] as string[];

  group: string;

  importer: Importer;

  path: string;

  tags: string[];

  title: string;

  constructor(title: string, pathname: string, importer: Importer, group = Config.currentGroup, tags = group === Config.currentGroup ? Config.currentTags : [] as string[]) {
    this.path = `${group.toLocaleLowerCase()}/${pathname}`.toLocaleLowerCase();
    this.title = title;
    this.group = Config.currentGroup = group;
    this.importer = importer;
    this.tags = Config.currentTags = tags;
  }
}