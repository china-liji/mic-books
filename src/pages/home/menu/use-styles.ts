import { createStyles, Black, REM, Gray, BW, Percent } from 'mic-global';

export const useStyles = createStyles(
  'menu',
  {
    color: Black.L3,
    '& .ant-menu': {
      border: 'none',
    },
    '& header': {
      margin: [0, REM.M2],
      borderBottom: `${BW.Default} solid ${Gray.L2}`,
    },
    '& .ant-layout': {
      height: Percent.M1,
    },
    '& main': {
      overflow: 'auto',
      '&::after': {
        content: '""',
        display: 'block',
        marginTop: REM.S4,
      },
    },
  }
);