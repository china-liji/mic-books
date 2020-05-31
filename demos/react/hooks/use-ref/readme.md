### 描述
`useRef` 返回一个可变引用对象，其 `.current` 属性初始化为传递的参数 - `initialValue`。返回的对象将被记忆化，在组件的整个生命周期内保持不变。值得注意的是，`useRef()` 不仅对 `ref` 属性有用，还能很方便地将任何可变值保持在对应引用的位置。

### TsDoc 释义
```ts
/**
 * useRef 返回一个可变引用对象。
 * @param initialValue 其 .current 属性的初始值（该参数在代码同一位置，仅首次有效）。
 * @version 16.8.0
 */
function useRef<T>(initialValue: T): MutableRefObject<T>;
/**
 * useRef 返回一个可变引用对象（重载 - 返回 RefObject 形式，一般适用于 ref 属性，需启用 tsconfig 的 strictNullChecks 选项）。
 * @param initialValue 其 .current 属性的初始值（该参数在代码同一位置，仅首次有效）。
 * @version 16.8.0
 */
function useRef<T>(initialValue: T | null): RefObject<T>;
/**
 * useRef 返回一个可变引用对象（重载 - 无参数形式）。
 * @version 16.8.0
 */
function useRef<T = undefined>(): MutableRefObject<T | undefined>;
```

### 基础调用
```tsx
const numRef = useRef(1);
numRef.current++;

const strRef = useRef('abc');
strRef.current += 'd';

const arrRef = useRef<string[]>([]);
arrRef.current.push('你好，中国');

const divRef = useRef<HTMLDivElement>(null);
<div ref={divRef} />;

const buttonRef = useRef<HTMLButtonElement>();
<button ref={buttonRef as React.RefObject<HTMLButtonElement>} />;
```

### 实例演示
该 `useRef` 实例是我们文档中较多引用到的自编 `hooks` 之一 - `useHasChanged`，用于判断某个值是否有变化。
```demo
import(useHasChangedDemo);
```