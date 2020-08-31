import { createStyles, REM } from 'mic-global';

export const usePreviewerToolsStyles = createStyles(
  'previewer-tools',
  {
    width: 'auto',
    whiteSpace: 'nowrap',
    lineHeight: 0,
    textAlign: 'right',
    padding: [REM.S1, REM.S1, REM.XS7, REM.S1],
    '&[data-fullscreen="true"]': {
      display: 'none',
    },
    '& > *': {
      display: 'inline-flex',
      verticalAlign: 'middle',
      '&:not(:last-child)': {
        marginRight: REM.XS6,
      },
    },
  }
);