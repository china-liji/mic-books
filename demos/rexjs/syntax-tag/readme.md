### 描述
`SyntaxTag` - `语法标签`，决定着代码匹配的内容、类型、方式以及优先级，并且是 `表达式` 与 `语句` 关联的重要媒介。

### 观察
```inline-demo
import(watcherDemo);
```

### 属性
* `$class`: *number* - 标签“分类”的原始值，重写该属性，可用于标签实例化时计算 `class` 属性。
* `$type`: *number* - 标签“类型”的原始值，重写该属性，可用于标签实例化时计算 `type` 属性。
* `binding`: *Rexjs.SyntaxTag* - 获取绑定的标签，该标签列表一般是用于语句的 `try`、`catch` 的返回值。
* `class`: *Rexjs.TagClass* - 标签性质定位的类别。
* `order`: *number* - 标签排序，用于解决多个标签正则对同一段内容的匹配冲突。该属性数值越大，在标签列表中的排序越靠前、正则匹配的优先级越高。如：`===` 所对应的标签 `order` 值为 `203`，而 `==` 所对应的标签 `order` 值为 `202`，前者比后者大，所以当代码内容出现 `===` 时，是不会优先匹配 `==` 的。
* `regexp`: *RegExp* - 标签正则，用于决定代码匹配的内容。
* `throw`: *string* - 当解析该标签遇到无法处理的异常时，所抛出的标志，默认值 `'token'`。默认抛出形式为 `Unexpected ${tag.throw} ${content}`，如：捕获到错误的小括号 `'('`，则抛出 `Unexpected token (`。
* `type`: *Rexjs.TagType* - 标签正则捕获类型。

### 方法
* `extractTo()`: *void* - 提取文本内容。
* `getBoundExpression()`: *Rexjs.Expression* - 获取绑定的表达式，一般在子类使用父类逻辑，而不使用父类表达式的情况下使用。
* `getBoundStatement()`: *Rexjs.Statement* - 获取绑定的语句，一般在子类使用父类逻辑，而不使用父类语句的情况下使用。
* `getBoundStatements()`: *Rexjs.Statements* - 获取绑定的语句块，一般在子类使用父类逻辑，而不使用父类语句块的情况下使用。
* `require()`: *Rexjs.SyntaxTags* - 获取此标签接下来所需匹配的标签列表。特殊说明：该方法，理应不处理任何逻辑：
  * 组合性标签，按照组合形式得到标签列表映射。如：`class ClassName extends SuperClass {...`，这是固定组合，按照顺序得到对应标签列表即可。
  * 非组合性标签，按照表达式衔接逻辑得到标签列表映射：“表达式标签” -> “表达式上下文标签” -> “表达式标签” -> “表达式上下文标签” -> ... -> “表达式标签”，最后以“表达式标签”结束语句；如：`a + b / c`，`a`、`b`、`c` 为“表达式标签”，`+`、`/` 为“表达式上下文标签”。
* `visitor()`: *void* - 标签访问器，可初始化或设置表达式、语句等相关操作。这是一个重要的枢纽，用于关联上下文、表达式、语句、语句块之间的关系。

### Rexjs 中的语法标签
```inline-demo
import(typesDemo);
```

### 更多内容
* [Statements](#/rexjs/statements)
* [Statement](#/rexjs/statement)
* [Expression](#/rexjs/expression)
* [SyntaxTags](#/rexjs/syntax-tags)