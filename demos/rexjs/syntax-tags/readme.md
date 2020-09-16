### 描述
`SyntaxTags` - `语法标签列表`，它是一个伪数组，用于存放 `SyntaxTag`，并可以根据 `SyntaxTag` 的优先级进行排序。

### 观察
```inline-demo
import(watcherDemo);
```

### 属性
* `entrance`: *boolean* - 是否为入口标签列表，即解析时首次使用的那一个标签列表。
* `regexp`: *RegExp* - 将所有标签正则合并之后的正则表达式。注：该正则理应包含解析语言的所有语法（标识符、关键字、运算符等等）。

### 方法
* `delegate()`: *void* - 将一系列标签类托管给当前标签列表来实例化，并进行注册。
* `filter()`: *boolean* - 标签过滤处理，返回 `true`，则过滤该标签。
* `ready()`: *void* - 将所有标签准备就绪，即排序和初始化正则表达式，注意：这是个耗性能的方法。
* `register`: *void* - 注册添加语法标签，与 `push` 方法不同的是，`register` 会进过滤器，而 `push` 不会。

### 更多内容
* [SyntaxTag](#/rexjs/syntax-tag)