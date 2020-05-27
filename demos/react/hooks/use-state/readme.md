### 描述
`useState` 将会根据参数 `initialState` 来返回一个记忆化版本的状态值和一个更新该状态值的函数。

### TsDoc 释义
```ts
/**
 * 返回一个状态值和一个更新该状态值的函数。
 * @param initialState 该状态值的初始值。
 * @version 16.8.0
 */
function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
// convenience overload when first argument is ommitted
/**
 * 返回一个状态值和一个更新该状态值的函数。
 * @version 16.8.0
 */
function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
```

### 基础调用
```ts
const [state, setState] = useState(initialState);
const [num, setNum] = useState(0);
const [str, setStr] = useState('123');
```

### 更新机制
调用其 `更新函数`，可对 `状态值` 进行更新。
```demo
import(callSetStateDemo);
```

特殊说明：`更新函数` 自身并不受更新机制影响，所以不必将其纳入其他 `hooks` 的 `deps` 范围中。