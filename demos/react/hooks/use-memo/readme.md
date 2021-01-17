### 描述
`useMemo` 会根据计算函数 `factory` 的执行结果，返回一个记忆化的计算值。它只会在依赖项 `deps` 发生变化时，才会重新计算。  

> 
* `useMemo` 具有记忆化 - 当 `deps` 不发生变化时，无论计算函数所关联的上下文变量如何变化，其计算值都不会发生改变。
* `useMemo` 可避免额外的性能消耗 - 当 `deps` 不发生变化时，无论组件如何频繁刷新，都不会调用其计算函数，以规避许多重复的计算消耗。

### 文档释义
```demo
import(interfaceDemo);
```

### 基础调用
```js
const refreshKey = useMemo(factory, deps);

const refreshKey1 = useMemo(() => {
  return Date.now();
}, []);

const refreshKey2 = useMemo(() => {
  return Date.now();
}, [dep1, dep2]);
```

### 更新机制
只有当 `依赖项（deps）` 发生变化时，`useMemo` 才会更新。
```demo
import(depsDemo);
```
注意事项：

1. 计算函数内部所引用的 `外部变量`，多数情况下都需要加入 `deps` 中，如上例中的变量 `times`。
2. 在 `deps` 频繁更新的情况下，**不建议**使用 `useMemo`，否则依赖判断机制将会造成更多的性能消耗。

### 有效场景
* 依赖的计算 - 当计算值需要根据某些变量的改变而重新计算时，理应将其计算逻辑放入 `useMemo` 的计算函数之中，并将那些会变化的变量，作为 `useMemo` 的 `deps` 参数传入。

```js
export function Demo({ dataList }) {
  const count = useMemo(() => {
    let count = 0;

    for (const { value } of dataList) {
      count += value;
    }

    return count;
  }, [dataList]);
}
```

* 复杂的计算 - 当伴有复杂的计算时，不管是否有 `deps`，都理应将其计算逻辑放入 `useMemo` 的计算函数之中，以减少组件渲染时不必要的额外消耗。

```js
export function Demo({ defaultText }) {
  // defaultText 只在初始化时使用一次，所以不需要放入 deps
  const defaultTextWidth = useMemo(() => {
    return document.createElement('canvas').getContext('2d').measureText(defaultText).width;
  }, []);
}
```

### 无效场景
由于计算函数 `factory` 的创建与依赖 `deps` 的判断机制，都会产生一定的性能消耗。所以在以下情况，应避免使用 `useMemo`：

* 无关上下文的固定计算 - 没有上下文依赖且始终返回固定值，这种情况下不需要使用 `useMemo`。
```demo
import(uncontextDemo);
```

* 简单的计算 - 当计算十分简单时，耗能可能比计算函数的创建还低时，这种情况下不需要使用 `useMemo`。
```js
function Demo({ text, before = '"', after = before}) {
  let fullText;

  // ❌ 非理想的写法
  fullText = useMemo(() => {
    return 'full text:' + before + text + after;
  }, [text, before, after]);

  // ✅ 理想的写法
  fullText = 'full text:' + before + text + after;
}
```

* 频繁更新的 `deps` - 当 `deps` 频繁更新，相当于组件的每次渲染都会重新计算，这种情况下不需要使用 `useMemo`。
```js
// 如果未提供 time，每次渲染都会获取当前时间
function Demo({ time = Date.now() }) {
  let year;

  // ❌ 非理想的写法
  year = useMemo(() => {
    return new Date(time).getFullYear();
  }, [time]);

  // ✅ 理想的写法
  year = new Date(time).getFullYear();
}
```