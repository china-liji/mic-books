### 描述
`Expression` - `表达式`，是由数字、变量、运算符等以能求得结果的组合。一个表达式，可能包含一个或多个子表达式，它是语句与语法内容（`语法标签`）的沟通桥梁。。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `STATE_NONE`: *number* - 无状态。
* `STATE_EXPRESSION_END`: *number* - 表达式结束状态，表示当前表达式是一个独立完整的表达式。
* `STATE_STATEMENT_ENDABLE`: *number* - 语句可结束状态，“继承”至 `STATE_EXPRESSION_END`。表示当前语句已经是一个完整语句，就算没有明确的语句分隔符（如分号），后面也可以接其他语句。一般由换行符进行设定，出现该状态的情况下，理应满足 `ASI机制`。
* `STATE_STATEMENT_END`: *number* - 语句结束状态，“继承”至 `STATE_STATEMENT_ENDABLE`。表示当前语句已经是一个完整语句，就算不换行，后面也可以接其他语句，一般由分号进行设定。当开始编译，进行语句连接时，应该在两语句之间加语句连接符，如分号等。
* `STATE_STATEMENT_ENDED`: *number* - 语句已结束状态，“继承”至 `STATE_STATEMENT_END`。表示当前语句已经是一个完整语句，就算不换行，后面也可以接其他语句（如：`class A {} 123`），一般直接在表达式的属性中以只读形式设置。当开始编译，进行语句连接时，不需要再加语句连接符，如分号等。

### 属性
* `context`: *Rexjs.Context* - 标签在语法文件中所匹配的上下文。
* `default`: *boolean* · *readOnly* - 获取是否为默认表达式。
* `empty`: *boolean*· *readOnly* - 获取是否为空表达式。
* `state`: *number* - 表达式状态。

### 方法
* `compileTo()`: *void* - 提取并编译表达式文本内容，即需要将高版本语法转换为低版本语法，一般编译条件由其他表达式的 `extractTo` 或 `compileTo` 方法内部确定，并且需要主动调用。
* `extractTo`: *void* - 提取表达式文本内容，此方法也可以编译表达式，但一般编译条件是由该方法内部确定，是默认的、自动的提取方式。

### Rexjs 中的表达式
```inline-demo
import(typesDemo);
```

### 更多内容
* [Statements](#/rexjs/statements)
* [Statement](#/rexjs/statement)
* [SyntaxTag](#/rexjs/syntax-tag)