import { createStyles, EM, Gray, REM, Pixel, White, Black, Percent } from 'mic-global';
import { Language } from '@/src/language/types';
import { Blue } from '@/src/app/theme/color';

export const useStyles = createStyles(
  'previewer',
  {
    fontSize: REM.S4,
    padding: 0,
    display: 'block',
    '& > header': {
      fontSize: EM.H1,
      color: Blue.L1,
      margin: `${REM.M1} 0 ${REM.XS6} 0`,
    },
    '& > main': {
      padding: [0, REM.S2],
      overflow: 'auto',
      '&[data-error="true"]::before': {
        content(language: Language): string {
          return `'${language.previewer.error}'`;
        },
        color: Gray.L4,
        marginTop: REM.M1,
        textAlign: 'center',
        display: 'block',
      },
      '&::after': {
        content: '""',
        display: 'block',
        marginTop: REM.S6,
      },
    },
    '& blockquote': {
      marginLeft: EM.M4,
    },
    '& h1, h2, h3, h4, h5, h6': {
      margin: [REM.M1, 0, REM.XS3, 0],
      '&:first-child': {
        marginTop: 0,
      },
      '& + h1, + h2, + h3, + h4, + h5, + h6': {
        marginTop: 0,
      },
    },
    '& del': {
      opacity: Percent.G2,
    },
    '& ul, ol': {
      paddingLeft: REM.M1,
    },
    '& ul, ol, dl': {
      marginBottom: REM.XS4,
    },
    '& li:not(:last-child)': {
      marginBottom: REM.XS2,
    },
    '& *:not(pre) > code': {
      color: Blue.L1,
      fontSize: EM.S7,
      padding: [REM.XS2, REM.XS3],
      margin: [0, REM.XS2],
      borderRadius: 2,
      whiteSpace: 'nowrap',
      backgroundColor: White.L6,
    },
    '& pre': {
      fontSize: `${REM.S2} !important`,
      margin: '0 !important',
      padding: `${EM.S5} ${EM.M1} !important`,
      border: 'none !important',
      backgroundColor: `${White.L5} !important`,
      '&, & code': {
        color: `${Black.L5} !important`,
      },
      '& code': {
        backgroundColor: 'transparent',
        padding: 0,
        borderRight: 0,
        whiteSpace: 'pre',
      },
    },
    '& p': {
      marginBottom: REM.XS5,
    },
  }
);