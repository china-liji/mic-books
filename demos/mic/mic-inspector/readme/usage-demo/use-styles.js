import { createStyles, EM } from 'mic-global';

export const useUsageDemoStyles = createStyles(
  'usage-demo',
  {
    '& > dl': {
      marginBottom: EM.M1,
      '& > dt': {
        fontWeight: 'bold',
        fontSize: EM.M2,
        '&::before': {
          content: '"<"',
        },
        '&::after': {
          content: '" />"',
        },
      },
    },
  }
);