### 叙
由于框架的盛行，从最初的 `jQuery`、`bootstrap` 到如今的 `React`、`Angular`、`Vue`，越来越多的前端同学对其依赖颇深，从而导致许多从事前端 5 年以上的同学们都可能忽略了底层知识。现在我们来了解下：“什么是 `节点`，什么是 `文本`、什么是 `元素`、什么是 `HTML 元素`？它们的关系又是什么？”。

### 什么是节点 - window.Node
* 节点是文档树中的一个单独的单元，节点包括：
  * `文本节点`
  * `属性节点`
  * `元素节点`
  * ...
* 节点拥有**改变**文档结构的能力，如：
  * 增 `appendChild`
  * 删 `removeChild`
  * 改 `replaceChild`
  * 插 `inertBefore`
  * 合 `normalize`
  * ...
* 节点拥有**查询**上下文节点关系的能力，如：
  * `parentNode`
  * `childNodes`
  * `firstChild`
  * `lastChild`
  * `previousSibling`
  * `nextSibling`
  * `isSameNode()`
  * `contains()`
  * `cloneNode()`
  * ...

```object-prototype
Node
```