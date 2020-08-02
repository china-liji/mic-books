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

### 示例
该 `useRef` 实例是我们文档中较多引用到的自编 `hooks` 之一 - `useHasChanged`，用于判断某个值是否有变化。
```demo
import(useHasChangedDemo);
```