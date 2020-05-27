import { File } from './file';
import { DemoComponent } from './types';

export class Demo {
  autoUpdate: boolean;
  component: DemoComponent;
  files: File[];

  constructor(files: File[], component?: DemoComponent)
  constructor(files: File[], component: DemoComponent, autoUpdate: boolean)
  constructor(files: File[], component = null as DemoComponent, autoUpdate = false) {
    this.files = files;
    this.component = component;
    this.autoUpdate = autoUpdate;
  }
}