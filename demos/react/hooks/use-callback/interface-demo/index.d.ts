interface useCallback {
  /**
   * useCallback 将会根据一个内联函数参数 callback 来返回一个记忆化版本的 callback；它只会在依赖项 deps 发生变化时，才会更新、改变。
   * @param callback 需要记忆化的回调函数
   * @param deps 更新依赖
   * @returns 一个记忆化版本的 callback
   */
  <T extends (...args: unknown[]) => unknown>(callback: T, deps: unknown[]): T;
}