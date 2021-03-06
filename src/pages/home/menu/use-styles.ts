import { createStyles, REM, White, BW } from 'mic-global';

export const useMenuStyles = createStyles(
  'menu',
  {
    overflow: 'auto',
    borderRight: `${BW.Default} solid ${White.L6}`,
    '& .ant-menu': {
      border: 'none',
      overflow: 'hidden',
      backgroundColor: White.L3,
    },
    '& .ant-menu-item-group-title, & .ant-menu-item-only-child': {
      paddingLeft: `${REM.S6} !important`,
      paddingRight: REM.S6,
    },
  }
);