(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{421:function(n,t,e){"use strict";e.r(t),e.d(t,"syntaxTagsMapDemo",(function(){return r}));var a=e(0),s=e.n(a),i=e(172),o=e(179),p=e.n(o);var r=new(e(74).a)([],(function(){var n=Object(a.useMemo)((function(){return new p.a.ECMAScriptTagsMap}),[]);return s.a.createElement(i.Inspector,{name:"ECMAScriptTagMaps",value:n})}),!1,!0);t.default="### 描述\n`解析机制` 主导着整个解析流程。如果要求解析的性能要高、可读性要好、可拓展性要大，完全与 `解析机制` 息息相关；它就像贯穿整个城市的道路，道路规划的好不好，决定着市容市貌以及到达目的地的时间与便捷性。\n\n### 区别与其他解析器\n与其他解析器最大的、最主要的、最基础的区别，也就是在于 `正则表达式` 的应用上：\n* 其他解析器，是利用 `字符` 进行判断，如什么字符后面应该接什么字符，这样太死板、解析工作量巨大，甚至文件体积也更大。\n* `Rexjs` 的核心解析机制采用的是 `正则表达式`。因为正则已经将字符衔接的逻辑问题完美解决了，所以没必要再花大篇代码去做重复的事情，这也是成品解析器文件体积整体都较小的主要原因之一。\n\n### 解析机制平面示意图\n这是个整体的解析机制图解，它描述了一个解析器从开始到结束、从主干到分支、再由分支回流主干、最后进入循环的解析生命周期。\n```txt\n      1. 初始化解析器\n      ↓\n      2. 编译正则表达式列表\n      ↓\n      3. 传入代码\n      ↓\n→  →  4. 正则匹配代码，核对语法上下文，校验语法\n      ↓\n↑     * → 5.1 匹配不到任何结果，报错，解析结束\n      ↓\n↑     5.2 得到对应语法标签\n      ↓\n↑     * →   →   →   →   →\n      ↓                  ↓\n↑     6.1 如果标签正常     6.2 如果标签异常\n      ↓                  ↓\n↑                        7. 捕获及处理异常，再次校验语法\n      ↓                  ↓\n↑                        * → 8.1 确认是非法异常，报错，解析结束\n      ↓                  ↓\n↑                        8.2 纠正异常，得到正确的标签\n      ↓                  ↓\n↑     *  ←  ←  ←  ←  ←  ←\n      ↓\n↑     9. 访问标签（进入标签访问器，可初始化及设置语句、表达式等相关操作）\n      ↓\n↑     10. 获得新的标签列表映射（通过访问标签，可得到下一个“应该匹配”的标签列表映射）\n      ↓\n↑     11. 重置正则（通过标签列表映射，可得到一个相关正则表达式）\n      ↓\n←  ←  ←\n```\n\n### 解析机制源码\n源码摘自于：`SyntaxParser.parse`：\n```js\n/**\n * 开始解析\n * @param {Rexjs.File} file - 文件信息\n * @param {Rexjs.SyntaxTagsMap} tagsMap - 标签列表映射\n * @param {Rexjs.Statements} statements - 初始化的语句块\n */\nparse(file, tagsMap, statements) {\n  // 获取入口标签列表\n  let tags = tagsMap.entranceTags;\n\n  // 初始化解析器相关的文档位置\n  const position = this.position = new Position(0, 0);\n\n  // 设置 tagsMap\n  this.tagsMap = tagsMap;\n  // 记录文件\n  this.file = file;\n  // 清空错误信息\n  this.details = null;\n  // 初始化语句块\n  this.statements = statements;\n\n  // 执行正则\n  this.regexp.exec(\n    tags.regexp,\n    file.source,\n    (content, tagIndex) => {\n      // 根据标签索引，获取对应内容相关标签\n      let tag = tags[tagIndex];\n\n      // 初始化语法上下文\n      const context = new Context(\n        tag,\n        content,\n        new Position(\n          position.line,\n          position.column\n        )\n      );\n\n      // 增加列数\n      position.column += content.length;\n\n      // 如果标签异常，即不应该被捕获\n      if(tag.type.unexpected){\n        // 进入异常捕获处理\n        context.tag = tag = toTryCatch(this, context, tag, this.statements);\n      }\n\n      // 获取语句块，以防在异常捕获处理中被修改过\n      statements = this.statements;\n\n      // 访问标签\n      tag.visitor(this, context, statements.statement, statements);\n\n      // 获取下一步需要匹配的标签列表\n      tags = tag.require(tagsMap, tags, this);\n      // 返回下一步需要匹配的正则\n      return tags.regexp;\n    }\n  );\n}\n```\n\n### 正则应用机制\n我们先看一下正则与标签列表之间的绑定关系：\n\n1. 每个 `语法标签` 上，都会绑定一个相关 `正则表达式`；\n2. 每个 `语法标签列表` 上，都会绑定一个解析时刻相关的所有 `语法标签`；\n3. 每个 `语法标签列表映射` 上，都会绑定整个解析器所相关所有 `语法标签列表`，也就是说，一个语言，一个解析器，只有一个语法标签列表映射；\n4. 初始化 `语法标签列表映射` 时，会对每一个 `语法标签列表` 中的 `语法标签` 进行排序，根据其 `正则` 匹配的可能性越大、正确性越高，则越排在集合前面，以提高匹配性能。\n>\n\n以下是 `Rexjs` 解析 `ES6` 的 `语法标签列表映射`，其中 `tag.type` 为标签 `正则表达式` 的匹配优先级 `matchable` > `mistakable` > `unexpected` > `illegal`：\n\n```demo\nimport(syntaxTagsMapDemo);\n```\n\n### 更多内容\n* [语法树](#/rexjs/syntax-tree)"}}]);