/**
 * useCallback 将会根据一个内联函数参数 callback 来返回一个记忆化版本的 callback；它只会在依赖项 deps 发生变化时，才会更新、改变。
 * @param {Function} callback 需要记忆化的回调函数
 * @param {unknown[]} deps 更新依赖
 * @returns {Function} 一个记忆化版本的 callback
 */
function useCallback(callback, deps) {}