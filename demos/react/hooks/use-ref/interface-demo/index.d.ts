interface useRef {
  /**
   * useRef 返回一个可变引用对象。
   * @param initialValue 其 .current 属性的初始值（该参数在代码同一位置，仅首次有效）。
   * @returns 可变引用对象。
   */
  <T>(initialValue: T): React.MutableRefObject<T>;

  /**
   * useRef 返回一个可变引用对象（重载 - 返回 RefObject 形式，一般适用于 ref 属性，需启用 tsconfig 的 strictNullChecks 选项）。
   * @param initialValue 其 .current 属性的初始值（该参数在代码同一位置，仅首次有效）。
   * @returns 可变引用对象。
   */
  <T>(initialValue: T | null): React.RefObject<T>;

  /**
   * useRef 返回一个可变引用对象（重载 - 无参数形式）。
   * @returns 可变引用对象。
   */
  <T = undefined>(): React.MutableRefObject<T | undefined>;
}