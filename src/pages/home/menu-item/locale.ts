import { useMenuItemStyles } from './use-styles';

export const scrollIntoViewIfNeed = (path: string): void => {
  const itemElement = document.querySelector(`.${useMenuItemStyles.originalClassName as string}[data-path='${path}']`);

  if (!itemElement) {
    return;
  }

  const { top } = itemElement.getBoundingClientRect();

  if (top < 0 || top > document.documentElement.offsetHeight) {
    itemElement.scrollIntoView();
  }
};