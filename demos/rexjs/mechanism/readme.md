### 描述
`解析机制` 主导着整个解析流程。如果要求解析的性能要高、可读性要好、可拓展性要大，完全与 `解析机制` 息息相关；它就像贯穿整个城市的道路，道路规划的好不好，决定着市容市貌以及到达目的地的时间与便捷性。

### 区别与其他解析器
与其他解析器最大的、最主要的、最基础的区别，也就是在于 `正则表达式` 的应用上：
* 其他解析器，是利用 `字符` 进行判断，如什么字符后面应该接什么字符，这样太死板、解析工作量巨大，甚至文件体积也更大。
* `Rexjs` 的核心解析机制采用的是 `正则表达式`。因为正则已经将字符衔接的逻辑问题完美解决了，所以没必要再花大篇代码去做重复的事情，这也是成品解析器文件体积整体都较小的主要原因之一。

### 解析机制平面示意图
这是个整体的解析机制图解，它描述了一个解析器从开始到结束、从主干到分支、再由分支回流主干、最后进入循环的解析生命周期。
```txt
      1. 初始化解析器
      ↓
      2. 编译正则表达式列表
      ↓
      3. 传入代码
      ↓
→  →  4. 正则匹配代码，核对语法上下文，校验语法
      ↓
↑     * → 5.1 匹配不到任何结果，报错，解析结束
      ↓
↑     5.2 得到对应语法标签
      ↓
↑     * →   →   →   →   →
      ↓                  ↓
↑     6.1 如果标签正常     6.2 如果标签异常
      ↓                  ↓
↑                        7. 捕获及处理异常，再次校验语法
      ↓                  ↓
↑                        * → 8.1 确认是非法异常，报错，解析结束
      ↓                  ↓
↑                        8.2 纠正异常，得到正确的标签
      ↓                  ↓
↑     *  ←  ←  ←  ←  ←  ←
      ↓
↑     9. 访问标签（进入标签访问器，可初始化及设置语句、表达式等相关操作）
      ↓
↑     10. 获得新的标签列表映射（通过访问标签，可得到下一个“应该匹配”的标签列表映射）
      ↓
↑     11. 重置正则（通过标签列表映射，可得到一个相关正则表达式）
      ↓
←  ←  ←
```

### 解析机制源码
源码摘自于：`SyntaxParser.parse`：
```js
/**
 * 开始解析
 * @param {Rexjs.File} file - 文件信息
 * @param {Rexjs.SyntaxTagsMap} tagsMap - 标签列表映射
 * @param {Rexjs.Statements} statements - 初始化的语句块
 */
parse(file, tagsMap, statements) {
  // 获取入口标签列表
  let tags = tagsMap.entranceTags;

  // 初始化解析器相关的文档位置
  const position = this.position = new Position(0, 0);

  // 设置 tagsMap
  this.tagsMap = tagsMap;
  // 记录文件
  this.file = file;
  // 清空错误信息
  this.details = null;
  // 初始化语句块
  this.statements = statements;

  // 执行正则
  this.regexp.exec(
    tags.regexp,
    file.source,
    (content, tagIndex) => {
      // 根据标签索引，获取对应内容相关标签
      let tag = tags[tagIndex];

      // 初始化语法上下文
      const context = new Context(
        tag,
        content,
        new Position(
          position.line,
          position.column
        )
      );

      // 增加列数
      position.column += content.length;

      // 如果标签异常，即不应该被捕获
      if(tag.type.unexpected){
        // 进入异常捕获处理
        context.tag = tag = toTryCatch(this, context, tag, this.statements);
      }

      // 获取语句块，以防在异常捕获处理中被修改过
      statements = this.statements;

      // 访问标签
      tag.visitor(this, context, statements.statement, statements);

      // 获取下一步需要匹配的标签列表
      tags = tag.require(tagsMap, tags, this);
      // 返回下一步需要匹配的正则
      return tags.regexp;
    }
  );
}
```

### 正则应用机制
我们先看一下正则与标签列表之间的绑定关系：

1. 每个 `语法标签` 上，都会绑定一个相关 `正则表达式`；
2. 每个 `语法标签列表` 上，都会绑定一个解析时刻相关的所有 `语法标签`；
3. 每个 `语法标签列表映射` 上，都会绑定整个解析器所相关所有 `语法标签列表`，也就是说，一个语言，一个解析器，只有一个语法标签列表映射；
4. 初始化 `语法标签列表映射` 时，会对每一个 `语法标签列表` 中的 `语法标签` 进行排序，根据其 `正则` 匹配的可能性越大、正确性越高，则越排在集合前面，以提高匹配性能。
>

以下是 `Rexjs` 解析 `ES6` 的 `语法标签列表映射`，其中 `tag.type` 为标签 `正则表达式` 的匹配优先级 `matchable` > `mistakable` > `unexpected` > `illegal`：

```demo
import(syntaxTagsMapDemo);
```

### 更多内容
* [语法树](#/rexjs/syntax-tree)