export class File {
  name: string;
  source: string;

  constructor(name: string, source: string) {
    this.name = name;
    this.source = source;
  }

  get type(): string {
    const result = /\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);
    
    return result ? result[1] : '';
  }
}