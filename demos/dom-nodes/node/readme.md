### 描述
`Node` - 节点，它是 `DOM` 文档中的一个独立单元，也是构成文档树最基本的单位。在 `web` 网页中，你所看到的一切都是节点 - 各种不同形式、类型的节点。

### Extends
EventTarget

### 观察
```inline-demo
import(watcherDemo);
```

### 节点的能力 No.1
节点拥有 `改变` 文档结构的能力，如：
* 增 `Node.appendChild`
* 删 `Node.removeChild`
* 改 `Node.replaceChild`
* 插 `Node.inertBefore`
* 合 `Node.normalize`
* ...

### 节点的能力 No.2
节点拥有 `查询` 上下文节点关系的能力，如：
* 父 `Node.parentNode`
* 父 `Node.parentElement` - 为 `Node.parentNode.nodeType = Node.ELEMENT_NODE` 的衍生属性。
* 子 `Node.childNodes`
* 首 `Node.firstChild`
* 尾 `Node.lastChild`
* 前 `Node.previousSibling`
* 后 `Node.nextSibling`
* 内容 `Node.textContent`
* 比较 `Node.isSameNode()`
* 包含 `Node.contains()`
* ...

### 常见节点类型
在进行节点分类之前，让我们先编写一段最基本的 `HTML` 代码：
```html
<!doctype html>
<html class='root'>
  <!-- 注释内容 -->
  <body id='my-id'>文本内容</body>
</html>
```

以上代码中，包含了以下常见的节点类型：
* 文档节点 - `Document`
  * 整个 `html` 文档
* 文档类型节点 - `DocumentType`
  * `<!doctype html>`
* 元素节点 - `Element`
  * `<html>`
  * `<body>`
* 属性节点 - `Attr`
  * `class='root'`
  * `id='my-id'`
* 注释节点 - `Comment`
  * `<!-- 注释内容 -->`
* 文本节点 - `Text`
  * `文本内容`
  * 换行及缩进等空白文本

### nodeType 节点类型
从 `Node` 的属性中，以属性名为 `_NODE` 结尾的，当为 `Node.nodeType` 所支持的基础类型：
```inline-demo
import(typesDemo);
```

### 基础节点类型
分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `Node`。
```inline-demo
import(subsDemo);
```

### 其他节点类型
分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `Node`。
```inline-demo
import(descendantsDemo);
```