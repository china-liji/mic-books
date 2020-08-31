import { createStyles, REM, Percent } from 'mic-global';

export const usePptPaginationStyles = createStyles(
  'ppt-pagination',
  {
    position: 'fixed',
    right: REM.S2,
    bottom: REM.S1,
    padding: 0,
    '& > button': {
      margin: 0,
      '&:not(:hover)': {
        opacity: Percent.G1,
      },
      '&:not(:last-child)': {
        marginRight: REM.S2,
      },
    },
  }
);