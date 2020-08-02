import { BlockComponentProps } from 'mic-global';

export interface LoaderProps extends BlockComponentProps {
  loader?: Promise<React.ReactNode> | null;
}