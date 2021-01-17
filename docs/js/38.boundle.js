(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{424:function(n,e,t){"use strict";t.r(e),t.d(e,"watcherDemo",(function(){return i}));var a=t(0),s=t.n(a),r=t(172),o=t(176);var i=new(t(74).a)([],(function(){return s.a.createElement("div",null,s.a.createElement(r.Inspector,{name:"Rexjs.SyntaxParser",value:o.a.SyntaxParser.prototype}))}));e.default="### 描述\n`SyntaxParser` - `语法解析器`，是整个语法解析最核心的部分，操作着最主要的解析逻辑，如：标签匹配、捕获异常、访问标签等等。\n\n### 观察\n```inline-demo\nimport(watcherDemo);\n```\n\n### 属性\n* `details`: *Rexjs.SyntaxError* - 语法错误详细信息，默认值 `null`。\n* `file`: *Rexjs.File* - 所解析的文件信息。\n* `position`: *Rexjs.Position* - 所解析的代码位置信息。\n* `regexp`: *Rexjs.SyntaxRegExp* - 解析时所依赖的语法正则。\n* `statements`: *Rexjs.Statements* - 解析时所关联的主语句块，即全局语句块。\n* `tagsMap`: *Rexjs.TagsMap* - 解析时所依赖的标签列表映射。\n\n### 方法\n* `build()`: *string* - 将解析后的语法生成字符串，并返回。\n* `error()`：*void* - 抛出错误，该方法中会使用 `throw` 抛出异常，所以该方法应作为当前流程的最后一步使用。\n* `parse()`: *void* - 开始解析语法文件。\n\n### 更多内容\n* [Statements](#/rexjs/statements)\n* [Statement](#/rexjs/statement)\n* [Expression](#/rexjs/expression)\n* [SyntaxTag](#/rexjs/syntax-tag)"}}]);