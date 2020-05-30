import { createUseStyles } from 'react-jss';
import { Spacing } from '../theme/spacing';
import { Gray, White, State } from '../theme/color';

export const useStyles = createUseStyles({
  codePreviewer: {
    margin: [Spacing.S1, Spacing.Z],
    '& .ant-tabs-bar': {
      marginBottom: Spacing.Z,
      borderBottomColor: Gray.L2,
    },
    '& .ant-tabs-tab': {
      borderColor: `${Gray.L2} !important`,
      background: `${White.L1} !important`,
      '&.ant-tabs-tab-active': {
        borderBottomColor: 'transparent !important',
      },
    },
    '& .ant-tabs-tabpane-active': {
      border: `${Spacing.BW} solid ${Gray.L2}`,
      borderTop: 'none',
    },
    '& .ant-tabs-tabpane[data-demo]': {
      position: 'relative',
      padding: [Spacing.S1, Spacing.S4],
      overflow: 'auto',
      wordBreak: 'break-all',
      '& > p': {
        position: 'absolute',
        right: Spacing.E1,
        top: Spacing.E1,
        margin: Spacing.Z,
        '& > button': {
          margin: Spacing.Z,
        },
      },
      '& hr': {
        margin: [Spacing.S1, Spacing.Z],
        height: 1,
        backgroundColor: Gray.L2,
        border: 'none',
        '&[data-mini]': {
          width: Spacing.L1,
        },
      },
      '& *:not(.ant-btn) > span': {
        color: State.Error,
      },
      '& button': {
        margin: [Spacing.XS4, Spacing.Z],
      },
      '& blockquote': {
        margin: Spacing.Z,
      },
      '& sub, & sup': {
        opacity: 0.6,
        '&::before': {
          content: '"-"',
          margin: [Spacing.Z, Spacing.E1],
        },
      },
      '& p:last-child': {
        marginBottom: Spacing.Z,
      },
      '& q': {
        '&::before, &::after': {
          content: '""',
        },
      },
      '& [data-nowrap]': {
        whiteSpace: 'nowrap',
      },
    },
    '& > pre, & .ant-tabs-tabpane, & .ant-tabs-tabpane > pre, & .ant-tabs-tab-active': {
      background: `${White.L2} !important`,
    },
  },
  autoUpdate: {
    '& > *': {
      margin: `${Spacing.Z} !important`,
    },
    '& > p': {
      padding: [Spacing.XS5, Spacing.Z],
      borderBottom: `${Spacing.BW} solid ${Gray.L2}`,
      marginBottom: `${Spacing.XS5} !important`,
    },
  },
});