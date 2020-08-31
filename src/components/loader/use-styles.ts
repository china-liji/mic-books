import { createStyles, REM } from 'mic-global';

export const useLoaderStyles = createStyles(
  'loader',
  {
    '& .ant-spin-spinning': {
      display: 'block',
      margin: `${REM.S1} auto`,
      transform: 'translateY(15%)',
      '&:not(:only-child)': {
        display: 'none',
      },
    },
  }
);