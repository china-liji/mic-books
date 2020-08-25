(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{175:function(n,e,t){"use strict";t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return i}));var o=t(0),r=t.n(o),d=t(172),a=function(n,e,t){void 0===e&&(e=!1);for(var o=[],r=0,d=Object.getOwnPropertyNames(window).sort();r<d.length;r++){var a=d[r],i=window[a],c=(i||{}).prototype;switch(!0){case"function"!=typeof i:case!c:case!(c instanceof n):continue}(Object.getPrototypeOf(c)===n.prototype?!e:e)&&(o.push(c),t&&t(a,c))}return o},i=function(n,e){void 0===e&&(e=!1);var t=[];return a(n,e,(function(n,e){t.push(r.a.createElement(d.Inspector,{key:n,name:n,value:e}))})),t}},384:function(n,e,t){"use strict";t.r(e),t.d(e,"watcherDemo",(function(){return u})),t.d(e,"typesDemo",(function(){return l})),t.d(e,"descendantsDemo",(function(){return m})),t.d(e,"subsDemo",(function(){return s}));var o=t(72),r=t(0),d=t.n(r),a=t(175),i=t(172);var c=function(n){void 0===n&&(n=Node.prototype);var e=Object.getOwnPropertyNames(n).filter((function(n){return/_NODE$/.test(n)})).sort((function(e,t){return n[e]-n[t]}));return 0===e.length?c(Node):e};var u=new o.a([],(function(){return d.a.createElement("div",null,d.a.createElement(i.Inspector,{name:"Node",value:Node.prototype}),d.a.createElement(i.Inspector,{name:"ownPropertyNames",value:Object.getOwnPropertyNames(Node.prototype).sort()}))})),l=new o.a([],(function(){return d.a.createElement("div",null,c().map((function(n){return d.a.createElement(i.Inspector,{key:n,name:"Node."+n,value:Node[n]})})))}),!1,!0),m=new o.a([],(function(){return d.a.createElement("div",null,d.a.createElement(i.Inspector,{name:"list",value:Object(a.a)(Node,!0)}))}),!1,!0),s=new o.a([],(function(){return d.a.createElement("div",null,Object(a.b)(Node))}),!1,!0);e.default="### 描述\n`Node` - 节点，它是 `DOM` 文档中的一个独立单元，也是构成文档树最基本的单位。在 `web` 网页中，你所看到的一切都是节点 - 各种不同形式、类型的节点。\n\n### Extends\nEventTarget\n\n### 观察\n```inline-demo\nimport(watcherDemo);\n```\n\n### 节点的能力 No.1\n节点拥有 `改变` 文档结构的能力，如：\n* 增 `Node.appendChild`\n* 删 `Node.removeChild`\n* 改 `Node.replaceChild`\n* 插 `Node.inertBefore`\n* 合 `Node.normalize`\n* ...\n\n### 节点的能力 No.2\n节点拥有 `查询` 上下文节点关系的能力，如：\n* 父 `Node.parentNode`\n* 父 `Node.parentElement` - 为 `Node.parentNode.nodeType = Node.ELEMENT_NODE` 的衍生属性。\n* 子 `Node.childNodes`\n* 首 `Node.firstChild`\n* 尾 `Node.lastChild`\n* 前 `Node.previousSibling`\n* 后 `Node.nextSibling`\n* 内容 `Node.textContent`\n* 比较 `Node.isSameNode()`\n* 包含 `Node.contains()`\n* ...\n\n### 常见节点类型\n在进行节点分类之前，让我们先编写一段最基本的 `HTML` 代码：\n```html\n<!doctype html>\n<html class='root'>\n  \x3c!-- 注释内容 --\x3e\n  <body id='my-id'>文本内容</body>\n</html>\n```\n\n以上代码中，包含了以下常见的节点类型：\n* 文档节点 - `Document`\n  * 整个 `html` 文档\n* 文档类型节点 - `DocumentType`\n  * `<!doctype html>`\n* 元素节点 - `Element`\n  * `<html>`\n  * `<body>`\n* 属性节点 - `Attr`\n  * `class='root'`\n  * `id='my-id'`\n* 注释节点 - `Comment`\n  * `\x3c!-- 注释内容 --\x3e`\n* 文本节点 - `Text`\n  * `文本内容`\n  * 换行及缩进等空白文本\n\n### nodeType 节点类型\n从 `Node` 的属性中，以属性名为 `_NODE` 结尾的，当为 `Node.nodeType` 所支持的基础类型：\n```inline-demo\nimport(typesDemo);\n```\n\n### 基础节点类型\n分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `Node`。\n```inline-demo\nimport(subsDemo);\n```\n\n### 其他节点类型\n分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `Node`。\n```inline-demo\nimport(descendantsDemo);\n```"}}]);