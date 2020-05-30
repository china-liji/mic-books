import { useRef } from 'react';

export default (value: unknown): boolean => {
  const ref = useRef(value);
  const result = ref.current !== value;

  ref.current = value;
  return result;
};