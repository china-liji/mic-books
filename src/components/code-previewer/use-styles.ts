import { createStyles, REM, Gray, White, BW, EM, State, Level, Pixel } from 'mic-global';

export const useStyles = createStyles(
  'code-previewer',
  {
    margin: [REM.S1, 0],
    '& .ant-tabs-nav-wrap': {
      zIndex: Level.S3,
      top: Pixel.S1,
    },
    '& .ant-tabs-bar': {
      marginBottom: 0,
      borderBottomColor: Gray.L2,
    },
    '& .ant-tabs-nav': {
      margin: 0,
    },
    '& .ant-tabs-tab': {
      borderColor: `${Gray.L2} !important`,
      background: `${White.L1} !important`,
      '&.ant-tabs-tab-active': {
        borderBottomColor: 'transparent !important',
      },
      '&:not(.ant-tabs-tab-active)': {
        borderBottomColor: `${Gray.L2} !important`,
      },
    },
    '& .ant-tabs-tabpane-active': {
      border: `${BW.Default} solid ${Gray.L2}`,
    },
    '& .ant-tabs-tabpane[id$="panel-demo"]': {
      position: 'relative',
      fontSize: REM.S2,
      padding: [REM.S1, REM.S4],
      overflow: 'auto',
      minHeight: REM.L1,
      wordBreak: 'break-all',
      '& > p': {
        position: 'absolute',
        right: EM.M1,
        top: EM.M1,
        margin: 0,
        zIndex: Level.S3,
        '& > button': {
          margin: 0,
        },
        '&:not([data-clean="true"]) + div': {
          '& hr': {
            margin: [REM.S1, 0],
            height: 1,
            backgroundColor: Gray.L2,
            border: 'none',
            '&[data-mini]': {
              width: REM.L1,
            },
          },
          '& *:not(.ant-btn) > span': {
            color: State.Error,
          },
          '& button': {
            margin: [REM.XS4, 0],
            fontSize: EM.M1,
          },
          '& blockquote': {
            margin: 0,
          },
          '& sub, & sup': {
            opacity: 0.6,
            '&::before': {
              content: '"-"',
              margin: [0, EM.M1],
            },
          },
          '& p:last-child': {
            marginBottom: 0,
          },
          '& [data-nowrap]': {
            whiteSpace: 'nowrap',
          },
        },
      },
    },
    '& > pre, & .ant-tabs-tabpane, & .ant-tabs-tabpane > pre, & .ant-tabs-tab-active': {
      background: `${White.L5} !important`,
    },
  }
);