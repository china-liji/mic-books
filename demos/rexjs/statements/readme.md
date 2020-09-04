### 描述
`Statements` - `语句块`，又称 “语句列表”、 “语句集合” 等，可拥有作用域等特性。一个 `语句块` 可以包含一个或多个 `语句`。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `SCOPE_GLOBAL`: number - 全局作用域，默认作用域。
* `SCOPE_BLOCK`: number - 块级作用域，一般用于块级（大括号）语句块。
* `SCOPE_CLOSURE`: number - 闭包作用域，一般用于函数主体语句块。
* `SCOPE_LAZY`: number - 惰性闭包作用域，“继承” 至 `SCOPE_CLOSURE`，一般用于特殊的闭包处理使用。如：箭头函数主体闭包，因为箭头函数主体内部不能使用 `target`，具有局限性，所以我们将其闭包称之为惰性闭包作用域，即 `SCOPE_LAZY`。

### 属性
* `join`: *string* - 语句分隔符，默认值 `';'`，当提取列表中的语句时，用于两两语句拼接时的连接符，类似 `[].join(";")`。
* `length`: *number* - 列表长度，默认值 `0`，标志着语句的个数。
* `min`: *number* - 提取语句时，默认值 `0`，决定从第几个语句开始提取。
* `reference`: *string* - 所绑定的引用对象，默认值 `'this'`。
* `scope`: *number* - 作用域，默认值 `Rexjs.Statements.SCOPE_GLOBAL`。
* `statement`: *Rexjs.Statement* - 当前语句。
* `target`：*Rexjs.Statements* - 目标语句块，用于记录外层语句块。

### 方法
* `clear()`: *void* - 清空语句块。
* `extractTo()`: *void* - 提取文本内容。
* `initStatement()`: *Rexjs.Statement* - 初始化语句。
* `newStatement()`: *Rexjs.Statement* - 创建新语句。
* `splice()`: *Rexjs.Statement[]* - Array.prototype.splice。

### Rexjs 中的语句块
```inline-demo
import(typesDemo);
```

### 更多内容
* [Statement](#/rexjs/statement)
* [Expression](#/rexjs/expression)
* [SyntaxTag](#/rexjs/syntax-tag)