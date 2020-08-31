import { createStyles, REM, Gray } from 'mic-global';
import { Red } from '@/src/app/theme/color';

export const useMenuItemGroupStyles = createStyles(
  'menu-item-group',
  {
    '& > .ant-menu-item-group-title': {
      fontSize: REM.S2,
      fontWeight: 'bold',
      color: Red.L1,
      margin: `${REM.S6} 0 ${REM.S1} 0`,
      position: 'relative',
      whiteSpace: 'nowrap',
      '&::after': {
        content: '""',
        height: REM.XS1,
        position: 'absolute',
        left: REM.S6,
        right: REM.S6,
        bottom: 0,
        backgroundColor: Gray.L2,
      },
    },
  }
);