### 描述
`useCallback` 将会根据一个内联函数参数 `callback` 来返回一个记忆化版本的 `callback`，它只会在依赖项 `deps` 发生变化时，才会更新、改变。

### 文档释义
```demo
import(interfaceDemo);
```

### 基础调用
```js
const cb = useCallback(callback, deps);
const cb1 = useCallback(() => {}, []);
const cb2 = useCallback(() => {}, [dep1, dep2]);
```

### 更新机制
只有当 `依赖项（deps）` 发生变化时，`useCallback` 才会更新。
```demo
import(depsDemo);
```
注意事项：

1. 函数内部所引用的 `外部变量`，多数情况下都需要加入 `deps` 中，如上例中的变量 `times`；因为是记忆化的函数，如果没有加入 `deps`，那么函数的 `变量引用`，不会随 `外部变量` 的更新而更新，直到下一次 `useCallback` 的更新；
2. 在 `deps` 频繁更新的情况下，**不建议**使用 `useCallback`，否则依赖判断机制及函数更新会造成更多的性能消耗。

### 内联函数

使用 `useCallback`，其内联函数参数 `callback` 依然会随组件的每次更新而创建，这是一个 `耗性能` 的行为。
```demo
import(inlineFuncDemo);
```

针对优化这个 `耗性能` 问题，可以将 `非关联上下文` 的内联函数，提取到 `组件外部` 或 `其他文件` 中，这样不仅能优化性能，还能将部分逻辑代码分离，使代码更简单、整洁。
```demo
import(outerFuncDemo);
```

### 有效场景
* `useCallback` 函数被子组件 `deps` 所依赖，即子组件需根据该函数的更新，从而进行某些特定操作。
```demo
import(depByChildDemo);
```

* 配合 `React.memo` 使用，以避免子组件随父组件的频繁刷新；类似 `React.Component` 的 `shouldComponentUpdate` 机制。
```demo
import(memoUpdateDemo);
```

### 无效场景
当函数不需要加入到任何其他 `hooks` 的 `deps` 中，也没有配合 `React.memo` 使用的话，不需要使用 `useCallback` - 因为没有使用到函数记忆化的需求，反而会造成额外的性能消耗，如：

* 直接使用在 `HTMLElement` 的事件上；
```jsx
export function Demo({ text }) {
  // ❌ 非理想的写法
  const onButtonClick = useCallback(() => {
    console.log(text);
  }, [text]);

  // ✅ 理想的写法
  const onButtonClick = () => {
    console.log(text);
  };

  return (
    <button onClick={onButtonClick}>点击</button>
  );
}
```

* 在其他内联函数中直接调用该函数；
```jsx
export function Demo() {
  // ❌ 非理想的写法
  const callServer = useCallback(() => {
    // ...
  }, []);

  // ✅ 理想的写法
  const callServer = () => {
    // ...
  };

  const onButtonClick = () => {
    // ...
    callServer();
    // ...
  };

  return (
    <button onClick={onButtonClick}>点击</button>
  );
}
```

* 直接使用在自定义或第三方组件的非依赖性回调函数上；
```demo
import(undepsDemo);
```

* 等等