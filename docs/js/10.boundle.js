(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{173:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t){if(this.name=e,this.source=n,!t){var a=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=a?a[1]:""}this.type=t}},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var a=t(0),o=t.n(a),r=t(172),l=function(e,n,t,a){void 0===n&&(n=!1),void 0===t&&(t=window);for(var o=[],r=0,l=Object.getOwnPropertyNames(t).sort();r<l.length;r++){var m=l[r],c=t[m],i=(c||{}).prototype;switch(!0){case"function"!=typeof c:case!i:case!(i instanceof e):continue}(Object.getPrototypeOf(i)===e.prototype?!n:n)&&(o.push(i),a&&a(m,i))}return o},m=function(e,n,t){void 0===n&&(n=!1);var a=[];return l(e,n,t,(function(e,n){a.push(o.a.createElement(r.Inspector,{key:e,name:e,value:n}))})),a}},399:function(e,n,t){"use strict";t.r(n),t.d(n,"watcherDemo",(function(){return d})),t.d(n,"descendantsDemo",(function(){return E})),t.d(n,"setAttributeDemo",(function(){return v})),t.d(n,"subsDemo",(function(){return b})),t.d(n,"htmlApiDemo",(function(){return y}));var a=t(74),o=t(0),r=t.n(o),l=t(174),m=t(172);var c=t(390),i=(t(372),t(50)),u=(t(75),t(263));t(262);var s=t(52);t(76);var p=t(173),d=new a.a([],(function(){return r.a.createElement("div",null,r.a.createElement(m.Inspector,{name:"Element",value:Element.prototype}),r.a.createElement(m.Inspector,{name:"ownPropertyNames",value:Object.getOwnPropertyNames(Element.prototype).sort()}))})),E=new a.a([],(function(){return r.a.createElement("div",null,r.a.createElement(m.Inspector,{name:"list",value:Object(l.a)(Element,!0)}))}),!1,!0),v=new a.a([new p.a("index.jsx","import React, { useMemo, useState } from 'react';\nimport { DomInspector, Inspector } from 'mic-inspector';\nimport { Input, Button, Divider } from 'antd';\n\nexport function SetAttributeDemo() {\n  const [name, setName] = useState('');\n  const [value, setValue] = useState('');\n  const [key, setKey] = useState(1);\n\n  const element = useMemo(() => {\n    // 使用 xml，是为了创建 Element 实例，而不是 HTMLElement 实例。\n    return new DOMParser().parseFromString('<element />', 'text/xml').querySelector('element');\n  }, []);\n\n  const reset = () => {\n    setName('');\n    setValue('');\n    setKey(key + 1);\n  };\n\n  const onNameChanged = ({ target }) => {\n    setName(target.value);\n  };\n\n  const onValueChanged = ({ target }) => {\n    setValue(target.value);\n  };\n\n  const onAddAttr = () => {\n    element.setAttribute(\n      name.trim(),\n      value.trim()\n    );\n\n    reset();\n  };\n\n  const onRemoveAttr = () => {\n    element.removeAttribute(\n      name.trim()\n    );\n\n    reset();\n  }\n  \n  const danger = !/^\\s*[A-z$_]|^\\s*$/.test(name);\n\n  return (\n    <div>\n      <DomInspector key={`${key}-dom`} dom={element} expandLevel={1} />\n      <br />\n      <Inspector key={key} name='element.attributes' value={element.attributes} defaultExpand />\n      <Divider />\n      <Input.Group compact>\n        <Input style={{ width: '100px' }} placeholder='属性名' value={name} onChange={onNameChanged} />\n        <Input addonBefore='=' style={{ width: '132px' }} value={value} placeholder='属性值' onChange={onValueChanged} />\n        <Button onClick={onAddAttr} danger={danger} disabled={name.trim().length === 0}>{danger ? '属性名不规范' : '设置属性'}</Button>\n        <Button onClick={onRemoveAttr} disabled={!element.hasAttribute(name.trim())}>删除属性</Button>\n      </Input.Group>\n    </div>\n  );\n}")],(function(){var e=Object(o.useState)(""),n=e[0],t=e[1],a=Object(o.useState)(""),l=a[0],s=a[1],p=Object(o.useState)(1),d=p[0],E=p[1],v=Object(o.useMemo)((function(){return(new DOMParser).parseFromString("<element />","text/xml").querySelector("element")}),[]),b=function(){t(""),s(""),E(d+1)},y=!/^\s*[A-z$_]|^\s*$/.test(n);return r.a.createElement("div",null,r.a.createElement(m.DomInspector,{key:d+"-dom",dom:v,expandLevel:1}),r.a.createElement("br",null),r.a.createElement(m.Inspector,{key:d,name:"element.attributes",value:v.attributes,defaultExpand:!0}),r.a.createElement(u.a,null),r.a.createElement(c.a.Group,{compact:!0},r.a.createElement(c.a,{style:{width:"100px"},placeholder:"属性名",value:n,onChange:function(e){var n=e.target;t(n.value)}}),r.a.createElement(c.a,{addonBefore:"=",style:{width:"132px"},value:l,placeholder:"属性值",onChange:function(e){var n=e.target;s(n.value)}}),r.a.createElement(i.a,{onClick:function(){v.setAttribute(n.trim(),l.trim()),b()},danger:y,disabled:0===n.trim().length},y?"属性名不规范":"设置属性"),r.a.createElement(i.a,{onClick:function(){v.removeAttribute(n.trim()),b()},disabled:!v.hasAttribute(n.trim())},"删除属性")))}),!1,!0),b=new a.a([],(function(){return r.a.createElement("div",null,Object(l.b)(Element))}),!1,!0),y=new a.a([new p.a("index.jsx","import React, { useState, useMemo } from 'react';\nimport { Property, DomInspector } from 'mic-inspector';\nimport { Divider, Radio } from 'antd';\n\nexport function HtmlApiDemo() {\n  const { Group, Button } = Radio;\n  const innerHTML = '<abc></abc><p><xyz></xyz></p>';\n  const htmlNamespaceURI = 'http://www.w3.org/1999/xhtml';\n  const xmlDocAndHtmlElementTitle = '在任何文档中，对 HTMLElement 设置 innerHTML，子元素都将被解析为 HTMLElement。';\n\n  const xmlDoc = useMemo(() => {\n    return document.implementation.createDocument(null, null);\n  }, []);\n\n  const [doc, setDoc] = useState(xmlDoc);\n  const [namespaceURI, setNamespaceURI] = useState(htmlNamespaceURI);\n  const [title, setTitle] = useState(xmlDocAndHtmlElementTitle);\n\n  const onHtmlDocAndXmlElement = () => {\n    setDoc(\n      document.implementation.createHTMLDocument()\n    );\n\n    setNamespaceURI(null);\n    setTitle('在 HTML 文档中，对非 HTMLElement 的 <div> 设置 innerHTML，依据特殊 HTML 标签名，解析出的子元素中可能会包含 HTMLElement。');\n  };\n\n  const onXmlDocAndHtmlElement = () => {\n    setDoc(xmlDoc);\n    setNamespaceURI(htmlNamespaceURI);\n    setTitle(xmlDocAndHtmlElementTitle);\n  };\n\n  const onXmlDocAndElement = () => {\n    setDoc(xmlDoc);\n    setNamespaceURI(null);\n    setTitle('在非 HTML 文档中，对非 HTMLElement 设置 innerHTML，子元素命名空间保持与父元素一致。');\n  };\n\n  const div = useMemo(() => {\n    const div = doc.createElementNS(namespaceURI, 'div');\n\n    div.innerHTML = innerHTML;\n    return div;\n  }, [doc, namespaceURI]);\n\n  const p = div.querySelector('p');\n  const abc = div.querySelector('abc');\n  const xyz = div.querySelector('xyz');\n  // 这里其实就是 doc，在元素未添加到父节点之下时， ownerDocument 不会变\n  const ownerDocument = div.ownerDocument;\n\n  return (\n    <div>\n      <Group defaultValue='1'>\n        <Button value='1' onClick={onXmlDocAndHtmlElement}>XMLDocument + HTMLElment</Button>\n        <Button value='2' onClick={onHtmlDocAndXmlElement}>HTMLDocument + Element</Button>\n        <Button value='3' onClick={onXmlDocAndElement}>XMLDocument + Elment</Button>\n      </Group>\n      <Divider />\n      <h6>前提条件</h6>\n      <Property name='ownerDocument' value={Object.getPrototypeOf(ownerDocument)} separator='=' preview />\n      <Property name='div.namespaceURI' value={div.namespaceURI} separator='=' preview />\n      <Property name='div.innerHTML' value={innerHTML} separator='=' preview />\n      <Property name='div' value={Object.getPrototypeOf(div)} separator='=' preview />\n      <Divider />\n      <h6>元素结构</h6>\n      <DomInspector dom={div} expandLevel={2} />\n      <Divider />\n      <h6>运行结论：{title}</h6>\n      <br />\n      <Property name='abc.namespaceURI' value={abc.namespaceURI} preview />\n      <Property name='abc' value={Object.getPrototypeOf(abc)} preview />\n      <br />\n      <Property name='p.namespaceURI' value={p.namespaceURI} preview />\n      <Property name='p' value={Object.getPrototypeOf(p)} preview />\n      <br />\n      <Property name='xyz.namespaceURI' value={xyz.namespaceURI} preview />\n      <Property name='xyz' value={Object.getPrototypeOf(xyz)} preview />\n    </div>\n  );\n}")],(function(){var e=s.a.Group,n=s.a.Button,t="<abc></abc><p><xyz></xyz></p>",a=Object(o.useMemo)((function(){return document.implementation.createDocument(null,null)}),[]),l=Object(o.useState)(a),c=l[0],i=l[1],p=Object(o.useState)("http://www.w3.org/1999/xhtml"),d=p[0],E=p[1],v=Object(o.useState)("在任何文档中，对 HTMLElement 设置 innerHTML，子元素都将被解析为 HTMLElement。"),b=v[0],y=v[1],w=Object(o.useMemo)((function(){var e=c.createElementNS(d,"div");return e.innerHTML=t,e}),[c,d]),h=w.querySelector("p"),M=w.querySelector("abc"),D=w.querySelector("xyz"),f=w.ownerDocument;return r.a.createElement("div",null,r.a.createElement(e,{defaultValue:"1"},r.a.createElement(n,{value:"1",onClick:function(){i(a),E("http://www.w3.org/1999/xhtml"),y("在任何文档中，对 HTMLElement 设置 innerHTML，子元素都将被解析为 HTMLElement。")}},"XMLDocument + HTMLElment"),r.a.createElement(n,{value:"2",onClick:function(){i(document.implementation.createHTMLDocument()),E(null),y("在 HTML 文档中，对非 HTMLElement 的 <div> 设置 innerHTML，依据特殊 HTML 标签名，解析出的子元素中可能会包含 HTMLElement。")}},"HTMLDocument + Element"),r.a.createElement(n,{value:"3",onClick:function(){i(a),E(null),y("在非 HTML 文档中，对非 HTMLElement 设置 innerHTML，子元素命名空间保持与父元素一致。")}},"XMLDocument + Elment")),r.a.createElement(u.a,null),r.a.createElement("h6",null,"前提条件"),r.a.createElement(m.Property,{name:"ownerDocument",value:Object.getPrototypeOf(f),separator:"=",preview:!0}),r.a.createElement(m.Property,{name:"div.namespaceURI",value:w.namespaceURI,separator:"=",preview:!0}),r.a.createElement(m.Property,{name:"div.innerHTML",value:t,separator:"=",preview:!0}),r.a.createElement(m.Property,{name:"div",value:Object.getPrototypeOf(w),separator:"=",preview:!0}),r.a.createElement(u.a,null),r.a.createElement("h6",null,"元素结构"),r.a.createElement(m.DomInspector,{dom:w,expandLevel:2}),r.a.createElement(u.a,null),r.a.createElement("h6",null,"运行结论：",b),r.a.createElement("br",null),r.a.createElement(m.Property,{name:"abc.namespaceURI",value:M.namespaceURI,preview:!0}),r.a.createElement(m.Property,{name:"abc",value:Object.getPrototypeOf(M),preview:!0}),r.a.createElement("br",null),r.a.createElement(m.Property,{name:"p.namespaceURI",value:h.namespaceURI,preview:!0}),r.a.createElement(m.Property,{name:"p",value:Object.getPrototypeOf(h),preview:!0}),r.a.createElement("br",null),r.a.createElement(m.Property,{name:"xyz.namespaceURI",value:D.namespaceURI,preview:!0}),r.a.createElement(m.Property,{name:"xyz",value:Object.getPrototypeOf(D),preview:!0}))}),!1,!0);n.default="### 描述\n`Element` - 元素节点，它是 `HTML` 与 `XML` 文档中不可分割的一部分，而元素节点又包括 **起始标签**、 **标签内容** 及 **结束标签** 三部分：\n```html\n<div name='属性节点'>\n  \x3c!-- 注释节点 --\x3e\n  文本节点\n  <img />\n</div>\n```\n其中，**起始标签**可拥有**属性节点**；**标签内容**可包括**文本节点**、**注释节点**及其他**元素节点**；**结束标签**不包含任何节点。\n\n### Extends\n[Node](#/dom-nodes/node)\n\n### 观察\n```inline-demo\nimport(watcherDemo);\n```\n\n### 元素节点的能力 No.1\n元素节点拥有 `查询` 上下文元素的能力，如：\n* 父 ~~`Node.parentElement`~~ - 为 `Node.parentNode.nodeType = Node.ELEMENT_NODE` 的衍生属性，从而归属于 `Node`。\n* 子 `Element.children`\n* 首 `Element.firstElementChild`\n* 尾 `Element.lastElementChild`\n* 前 `Element.previousElementSibling`\n* 后 `Element.nextElementSibling`\n* 查 `Element.getElementsByClassName()`\n* 查 `Element.getElementsByTagName()`\n* 查 `Element.querySelector()`\n* 查 `Element.querySelectorAll()`\n* ...\n\n### 元素节点的能力 No.2\n元素节点拥有 `属性` - `Element.attributes` 与其相关操作，如：\n* `Element.attributes`\n* `Element.id` - 一种特殊的 `属性`\n* `Element.className` - 一种特殊的 `属性`\n* `Element.classList` - 一种管理 `className` 的类\n* `Element.hasAttribute()`\n* `Element.setAttribute()`\n* `Element.removeAttribute()`\n* ...\n\n通过元素的**起始标签**，可对其 `属性` 进行定义；反之，所有 `属性` 均会在元素的**起始标签**上体现：\n```demo\nimport(setAttributeDemo);\n```\n\n### 元素节点的能力 No.3\n元素节点拥有解析 `HTML` 文本的能力，如：\n* `Element.innerHTML`\n* `Element.outerHTML`\n* `Element.insertAdjacentHTML`\n>\n\n有好奇心的同学则可能发现了一个疑问：这些能力既然是与 `HTML` 相关，那为什么不属于 `HTMLElement`？\n\n因为：\n>\n* 解析创建元素 `ownerDocument.createElementNS(namespaceURI, ..)` 两大因素为：\n  * `ownerDocument`\n  * `namespaceURI`\n* 两大因素均存在于 `Element` 属性上：\n  * `Element.namespaceURI`\n  * `Element.ownerDocument`\n* `HTMLElement` 也仅仅是一种特殊 `namespaceURI` 的元素节点\n\n所以，该能力归属于 `Element`，而不是 `HTMLElement`。\n\n关于解析 `HTML` 的条件，请参考以下实例：\n```demo\nimport(htmlApiDemo);\n```\n\n### 元素节点的能力 No.4\n元素节点拥有 `自身大小` 和 `自身位置` 属性及其查询方法，如：\n\n* `Element.clientWidth` - 自身宽度\n  * `0px` - `inline` 元素\n  * `content-box` 的宽度 - 非 `inline` 元素\n* `Element.clientHeight` - 自身高度\n  * `0px` - `inline` 元素\n  * `content-box` 的高度 - 非 `inline` 元素\n* `Element.clientLeft` - 自身的左边距\n  * `0px` - `inline` 元素\n  * `border-left-width` 的大小 - 非 `inline` 元素\n* `Element.clientTop` - 自身的上边距\n  * `0px` - `inline` 元素\n  * `border-top-width` 的大小 - 非 `inline` 元素\n* `Element.getBoundingClientRect()` - 自身于视窗内的信息\n* `Element.getClientRects()` - 自身于视窗内的信息\n\n当元素被添加到 `HTML 视窗文档` 中时，受其上下文 `CSS` 影响，便使该元素具有了 `自身大小` 与 `自身位置`。\n\n### 元素节点的能力 No.5\n元素节点拥有 `滚动条` 属性及其操作方法，如：\n* `Element.scrollHeight`\n* `Element.scrollWidth`\n* `Element.scrollTop`\n* `Element.scrollLeft`\n* `Element.scrollTop()`\n* `Element.scrollIntoView()`\n* ...\n\n当元素被添加到 `HTML 视窗文档` 中时，受其上下文 `CSS` 影响，可能导致该元素出现 `滚动条`。\n\n### 元素节点的其他能力\n* `Element.namespaceURI` - 元素具有**命名空间** ，详见：[MDN - Element.namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)、[MDN - Document.createElementNS()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)。\n* `Element.slot` - 元素可具有**插槽**，详见：[MDN - Element.slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)。\n* `Element.shadowRoot` - 元素可具有**投影元素**，详见：[MDN - Element.shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)。\n* ...\n\n### 基础元素节点类型\n分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `Element`。\n```inline-demo\nimport(subsDemo);\n```\n\n### 其他元素节点类型\n分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `Element`。\n```inline-demo\nimport(descendantsDemo);\n```\n\n### 更多内容\n* [Node](#/dom-nodes/node)\n* [CharacterData](#/dom-nodes/character-data)\n* [HTMLElement](#/dom-nodes/html-element)"}}]);