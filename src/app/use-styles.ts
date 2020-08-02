import { createStyles, Percent } from 'mic-global';

export const useStyles = createStyles({
  '@global': {
    'article > div': {
      height: Percent.M1,
    },
    '.ant-layout, .ant-layout-sider, .ant-layout-header': {
      backgroundColor: 'transparent',
    },
    '.ant-layout-header': {
      height: 'auto',
    },
  },
});