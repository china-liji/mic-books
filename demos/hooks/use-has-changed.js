import { useRef } from 'react';

export default (value) => {
  const ref = useRef(value);
  // 进行对比，记录对比结果
  const result = ref.current !== value;

  // 记录当前值
  ref.current = value;
  // 返回对比结果
  return result;
};