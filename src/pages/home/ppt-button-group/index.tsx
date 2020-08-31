import React, { useContext } from 'react';
import { Radio } from 'antd';
import { usePptButtonGroupStyles } from './use-styles';
import { previewerContext } from '../previewer/locale';
import { PreviewerMode } from '../previewer/types';

export function PPTButtonGroup(): React.ReactElement {
  const { Group, Button } = Radio;
  const { setMode, ready } = useContext(previewerContext);

  const onClickFilePPT = (): void => {
    setMode(PreviewerMode.Ppt);
  };

  return (
    <Group className={usePptButtonGroupStyles()} size='small' value='1' disabled={!ready}>
      <Button value='1' onClick={onClickFilePPT}>PPT</Button>
      {/* <Button value='2' onClick={onClickFilePPT}>
        <FilePptFilled />
      </Button>
      <Button value='3' disabled>
        <FileAddFilled />
      </Button>
      <Button value='4' disabled>
        <FolderOpenFilled />
      </Button> */}
    </Group>
  );
}