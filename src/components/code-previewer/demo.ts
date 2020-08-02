import { File } from './file';
import { DemoComponent } from './types';

export class Demo {
  autoUpdate: boolean;

  cleanStyle: boolean;

  component: DemoComponent | null;
  
  files: File[];

  constructor(files: File[], component?: DemoComponent)
  constructor(files: File[], component: DemoComponent, autoUpdate: boolean, cleanStyle?: boolean)
  constructor(files: File[], component = null as Demo['component'], autoUpdate = false, cleanStyle = false) {
    this.files = files;
    this.component = component;
    this.autoUpdate = autoUpdate;
    this.cleanStyle = cleanStyle;
  }
}