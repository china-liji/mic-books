(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{424:function(n,e,a){"use strict";a.r(e),a.d(e,"watcherDemo",(function(){return p}));var t=a(0),r=a.n(t),o=a(172),i=a(176),s=a.n(i);var p=new(a(74).a)([],(function(){return r.a.createElement("div",null,r.a.createElement(o.Inspector,{name:"Rexjs.SyntaxTags",value:s.a.SyntaxTags.prototype}))}));e.default="### 描述\n`SyntaxTags` - `语法标签列表`，它是一个伪数组，用于存放 `SyntaxTag`，并可以根据 `SyntaxTag` 的优先级进行排序。\n\n### 观察\n```inline-demo\nimport(watcherDemo);\n```\n\n### 属性\n* `entrance`: *boolean* - 是否为入口标签列表，即解析时首次使用的那一个标签列表。\n* `regexp`: *RegExp* - 将所有标签正则合并之后的正则表达式。注：该正则理应包含解析语言的所有语法（标识符、关键字、运算符等等）。\n\n### 方法\n* `delegate()`: *void* - 将一系列标签类托管给当前标签列表来实例化，并进行注册。\n* `filter()`: *boolean* - 标签过滤处理，返回 `true`，则过滤该标签。\n* `ready()`: *void* - 将所有标签准备就绪，即排序和初始化正则表达式，注意：这是个耗性能的方法。\n* `register`: *void* - 注册添加语法标签，与 `push` 方法不同的是，`register` 会进过滤器，而 `push` 不会。\n\n### 更多内容\n* [SyntaxTag](#/rexjs/syntax-tag)"}}]);