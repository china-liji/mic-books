### 描述
`TagType` - `标签正则捕获类型`，当正则匹配时候，会依据该类型进行判断，决定是否进入标签访问器或者进入异常处理。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `TYPE_NONE`: *number* - 无标签类型。
* `TYPE_MATCHABLE`: *number* - 可匹配的标签类型。
* `TYPE_UNEXPECTED`: *number* - 未捕获的标签类型。
* `TYPE_MISTAKABLE`: *number* - 可能会无解的标签类型，“继承”至 `TYPE_UNEXPECTED`。
* `TYPE_ILLEGAL`: *number* - 非法标签类型，“继承”至 `TYPE_UNEXPECTED`。

### 属性
* `illegal`: *boolean* - 是否为非法标签类型。
* `matchable`: *boolean* - 是否为可匹配的标签类型。
* `mistakable`: *boolean* - 是否为可能会无解的标签类型。
* `unexpected`: *boolean* - 是否为未捕获的标签类型。

### 更多内容
* [SyntaxTag](#/rexjs/syntax-tag)