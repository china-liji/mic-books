import { createStyles, Level, REM, EM, Percent, White } from 'mic-global';

export const useStyles = createStyles(
  'menu-item',
  {
    overflow: 'visible !important',
    margin: `${REM.XS4} 0 ${REM.XS7} 0`,
    width: Percent.M1,
    fontFamily: 'Avenir, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji, sans-serif',
    '& > a': {
      fontSize: REM.S4,
    },
    '&::after': {
      borderRightWidth: REM.XS2,
    },
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
  }
);