import { createStyles, REM, Gray, Percent } from 'mic-global';
import { Red } from '@/src/app/theme/color';

export const useStyles = createStyles(
  'menu',
  {
    overflow: 'auto',
    '& .ant-menu': {
      border: 'none',
      overflow: 'hidden',
    },
    '& .ant-menu-item-group-title, & .ant-menu-item-only-child': {
      paddingLeft: `${REM.S6} !important`,
      paddingRight: REM.S6,
    },
    '& .ant-menu-item-group-title': {
      fontSize: REM.S2,
      fontWeight: 'bold',
      color: Red.L1,
      margin: `${REM.S6} 0 ${REM.S1} 0`,
      position: 'relative',
      '&::after': {
        content: '""',
        height: REM.XS1,
        position: 'absolute',
        left: REM.S6,
        right: REM.S6,
        bottom: 0,
        backgroundColor: Gray.L1,
      },
    },
    '& .ant-menu-item-only-child': {
      margin: `${REM.XS4} 0 ${REM.XS7} 0`,
      width: Percent.M1,
      fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif',
      '& > a': {
        fontSize: REM.S4,
      },
      '&::after': {
        borderRightWidth: REM.XS2,
      },
    },
  }
);