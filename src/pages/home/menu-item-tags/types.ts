import { Config } from '../menu-config';
import { InlineComponentProps } from 'mic-global';

export enum PrimaryTag {
  Git = 'GitHub',

  Knowledge = 'knowledge',

  Mit = 'MIT',

  Npm = 'NPM',

  Web = 'web',

  Vs = 'vs'
}

export interface MenuItemTagsProps extends InlineComponentProps {
  children?: never[];

  tags: string[];
}