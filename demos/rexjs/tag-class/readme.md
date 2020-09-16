### 描述
`TagClass` - `标签性质类别`，其中包括“`无`”、“`表达式`”、“`表达式上下文`”、“`语句`”、“`语句起始`”以及“`语句结束`”。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `CLASS_NONE`: *number* - 无类别。
* `CLASS_STATEMENT`: *number* - 语句标签类别，一般不直接设置，而是用于判断“继承”关系。
* `CLASS_STATEMENT_BEGIN`: *number* - 语句起始标签类别，“继承”至 `CLASS_STATEMENT`。
* `CLASS_STATEMENT_END`: *number* - 语句结束标签类别，“继承”至 `CLASS_STATEMENT`。
* `CLASS_EXPRESSION`: *number* - 表达式标签类别，“继承”至 `CLASS_STATEMENT_BEGIN`，因为每一个表达式都可以作为语句的开始。
* `CLASS_EXPRESSION_CONTEXT`: *number* - 表达式上下文标签类别。

### 属性
* `expression`: *booelan* - 是否为表达式标签类别。
* `expressionContext`: `booelan` - 是否为表达式上下文标签类别。
* `statement`: *booelan* - 是否为语句标签类别。
* `statementBegin`: *booelan* - 是否为语句起始标签类别。
* `statementEnd`: *booelan* - 是否为语句结束标签类别。

### 更多内容
* [SyntaxTag](#/rexjs/syntax-tag)