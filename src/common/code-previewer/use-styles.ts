import { createUseStyles } from 'react-jss';
import { Spacing } from '../theme/spacing';
import { Gray, White } from '../theme/color';

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
      padding: [Spacing.S1, Spacing.S4],
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