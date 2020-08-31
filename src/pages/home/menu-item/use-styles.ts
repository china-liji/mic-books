import { createStyles, REM, Percent } from 'mic-global';

export const useMenuItemStyles = createStyles(
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
        fontSize: REM.S2,
      },
      '&::before': {
        content: '"<"',
        position: 'absolute',
        left: REM.S6,
        top: 0,
        marginLeft: `-${REM.XS1}`,
        height: Percent.M1,
        transform: `translateX(-${Percent.M1})`,
      },
      '&::after': {
        content: '" />"',
      },
    },
  }
);