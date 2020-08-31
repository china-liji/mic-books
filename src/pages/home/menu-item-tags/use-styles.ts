import { createStyles, Level, REM, EM, White } from 'mic-global';

export const useMenuItemTagsStyles = createStyles(
  'menu-item-tags',
  {
    display: 'inline-block',
    position: 'relative',
    zIndex: Level.S3,
    lineHeight: EM.M1,
    marginLeft: REM.XS5,
    transformOrigin: 'left',
    transform: 'scale(0.85)',
    verticalAlign: 'sub',
    fontWeight: 'normal',
    '& > .ant-tag': {
      lineHeight: 1,
      margin: `0 ${REM.XS6} 0 0`,
      padding: `${REM.XS2} ${REM.XS3}`,
      '&:not([data-opacity="true"])': {
        color: 'transparent',
        textShadow: `0 0 0 ${White.L1}`,
        fontWeight: 'bold',
      },
    },
  }
);