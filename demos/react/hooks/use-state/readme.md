### 描述
`useState` 将会根据参数 `initialState` 来返回一个记忆化版本的状态值和一个更新该状态值的函数。

### 文档释义
```demo
import(interfaceDemo);
```

### 基础调用
```js
const [state, setState] = useState(initialState);
const [num, setNum] = useState(0);
const [str, setStr] = useState('123');
const [anchor, setAnchor] = useState<HTMLButtonElement>();
```

### 更新机制
调用其 `更新函数`，可对 `状态值` 进行更新。
```demo
import(callSetStateDemo);
```

### 更新函数的唯一性
`更新函数` 具有唯一性，其自身不受更新机制而变化，所以不必将其纳入其他 `hooks` 的 `deps` 范围中。
```demo
import(compareSetterDemo);
```

### 无效的调用
`值类型` 或 `引用类型` 的状态值，只要设置的 `新值` 与 `旧值` 一致，那么便不会触发更新。
```demo
import(ineffectiveCallDemo);
```