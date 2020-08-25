import React from 'react';
import { Inspector } from 'mic-inspector';

export const fitler = (constructor, indirect = false, callback) => {
  const list = [];

  // 遍历 window 属性名
  for (const name of Object.getOwnPropertyNames(window).sort()) {
    const fn = window[name];
    const { prototype } = fn || {};

    switch (true) {
      // 如果不是函数
      case typeof fn !== 'function':
      // 如果没有 prototype 属性
      case !prototype:
      // 如果 prototype 不是 constructor 的实例
      case !(prototype instanceof constructor):
        continue;
    }

    // 判断是否为直接子类或间接子类
    if (Object.getPrototypeOf(prototype) === constructor.prototype ? !indirect : indirect) {
      // 添加堆栈
      list.push(prototype);
      // 指定回调
      callback && callback(name, prototype);
    }
  }
  
  return list;
};

export const renderTypes = (constructor, indirect = false) => {
  const elements = [];

  fitler(constructor, indirect, (name, prototype) => {
    elements.push(
      <Inspector key={name} name={name} value={prototype} />
    );
  });
  
  return elements;
};