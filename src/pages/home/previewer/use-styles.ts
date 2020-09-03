import { createStyles, EM, Gray, REM, White, Black, Percent } from 'mic-global';
import { Language } from '@/src/language/types';
import { Blue } from '@/src/app/theme/color';
import { PreviewerMode } from './types';

export const usePreviewerStyles = createStyles(
  'previewer',
  {
    fontSize: REM.S4,
    padding: 0,
    display: 'block',
    position: 'relative',
    // 这不用 :fullscreen，因为不能配合子元素选择器
    [`&[data-mode='${PreviewerMode.Ppt}']`]: {
      backgroundColor: `${White.L1} !important`,
      fontSize: REM.M1,
      lineHeight: EM.M6,
      '&[data-current="0"]': {
        '& > main': {
          display: 'none',
        },
      },
      '&:not([data-current="0"])': {
        '& > header, & > .ant-layout-content > .loader > .suspense > *': {
          display: 'none',
        },
        '& [data-current-page]': {
          marginBottom: REM.M3,
          fontSize: REM.L1,
          lineHeight: EM.M5,
          '&, & ~ *': {
            display: 'block !important',
          },
        },
        '& [data-current-page] ~ [data-page]': {
          '&, & ~ *': {
            display: 'none !important',
          },
        },
      },
      '& > header, & > main': {
        position: 'absolute',
        top: Percent.S6,
        left: Percent.S6,
        width: 'auto',
        minWidth: Percent.G2,
        maxWidth: Percent.M1,
        minHeight: Percent.G2,
        maxHeight: Percent.M1,
        transform: `translate(-${Percent.S6}, -${Percent.S6})`,
        overflow: 'visible',
        padding: [0, REM.M3],
        '&::before, &::after': {
          content: '""',
          display: 'block',
          height: REM.M5,
        },
      },
      '& > header': {
        fontSize: REM.L5,
      },
      '& .inline-demo, pre': {
        fontSize: `${REM.S6} !important`,
      },
    },
    [`&:not([data-mode='${PreviewerMode.Ppt}'])`]: {
      '& > footer': {
        display: 'none',
      },
    },
    '& > header': {
      fontSize: EM.H1,
      lineHeight: Percent.M4,
      color: Blue.L1,
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      margin: `0 0 ${REM.XS6} 0`,
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
        marginTop: REM.L5,
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
    '& button': {
      padding: REM.XS2,
      margin: [0, REM.XS4, REM.XS4, 0],
    },
  }
);