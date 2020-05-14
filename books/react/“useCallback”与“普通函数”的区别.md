# “useCallback” 与 “普通函数” 的区别.md

### 基础代码示例
普通函数：
```jsx
function Element({ onDivClick }) {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
    onDivClick && onDivClick();
  };

  return (<div onClick={onClick} />);
}
```

`useCallback`：
```jsx
function Element({ onDivClick }) {
  const [num, setNum] = useState(0);

  const callback = () => {
    setNum(num + 1);
    onDivClick && onDivClick();
  };

  const onClick = useCallback(callback, [onDivClick]);

  return (<div onClick={onClick} />);
}
```

### 区别


1. 缓存
2. callback 闭包内部变量是第一次创建时的变量，需要用 [] 来更新 callback。当callback里缓存的变量，应该加入到[]中
3. 不与组件上下文相关的方法，建议组件外部定义: methods
4. 函数需要引用组件上下文变量时，但是不以props形式传递给其他组件，应该用 普通函数