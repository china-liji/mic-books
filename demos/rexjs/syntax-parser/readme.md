### 描述
`SyntaxParser` - `语法解析器`，是整个语法解析最核心的部分，操作着最主要的解析逻辑，如：标签匹配、捕获异常、访问标签等等。

### 观察
```inline-demo
import(watcherDemo);
```

### 属性
* `details`: *Rexjs.SyntaxError* - 语法错误详细信息，默认值 `null`。
* `file`: *Rexjs.File* - 所解析的文件信息。
* `position`: *Rexjs.Position* - 所解析的代码位置信息。
* `regexp`: *Rexjs.SyntaxRegExp* - 解析时所依赖的语法正则。
* `statements`: *Rexjs.Statements* - 解析时所关联的主语句块，即全局语句块。
* `tagsMap`: *Rexjs.TagsMap* - 解析时所依赖的标签列表映射。

### 方法
* `build()`: *string* - 将解析后的语法生成字符串，并返回。
* `error()`：*void* - 抛出错误，该方法中会使用 `throw` 抛出异常，所以该方法应作为当前流程的最后一步使用。
* `parse()`: *void* - 开始解析语法文件。

### 更多内容
* [Statements](#/rexjs/statements)
* [Statement](#/rexjs/statement)
* [Expression](#/rexjs/expression)
* [SyntaxTag](#/rexjs/syntax-tag)