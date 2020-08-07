import { createStyles, Level, REM, EM, Percent, White } from 'mic-global';

export const useStyles = createStyles(
  'menu-item',
  {
    overflow: 'visible !important',
    '&[data-html-tag="false"] a > q': {
      quotes: 'none',
    },
    '&[data-html-tag="true"] a > q': {
      '&::before, &::after': {
        opacity: Percent.G1,
      },
      '&::before': {
        content: '"<"',
      },
      '&::after': {
        content: '" />"',
      },
    },
    '& a > span': {
      display: 'inline-block',
      position: 'relative',
      zIndex: Level.S3,
      lineHeight: EM.M1,
      marginLeft: REM.XS3,
      transformOrigin: 'left',
      transform: 'scale(0.85)',
      verticalAlign: 'sub',
    },
    '& .ant-tag': {
      lineHeight: 1,
      margin: `0 ${REM.XS6} 0 0`,
      padding: `${REM.XS2} ${REM.XS3}`,
      '&:not([data-opacity="true"])': {
        color: 'transparent',
        textShadow: `0 0 0 ${White.L1}`,
      },
      '&[data-opacity="true"]': {
        opacity: Percent.S9,
      },
    },
  }
);