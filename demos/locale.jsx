import React from 'react';
import { Inspector } from 'mic-inspector';

export const fitlerTypes = (constructor, indirect = false, owner = window, callback) => {
  const list = [];

  // 遍历 owner 属性名
  for (const name of Object.getOwnPropertyNames(owner).sort()) {
    const fn = owner[name];
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

export const renderTypes = (constructor, indirect = false, owner) => {
  const elements = [];

  fitlerTypes(constructor, indirect, owner, (name, prototype) => {
    elements.push(
      <Inspector key={name} name={name} value={prototype} />
    );
  });
  
  return elements;
};