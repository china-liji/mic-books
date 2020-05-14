import { HTMLProps } from 'react';

export interface AutoUpdateProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactElement | React.ReactElement[];
}