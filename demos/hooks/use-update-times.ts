import { useRef, useEffect } from 'react';

export default (): number => {
  const ref = useRef(1);

  /**
   * 不能直接使用 return ++ref.current，
   * 因为在某些情况下，进了渲染函数，不代表组件会被更新，比如：
   * const [num, setNum] = useState(0);
   * ...
   * setNum(1); setNum(2); setNum(0);
   * 连续的 setNum，最后 num 还是等于 0，并未变化，
   * 这会导致进入组件的渲染函数，但其实组件不会被更新。
   * 所以，利用 useEffect 才能表明组件是否被更新。
   */
  useEffect((): void => {
    ref.current++;
  }, [Math.random()]);
  
  return ref.current;
};