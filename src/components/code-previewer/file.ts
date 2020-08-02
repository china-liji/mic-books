export class File {
  name: string;

  source: string;

  type: string;
  
  constructor(name: string, source: string, type?: string) {
    this.name = name;
    this.source = source;

    if (!type) {
      const result = /\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);

      type = result ? result[1] : '';
    }

    this.type = type;
  }
}