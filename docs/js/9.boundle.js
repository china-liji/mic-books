(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{172:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t){if(this.name=e,this.source=n,!t){var a=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=a?a[1]:""}this.type=t}},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return i}));var a=t(0),r=t.n(a),o=t(173),c=function(e,n,t){void 0===n&&(n=!1);for(var a=[],r=0,o=Object.getOwnPropertyNames(window).sort();r<o.length;r++){var c=o[r],i=window[c],u=(i||{}).prototype;switch(!0){case"function"!=typeof i:case!u:case!(u instanceof e):continue}(Object.getPrototypeOf(u)===e.prototype?!n:n)&&(a.push(u),t&&t(c,u))}return a},i=function(e,n){void 0===n&&(n=!1);var t=[];return c(e,n,(function(e,n){t.push(r.a.createElement(o.Inspector,{key:e,name:e,value:n}))})),t}},401:function(e,n,t){"use strict";t.r(n),t.d(n,"watcherDemo",(function(){return d})),t.d(n,"descendantsDemo",(function(){return s})),t.d(n,"subsDemo",(function(){return m})),t.d(n,"childNodesDemo",(function(){return l}));var a=t(74),r=t(0),o=t.n(r),c=t(177),i=t(173);var u=t(172),d=new a.a([],(function(){return o.a.createElement("div",null,o.a.createElement(i.Inspector,{name:"CharacterData",value:CharacterData.prototype}),o.a.createElement(i.Inspector,{name:"ownPropertyNames",value:Object.getOwnPropertyNames(CharacterData.prototype).sort()}))})),s=new a.a([],(function(){return o.a.createElement("div",null,o.a.createElement(i.Inspector,{name:"list",value:Object(c.a)(CharacterData,!0)}))}),!1,!0),m=new a.a([],(function(){return o.a.createElement("div",null,Object(c.b)(CharacterData))}),!1,!0),l=new a.a([new u.a("index.jsx","import React from 'react';\nimport { GetterValue, Inspector } from 'mic-inspector';\n\nexport function ChildNodesDemo() {\n  const text = document.createTextNode('abc');\n\n  const appendChild = () => {\n    text.appendChild(\n      document.createTextNode('')\n    );\n  };\n\n  return (\n    <div>\n      点击右侧省略号尝试给以下 TextNode 添加子节点：\n      <GetterValue owner={null} value={appendChild} />\n      <br />\n      <br />\n      <Inspector name='textNode' value={text} />\n    </div>\n  );\n}")],(function(){var e=document.createTextNode("abc");return o.a.createElement("div",null,"点击右侧省略号尝试给以下 TextNode 添加子节点：",o.a.createElement(i.GetterValue,{owner:null,value:function(){e.appendChild(document.createTextNode(""))}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(i.Inspector,{name:"textNode",value:e}))}),!1,!0);n.default="### 描述\n`CharacterData` - 字符数据节点，它是一种最小的节点，不能包含其他节点，仅供字符数据。在 `web` 网页中，你所能复制的一切文本信息都是字符数据节点。\n\n### Extends\n[Node](#/dom-nodes/node)\n\n### 观察\n```inline-demo\nimport(watcherDemo);\n```\n\n### 字符数据节点的能力\n顾名思义，字符数据节点拥有 `操作` 字符数据的能力，如：\n* 增 `CharacterData.appendData`\n* 删 `CharacterData.deleteData`\n* 改 `CharacterData.replaceData`\n* 插 `CharacterData.insertData`\n* 截 `CharacterData.substringData`\n\n### 无子节点\n由于不能包含其他节点，所以字符数据节点永远没有子节点，子节点个数为 `0`。\n```demo\nimport(childNodesDemo);\n```\n\n### HTML 与 XML 中的字符数据节点类型\n* `HTML` 中的字符数据节点类型：\n  * `Comment`\n  * `Text`\n* `XML` 中的字符数据节点类型：\n  * `CDATASection`\n  * `Comment`\n  * `ProcessingInstruction`\n  * `Text`\n\n### 基础字符数据节点类型\n分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `CharacterData`。\n```inline-demo\nimport(subsDemo);\n```\n\n### 其他字符数据节点类型\n分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `CharacterData`。\n```inline-demo\nimport(descendantsDemo);\n```\n\n### 更多内容\n* [Node](#/dom-nodes/node)\n* [Element](#/dom-nodes/element)"}}]);