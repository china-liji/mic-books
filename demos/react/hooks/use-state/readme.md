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
`状态值` 的初始值决定于 `useState` 的参数，其后无论 `useState` 的参数为任何值，都不会改变当前的 `状态值`，除非调用 `更新函数`，才可对 `状态值` 进行更新。
```demo
import(updateDemo);
```

### 更新函数的唯一性
`更新函数` 具有唯一性，其自身不受更新机制而变化，所以不必将其纳入其他 `hooks` 的 `deps` 范围中。
```demo
import(uniqueSetterDemo);
```

### 有效场景
当需要记录或改变 `状态值`，以触发组件的更新时，可以使用 `useState`。
```demo
import(triggerUpdateDemo);
```

### 无效场景
`useState` 的目的是修改状态以触发组件的更新，如果组件不需要更新或者无法导致组件的更新，都属于无效的调用，一般有以下几种情形：

* 当只需要记录或改变一个 `值`，却不需要更新组件时，使用 `useRef` 以代替 `useState`。
```jsx
function Demo() {
  // ❌ 非理想的写法
  const [inputValue, setInputValue] = useState('');
  // ✅ 理想的写法
  const inputValueRef = useRef('');

  const onInputChange = ({ target }) => {
    // ❌ 非理想的写法
    setInputValue(target.value);

    // ✅ 理想的写法
    inputValueRef.current = target.value;
  };

  const sendToServer = () => {
    const http = new XMLHttpRequest();

    http.open('get', `url?text=${inputValueRef.current}`, true);
    http.send();
  };

  return (
    <div>
      <input onChange={onInputChange} />
      <button onClick={sendToServer}>发送</button>
    </div>
  );
}
```

* `值类型` 的 `状态值`，当设置的 `新值` 与 `旧值` 一致时，则无法触发组件的更新，属于无效调用。
```demo
import(valueTypeDemo);
```

* `引用类型` 的 `状态值`，当设置新值时，如果只修改了 `引用对象` 的属性，而并没有改变 `对象的引用`（没有设置新的对象），也是无法触发组件的更新，属于无效调用。
```demo
import(refTypeDemo);
```

* 同一阶段，多次调用，以最后一个 `新值` 为准，并与 `旧值` 对比，如果一致，还是无法触发组件的更新，属于无效调用。
```demo
import(lastValueDemo);
```