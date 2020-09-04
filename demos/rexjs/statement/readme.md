### 描述
`Statement` - `语句`，一般包含一个主 `表达式`。可拥有文档流的特性，主要用于处理该 `语句` 内所捕获的异常。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `FLOW_MAIN`: *number* - 文档流主流，也是默认流。
* `FLOW_BRANCH`: *number* - 文档流分支流，主要供”继承“关系使用，并无直接使用处。
* `FLOW_LINEAR`: *number* - 文档流线性分支流，“继承”至 `FLOW_BRANCH`，主要使用在 `if`、`else`、`switch` 等线性分支流语句上。
* `FLOW_CIRCULAR`: *number* - 文档流循环分支流，“继承”至 `FLOW_BRANCH`，主要使用在 `while`、`do while`、`for` 等循环分支流语句上。

### 属性
* `expression`: *Rexjs.Expression* - 所绑定的主表达式，当捕获异常时，如果该属性为 `null`，则不会进入 `try`、`catch` 方法的异常处理。
* `flow`: *number* - 文档流，默认值 `Rexjs.Statement.FLOW_MAIN`。
* `statements`: *Rexjs.Statements* - 该语句所处的语句块。
* `target`: *Rexjs.Statement* - 目标语句，适用于子语句记录绑定的主语句，通俗来说就是记录外层语句。

### 方法
* `bindingOf()`: *Rexjs.SyntaxTag* - 获取该语句 `try`、 `catch` 方法所需返回的默认绑定标签。
* `catch()`: *Rexjs.SyntaxTag* - 捕获处理异常，由 `mistakable` 性质的**语句**标签 或 `unexpected` 性质的标签所触发。一旦该方法返回标签，则解析器会认为 `异常被正确处理`，并使用该返回标签替代匹配标签继续解析；如果该方法未返回标签，那么会自动跳出该语句，进入目标语句（更外一层语句）的 `catch` 方法，即 `this.target.catch`，如果目标语句不存在，则会 `抛出语法错误`。
* `extractTo()`: *void* - 提取文本内容。
* `out()`: *Rexjs.Expression* - 跳出该语句，其中会将该语句所绑定的表达式状态，设置到目标语句所绑定的表达式状态上，并返回目标语句所绑定的表达式。
* `tagOf()`: *Rexjs.SyntaxTag* - 获取该语句 `try`、 `catch` 方法中所需使用到的标签，一般是指向实例化该语句的标签。
* `try()`: *Rexjs.SyntaxTag* - 尝试处理异常，由 `mistakable` 性质的**非语句**标签触发。一旦该方法返回标签，则解析器会认为 `异常被正确处理`，并使用该返回标签替代匹配标签继续解析；但，如果该方法并未返回标签，且没有跳出当前语句，则会 `抛出语法错误`；如果在该方法中跳出了该语句，那么会进入目标语句（更外一层语句）的 `try` 方法，即 `this.target.try`，如果目标语句不存在，则也会 `抛出语法错误`。

### Rexjs 中的语句
```inline-demo
import(typesDemo);
```
以上大多数 `语句` 为子语句、辅助语句，以用于辅助解析、捕获处理异常，由相关语法标签实例化，具有自身特性，并不会在 `语法树` 中留下任何痕迹。而 `语法树` 中的语句，是由相关 `语句块` 实例化，具有统一的性质。

### 更多内容
* [Statements](#/rexjs/statements)
* [Expression](#/rexjs/expression)
* [SyntaxTag](#/rexjs/syntax-tag)