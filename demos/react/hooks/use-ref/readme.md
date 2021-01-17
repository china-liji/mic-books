### 描述
`useRef` 返回一个可变引用对象，其 `.current` 属性初始化为传递的参数 - `initialValue`。返回的对象将被记忆化，在组件的整个生命周期内保持不变。值得注意的是，`useRef()` 不仅对 `ref` 属性有用，还能很方便地将任何可变值保持在对应引用的位置。

### 文档释义
```demo
import(interfaceDemo);
```

### 基础调用
```jsx
const numRef = useRef(1);
numRef.current++;

const strRef = useRef('abc');
strRef.current += 'd';

const arrRef = useRef([]);
arrRef.current.push('你好，中国');

const divRef = useRef(null);
<div ref={divRef} />;

const buttonRef = useRef();
<button ref={buttonRef} />;
```

### 有效场景
* 当需要记录一个 `值`，但不需要触发组件的更新时，可以使用 `useRef`。
```jsx
export function Demo() {
  const inputValueRef = useRef('');

  const onInputChange = ({ target }) => {
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

* 将 `useRef` 使用在 `html` 元素的 `ref` 属性上，可以用于记录一个元素。
```demo
import(elementRefDemo);
```

### 无效场景
`useRef` 无法是触发组件更新的，当需要触发组件的更新时，请使用 `useState`。
```demo
import(refVsStateDemo);
```