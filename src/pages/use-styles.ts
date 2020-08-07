import { createStyles, Percent } from 'mic-global';

export const useStyles = createStyles({
  '@global': {
    'body': {
      fontFamily: 'ExampleFont, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, noto sans, sans-serif, apple color emoji, segoe ui emoji, segoe ui symbol, noto color emoji',
    },
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