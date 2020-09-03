### 描述
`Element` - 元素节点，它是 `HTML` 与 `XML` 文档中不可分割的一部分，而元素节点又包括 **起始标签**、 **标签内容** 及 **结束标签** 三部分：
```html
<div name='属性节点'>
  <!-- 注释节点 -->
  文本节点
  <img />
</div>
```
其中，**起始标签**可拥有**属性节点**；**标签内容**可包括**文本节点**、**注释节点**及其他**元素节点**；**结束标签**不包含任何节点。

### Extends
[Node](#/dom-nodes/node)

### 观察
```inline-demo
import(watcherDemo);
```

### 元素节点的能力 No.1
元素节点拥有 `查询` 上下文元素的能力，如：
* 父 ~~`Node.parentElement`~~ - 为 `Node.parentNode.nodeType = Node.ELEMENT_NODE` 的衍生属性，从而归属于 `Node`。
* 子 `Element.children`
* 首 `Element.firstElementChild`
* 尾 `Element.lastElementChild`
* 前 `Element.previousElementSibling`
* 后 `Element.nextElementSibling`
* 查 `Element.getElementsByClassName()`
* 查 `Element.getElementsByTagName()`
* 查 `Element.querySelector()`
* 查 `Element.querySelectorAll()`
* ...

### 元素节点的能力 No.2
元素节点拥有 `属性` - `Element.attributes` 与其相关操作，如：
* `Element.attributes`
* `Element.id` - 一种特殊的 `属性`
* `Element.className` - 一种特殊的 `属性`
* `Element.classList` - 一种管理 `className` 的类
* `Element.hasAttribute()`
* `Element.setAttribute()`
* `Element.removeAttribute()`
* ...

通过元素的**起始标签**，可对其 `属性` 进行定义；反之，所有 `属性` 均会在元素的**起始标签**上体现：
```demo
import(setAttributeDemo);
```

### 元素节点的能力 No.3
元素节点拥有解析 `HTML` 文本的能力，如：
* `Element.innerHTML`
* `Element.outerHTML`
* `Element.insertAdjacentHTML`
>

有好奇心的同学则可能发现了一个疑问：这些能力既然是与 `HTML` 相关，那为什么不属于 `HTMLElement`？

因为：
>
* 解析创建元素 `ownerDocument.createElementNS(namespaceURI, ..)` 两大因素为：
  * `ownerDocument`
  * `namespaceURI`
* 两大因素均存在于 `Element` 属性上：
  * `Element.namespaceURI`
  * `Element.ownerDocument`
* `HTMLElement` 也仅仅是一种特殊 `namespaceURI` 的元素节点

所以，该能力归属于 `Element`，而不是 `HTMLElement`。

关于解析 `HTML` 的条件，请参考以下实例：
```demo
import(htmlApiDemo);
```

### 元素节点的能力 No.4
元素节点拥有 `自身大小` 和 `自身位置` 属性及其查询方法，如：

* `Element.clientWidth` - 自身宽度
  * `0px` - `inline` 元素
  * `content-box` 的宽度 - 非 `inline` 元素
* `Element.clientHeight` - 自身高度
  * `0px` - `inline` 元素
  * `content-box` 的高度 - 非 `inline` 元素
* `Element.clientLeft` - 自身的左边距
  * `0px` - `inline` 元素
  * `border-left-width` 的大小 - 非 `inline` 元素
* `Element.clientTop` - 自身的上边距
  * `0px` - `inline` 元素
  * `border-top-width` 的大小 - 非 `inline` 元素
* `Element.getBoundingClientRect()` - 自身于视窗内的信息
* `Element.getClientRects()` - 自身于视窗内的信息

当元素被添加到 `HTML 视窗文档` 中时，受其上下文 `CSS` 影响，便使该元素具有了 `自身大小` 与 `自身位置`。

### 元素节点的能力 No.5
元素节点拥有 `滚动条` 属性及其操作方法，如：
* `Element.scrollHeight`
* `Element.scrollWidth`
* `Element.scrollTop`
* `Element.scrollLeft`
* `Element.scrollTop()`
* `Element.scrollIntoView()`
* ...

当元素被添加到 `HTML 视窗文档` 中时，受其上下文 `CSS` 影响，可能导致该元素出现 `滚动条`。

### 元素节点的其他能力
* `Element.namespaceURI` - 元素具有**命名空间** ，详见：[MDN - Element.namespaceURI](https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI)、[MDN - Document.createElementNS()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)。
* `Element.slot` - 元素可具有**插槽**，详见：[MDN - Element.slot](https://developer.mozilla.org/en-US/docs/Web/API/Element/slot)。
* `Element.shadowRoot` - 元素可具有**投影元素**，详见：[MDN - Element.shadowRoot](https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot)。
* ...

### 基础元素节点类型
分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `Element`。
```inline-demo
import(subsDemo);
```

### 其他元素节点类型
分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `Element`。
```inline-demo
import(descendantsDemo);
```

### 更多内容
* [Node](#/dom-nodes/node)
* [CharacterData](#/dom-nodes/character-data)
* [HTMLElement](#/dom-nodes/html-element)