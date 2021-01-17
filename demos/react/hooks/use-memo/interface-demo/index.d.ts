interface useMemo {
  /**
   * useMemo 会根据计算函数 factory 的执行结果，返回一个记忆化的计算值。它只会在依赖项 deps 发生变化时，才会重新计算。
   * @param factory 计算函数
   * @param deps 更新依赖
   * @returns 一个记忆化的计算值
   */
  <T>(factory: () => T, deps: unknown[] | undefined): T;
}