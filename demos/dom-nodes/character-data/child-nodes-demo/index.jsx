import React from 'react';
import { GetterValue, Inspector } from 'mic-inspector';

export function ChildNodesDemo() {
  const text = document.createTextNode('abc');

  const appendChild = () => {
    text.appendChild(
      document.createTextNode('')
    );
  };

  return (
    <div>
      点击右侧省略号尝试给以下 TextNode 添加子节点：
      <GetterValue owner={null} value={appendChild} />
      <br />
      <br />
      <Inspector name='textNode' value={text} />
    </div>
  );
}