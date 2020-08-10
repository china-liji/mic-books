import { Importer } from '../types';

export class Config {
  static currentGroup = '';

  static currentGruopTags = [] as string[];

  group: string;

  groupTags: string[];

  importer: Importer;

  path: string;

  tags: string[];

  title: string;

  constructor(title: string, pathname: string, importer: Importer, group = Config.currentGroup, tags = [] as string[], groupTags = [] as string[]) {
    const currentGruopTags = group !== Config.currentGroup ? groupTags : Config.currentGruopTags;

    this.path = `${group.toLocaleLowerCase()}/${pathname}`.toLocaleLowerCase();
    this.title = title;
    this.group = Config.currentGroup = group;
    this.importer = importer;
    this.groupTags = Config.currentGruopTags = currentGruopTags;
    this.tags = [group, ...tags];
  }
}