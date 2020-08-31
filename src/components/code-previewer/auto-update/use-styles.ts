import { createStyles, REM, BW, Gray } from 'mic-global';

export const useAutoUpdateStyles = createStyles(
  'auto-update',
  {
    '& > *': {
      margin: '0 !important',
    },
    '& > p': {
      padding: [REM.XS5, 0],
      borderBottom: `${BW.Default} solid ${Gray.L2}`,
      marginBottom: `${REM.XS5} !important`,
    },
  }
);