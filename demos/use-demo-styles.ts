import { Spacing } from '@/src/common/theme/spacing';
import { Gray, State } from '@/src/common/theme/color';
import { createUseStyles } from 'react-jss';

export const useDemoStyles = createUseStyles({
  demo: {
    '& hr': {
      margin: [Spacing.S1, Spacing.Z],
      height: 1,
      backgroundColor: Gray.L2,
      border: 'none',
    },
    '& span': {
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
  },
});