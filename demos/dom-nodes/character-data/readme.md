### 描述
`CharacterData` - 字符数据节点，它是一种最小的节点，不能包含其他节点，仅供字符数据。在 `web` 网页中，你所能复制的一切文本信息都是字符数据节点。

### Extends
[Node](#/dom-nodes/node)

### 观察
```inline-demo
import(watcherDemo);
```

### 字符数据节点的能力
顾名思义，字符数据节点拥有 `操作` 字符数据的能力，如：
* 增 `CharacterData.appendData`
* 删 `CharacterData.deleteData`
* 改 `CharacterData.replaceData`
* 插 `CharacterData.insertData`
* 截 `CharacterData.substringData`

### 无子节点
由于不能包含其他节点，所以字符数据节点永远没有子节点，子节点个数为 `0`。
```demo
import(childNodesDemo);
```

### HTML 与 XML 中的字符数据节点类型
* `HTML` 中的字符数据节点类型：
  * `Comment`
  * `Text`
* `XML` 中的字符数据节点类型：
  * `CDATASection`
  * `Comment`
  * `ProcessingInstruction`
  * `Text`

### 基础字符数据节点类型
分类标识 - **直接性继承**，即在原型链的继承关系上，它是否“**直接**”继承于 `CharacterData`。
```inline-demo
import(subsDemo);
```

### 其他字符数据节点类型
分类标识 - **间接性继承**，即在原型链的继承关系上，它是否“**间接**”继承于 `CharacterData`。
```inline-demo
import(descendantsDemo);
```