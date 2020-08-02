interface useState {
  /**
   * useState 返回一个状态值和一个更新该状态值的函数。
   * @param initialState 该状态值的初始值（该参数在代码同一位置，仅首次有效）。
   * @returns 一个状态值和一个更新该状态值的函数
   */
  <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];

  /**
   * useState 返回一个状态值和一个更新该状态值的函数。（重载 - 无参数形式）
   * @returns 一个状态值和一个更新该状态值的函数
   */
  <S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>];
}