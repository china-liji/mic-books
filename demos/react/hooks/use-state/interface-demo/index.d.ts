interface useState {
  /**
   * useState 将会根据参数 initialState 来返回一个记忆化版本的状态值和一个更新该状态值的函数。
   * @param initialState 该状态值的初始值（该参数在代码同一位置，仅首次有效）。
   * @returns 一个状态值和一个更新该状态值的函数
   */
  <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];

  /**
   * useState 将会根据参数 initialState 来返回一个记忆化版本的状态值和一个更新该状态值的函数。
   * @returns 一个状态值和一个更新该状态值的函数
   */
  <S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>];
}