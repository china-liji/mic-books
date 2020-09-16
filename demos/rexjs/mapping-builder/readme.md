### 描述
`ContentBuilder` - `源码映射生成器`，用来生成 `sourceMap`。

### 观察
```inline-demo
import(watcherDemo);
```

### 静态属性
* `supported`: *boolean* - 是否支持生成 `sourceMap`。

### 属性
* `mappings`: *string* - 生成的 `sourceMap` 字符串。
* `position`: *Rexjs.MappingPosition* - 源码映射生成器中所记录的位置。

### 方法
* `appendContext()`: *void* - 追加内容上下文，同时会更新 sourceMap。
* `appendMappings`: *void* - 追加映射内容。
* `appendSpace()`: *void* - 追加空格。
* `appendString()`: *void* - 追加内容。
* `complete()`: *string* - 完成生成，返回结果。
* `newline()`: *void* - 追加新行，同时会更新 sourceMap。。

### 更多内容
* [ContentBuilder](#/rexjs/content-builder)
* [SyntaxParser](#/rexjs/syntax-parser)