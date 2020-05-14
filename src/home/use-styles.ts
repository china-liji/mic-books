import { createUseStyles } from 'react-jss';
import { Gray, Black, Blue } from '@/src/common/theme/color';
import { FontSize } from '@/src/common/theme/fontSize';
import { Spacing } from '../common/theme/spacing';
import { hexToRgba } from '../common/theme';

export const useStyles = createUseStyles({
  home: {
    height: '100%',
    '& button': {
      padding: Spacing.XS2,
      margin: [Spacing.Z, Spacing.XS4, Spacing.XS4, Spacing.Z]
    }
  },
  title: {
    textAlign: 'center',
    lineHeight: Spacing.L1,
    fontSize: FontSize.H2
  },
  previewer: {
    fontSize: FontSize.H4,
    padding: Spacing.Z,
    display: 'block',
    borderLeft: `${Spacing.BW} solid ${Gray.L2}`,
    borderRight: `${Spacing.BW} solid ${Gray.L2}`,
    '& > header': {
      fontSize: FontSize.H1,
      color: Blue.L1
    },
    '& > main': {
      padding: [Spacing.Z, Spacing.S2],
      overflow: 'auto',
      '&::after': {
        content: `''`,
        display: 'block',
        marginTop: Spacing.XL2
      }
    },
    '& blockquote': {
      marginLeft: Spacing.E4
    },
    '& h1, h2, h3, h4, h5, h6': {
      margin: [Spacing.M1, Spacing.Z, Spacing.XS3, Spacing.Z],
      '&:first-child': {
        marginTop: Spacing.Z
      },
      '& + h1, + h2, + h3, + h4, + h5, + h6': {
        marginTop: Spacing.Z
      }
    },
    '& del': {
      opacity: 0.45
    },
    '& ul, ol': {
      paddingLeft: Spacing.M1
    },
    '& ul, ol, dl': {
      marginBottom: Spacing.XS4,
    },
    '& code': {
      fontSize: FontSize.H6,
      color: Blue.L1,
      backgroundColor: hexToRgba(Blue.L1, 0.15),
      padding: [Spacing.XS1, Spacing.XS2],
      borderRadius: 2,
      whiteSpace: 'nowrap'
    },
    '& pre': {
      fontSize: FontSize.Default,
      margin: Spacing.Z,
      '& code': {
        color: 'inherit',
        backgroundColor: 'transparent',
        padding: Spacing.Z,
        borderRight: Spacing.Z,
        whiteSpace: 'pre'
      }
    }
  },
  menu: {
    color: Black.L3,
    '& .ant-menu': {
      border: 'none'
    },
    '& header': {
      margin: [0, Spacing.M2],
      borderBottom: `${Spacing.BW} solid ${Gray.L2}`
    },
    '& .ant-layout': {
      height: '100%'
    },
    '& main': {
      overflow: 'auto'
    },
  }
});