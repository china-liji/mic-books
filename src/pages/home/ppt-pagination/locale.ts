import { useEffect, useRef } from 'react';
import { PreviewerMode } from '../previewer/types';

export const useKeyboardEvents = (mode: PreviewerMode, prevPage: VoidFunction, nextPage: VoidFunction): void => {
  const modeRef = useRef(mode);
  const prevPageRef = useRef(prevPage);
  const nextPageRef = useRef(nextPage);

  modeRef.current = mode;
  prevPageRef.current = prevPage;
  nextPageRef.current = nextPage;

  useEffect((): VoidFunction => {
    const onKeyUp = ({ keyCode }: KeyboardEvent): void => {
      if (modeRef.current !== PreviewerMode.Ppt) {
        return;
      }

      switch (keyCode) {
        // 左键
        case 37:
        // 上键
        case 38:
          prevPageRef.current();
          break;

        // 回车
        case 13:
        // 空格
        case 32:
        // 右键
        case 39:
        // 下键
        case 40:
          nextPageRef.current();
          break;
      }
    };

    document.addEventListener('keyup', onKeyUp);

    return (): void => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);
};