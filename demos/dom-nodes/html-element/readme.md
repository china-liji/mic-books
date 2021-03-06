### 描述
`HTMLElement` - `HTML` 元素节点，它是 `HTML` 文档的重要组成部分。`HTML` 元素节点为显示而生，主要属性、能力都是关于着**交互**这一方面。
>

如果把 `Element` 与 `HTMLElement` 皆比喻成一个独立的国度，那么 `Element` 代表着一个闭关锁国，只有**内政**大权（自身属性）的国度；而 `HTMLElement` 则代表是一个“改革开放”，既有**内政**大权（自身属性），又有**外交**政策（交互属性）的国度。

### Extends
[Element](#/dom-nodes/element)

### 观察
```inline-demo
import(watcherDemo);
```

### HTML 元素节点的能力 No.1
与文档，`HTML` 元素节点拥有 `与其他元素交互` 的能力，如：
* `HTMLElement.offsetWidth`
* `HTMLElement.offsetHeight`
* `HTMLElement.offsetLeft`
* `HTMLElement.offsetTop`
* `HTMLElement.offsetParent`

### HTML 元素节点的能力 No.2
与用户，`HTML` 元素节点拥有 `行为交互` 的能力，如：
* `HTMLElement.autofocus`
* `HTMLElement.blur`
* `HTMLElement.click`
* `HTMLElement.draggable`
* `HTMLElement.focus`
* `HTMLElement.isContentEditable`
* `HTMLElement.spellcheck`
* `HTMLElement.tabIndex`
* `HTMLElement.title`
* ...

### HTML 元素节点的能力 No.3
与用户，`HTML` 元素节点拥有 `视觉交互` 的能力，如：
* `HTMLElement.dir`
* `HTMLElement.hidden`
* `HTMLElement.style`
* ...

### HTML 元素节点的能力 No.4
与用户，`HTML` 元素节点拥有 `事件交互` 的能力，如：
* `HTMLElement.onclick`
* `HTMLElement.ondblclick`
* `HTMLElement.onfocus`
* `HTMLElement.onblur`
* `HTMLElement.ondrag`
* ...

### 基础节点类型
分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `HTMLElement`。
```inline-demo
import(subsDemo);
```

这里有一个特殊的节点 - `HTMLUnknownElement`：所有已知、大众的 `HTML` 元素都有特殊的类（对象）所对应，而其他未知、自定义的 `HTML` 元素都将归类于 `HTMLUnknownElement`。

### 其他节点类型
分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `HTMLElement`。
```inline-demo
import(descendantsDemo);
```

### 更多内容
* [Element](#/dom-nodes/element)