import { createStyles, EM, BW, Gray, Blue, REM, hexToRgba, Pixel, White, Black, Style } from 'mic-global';
import { Language } from '@/src/language/types';

export const useStyles = createStyles(
  'previewer',
  (language: Language): Style => {
    return {
      fontSize: REM.S4,
      padding: 0,
      display: 'block',
      borderLeft: `${BW.Default} solid ${Gray.L2}`,
      borderRight: `${BW.Default} solid ${Gray.L2}`,
      '& > header': {
        fontSize: EM.H1,
        color: Blue.L1,
      },
      '& > main': {
        padding: [0, REM.S2],
        overflow: 'auto',
        '&[data-error="true"]::before': {
          content: `'${language.previewer.error}'`,
          color: Gray.L1,
          marginTop: REM.M1,
          textAlign: 'center',
          display: 'block',
        },
        '&::after': {
          content: '""',
          display: 'block',
          marginTop: REM.XL2,
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
        opacity: 0.45,
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
      '& .suspense > .mic-inspector': {
        fontSize: Pixel.M2,
      },
      '& *:not(pre) > code': {
        color: Black.L1,
        fontSize: EM.S7,
        padding: [REM.XS2, REM.XS3],
        borderRadius: 2,
        whiteSpace: 'nowrap',
        backgroundColor: hexToRgba(Black.L1, 0.1),
      },
      '& pre': {
        fontSize: `${REM.S2} !important`,
        margin: '0 !important',
        padding: `${EM.S5} ${EM.M1} !important`,
        border: 'none !important',
        backgroundColor: `${White.L2} !important`,
        '&, & code': {
          color: `${Black.L2} !important`,
        },
        '& code': {
          backgroundColor: 'transparent',
          padding: 0,
          borderRight: 0,
          whiteSpace: 'pre',
        },
      },
    };
  }
);