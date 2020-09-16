### 描述
`ContentBuilder` - `内容生成器`，主要是用于解析时，拼接源码或解析后的代码。

### 观察
```inline-demo
import(watcherDemo);
```

### 属性
* `result`: *string* - 内容生成结果。

### 方法
* `appendContext()`: *void* - 追加内容上下文。
* `appendSpace()`: *void* - 追加空格。
* `appendString()`: *void* - 追加内容。
* `complete()`: *string* - 完成生成，返回结果。
* `newline()`: *void* - 追加新行。

### 更多内容
* [MappingBuilder](#/rexjs/mapping-builder)
* [SyntaxParser](#/rexjs/syntax-parser)