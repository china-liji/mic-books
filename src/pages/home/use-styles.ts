import { createStyles, REM, Percent, Level } from 'mic-global';
import { useStyles as useLanguageSelectorStyles } from '@/src/components/language-selector/use-styles';

export const useStyles = createStyles(
  'home',
  {
    height: Percent.M1,
    '& button': {
      padding: REM.XS2,
      margin: [0, REM.XS4, REM.XS4, 0],
    },
    [`& .${useLanguageSelectorStyles.originalClassName as string}`]: {
      position: 'absolute',
      bottom: REM.XS6,
      right: REM.S1,
      zIndex: Level.S4,
    },
  }
);