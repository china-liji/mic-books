import { createUseStyles } from 'react-jss';
import { Black } from '../common/theme/color';
import { FontSize } from '../common/theme/fontSize';
import { Screen } from '../common/theme/screen';

export const useStyles = createUseStyles({
  '@global': {
    '*': {
      margin: 0,
      padding: 0
    },
    html: {
      fontSize: FontSize.Root,
      color: Black.L2
    },
    body: {
      fontSize: FontSize.Default,
      fontFamily: 'arial'
    },
    'html, body, article, article > div': {
      height: '100%'
    },
    h1: {
      fontSize: FontSize.H1
    },
    h2: {
      fontSize: FontSize.H2
    },
    h3: {
      fontSize: FontSize.H3
    },
    h4: {
      fontSize: FontSize.H4
    },
    h5: {
      fontSize: FontSize.H5
    },
    h6: {
      fontSize: FontSize.H6
    },
    '.ant-layout, .ant-layout-sider, .ant-layout-header': {
      backgroundColor: 'transparent'
    },
    '.ant-layout-header': {
      height: 'auto'
    },
    [`@media screen and (max-width: ${Screen.MinWidth}px)`]: {
      html: {
        fontSize: FontSize.MinRem
      },
      body: {
        fontSize: FontSize.Min
      }
    }
  }
});