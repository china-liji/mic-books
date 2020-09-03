import React from 'react';
import { Tag } from 'antd';
import { PrimaryTag } from './types';
import { Language } from '@/src/language/types';
import { Blue } from '@/src/app/theme/color';

const colors = ['magenta', 'volcano', 'blue', 'geekblue', 'purple', 'cyan', 'orange', 'red'];

export const getTagInfo = (tag: string, { menu: { tag: translation } }: Language): [string, string, boolean] => {
  let color: string;
  let opacity = true;

  block:
  {
    switch (tag) {
      case PrimaryTag.Knowledge:
        color = Blue.L1;
        tag = `👍 ${translation.knowledge}`;
        opacity = false;
        break block;

      case PrimaryTag.Mit:
        tag = translation.mit;
        break;

      case PrimaryTag.Vs:
        tag = translation.vs;
        break;
  
      default:
        break;
    }

    let sum = 0;

    for (const letter of tag.match(/(?:^[\s\S])|[A-Z]/g) || [] as string[]) {
      sum += +letter.charCodeAt(0).toString(8).substr(-1);
    }

    color = colors[sum.toString(8).substr(-1)] as string;
  }

  return [color, tag, opacity];
};

export const renderTags = (tags: string[], language: Language): React.ReactElement[] => {
  return tags.map((tag: string, index: number): React.ReactElement => {
    const [color, text, opacity] = getTagInfo(tag, language);

    return <Tag key={index} data-opacity={opacity} title={text} color={color}>{text}</Tag>;
  });
};