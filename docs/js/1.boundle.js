(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{343:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var a=function(n,e,t){if(this.name=n,this.source=e,!t){var a=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=a?a[1]:""}this.type=t}},344:function(n,e,t){"use strict";e.a="import { useRef } from 'react';\n\nexport default (value) => {\n  const ref = useRef(value);\n  // 进行对比，记录对比结果\n  const result = ref.current !== value;\n\n  // 记录当前值\n  ref.current = value;\n  // 返回对比结果\n  return result;\n};"},345:function(n,e,t){"use strict";t.d(e,"a",(function(){return u})),t.d(e,"b",(function(){return s}));var a=t(343),l=t(344),u=new a.a("use-has-changed.js",l.a),s=new a.a("use-update-times.js","import { useRef, useEffect } from 'react';\n\nexport default () => {\n  const ref = useRef(1);\n\n  /**\n   * 不能直接使用 return ++ref.current，\n   * 因为在某些情况下，进了渲染函数，不代表组件会被更新，比如：\n   * const [num, setNum] = useState(0);\n   * ...\n   * setNum(1); setNum(2); setNum(0);\n   * 连续的 setNum，最后 num 还是等于 0，并未变化，\n   * 这会导致进入组件的渲染函数，但其实组件不会被更新。\n   * 所以，利用 useEffect 才能表明组件是否被更新。\n   */\n  useEffect(() => {\n    ref.current++;\n  }, [Math.random()]);\n  \n  return ref.current;\n};")},346:function(n,e,t){"use strict";var a=t(0);e.a=function(){var n=Object(a.useRef)(1);return Object(a.useEffect)((function(){n.current++}),[Math.random()]),n.current}},349:function(n,e,t){"use strict";t.r(e),t.d(e,"memoUpdateDemo",(function(){return i})),t.d(e,"interfaceDemo",(function(){return p})),t.d(e,"depsDemo",(function(){return d})),t.d(e,"inlineFuncDemo",(function(){return b})),t.d(e,"outerFuncDemo",(function(){return f})),t.d(e,"depBySubDemo",(function(){return C}));var a=t(0),l=t.n(a),u=t(346),s=t(116);t(168);var c=t(114),r=t(343);var o=t(345);var m=l.a.memo((function(n){var e=n.title,t=n.getContent,u=n.date,s=Object(a.useRef)(0);return s.current++,l.a.createElement("div",null,e,l.a.createElement("br",null),"子组件更新次数: ",l.a.createElement("span",null,s.current),l.a.createElement("hr",{"data-mini":!0}),"date: ",u.toLocaleTimeString(),l.a.createElement("br",null),"getContent(): ",l.a.createElement("span",null,t()),l.a.createElement("sub",null,"刷新标识"))}));var i=new c.a([new r.a("index.jsx","import React, { useState, useCallback } from 'react';\nimport { ChildDemoWithMemo } from './child';\nimport { ChildDemoProps } from './types';\nimport useUpdateTimes from '@/demos/hooks/use-update-times';\nimport { Button } from 'antd';\n\nexport function UpdateDemo() {\n  let getContentInlineFunc;\n  const [date, setDate] = useState(new Date());\n  const times = useUpdateTimes();\n\n  const onButtonClick = () => {\n    setDate(\n      new Date()\n    );\n  };\n\n  const getContent = useCallback(\n    getContentInlineFunc = () => {\n      return times;\n    },\n    [date]\n  );\n\n  return (\n    <div>\n      <p>\n        <Button onClick={onButtonClick}>点击刷新 <span>date</span></Button>\n      </p>\n      <hr />\n      <ChildDemoWithMemo\n        title={\n          <>\n            <span>React.memo</span> + useCallback(..., [date])\n          </>\n        }\n        date={date}\n        getContent={getContent}\n      />\n      <hr />\n      <ChildDemoWithMemo\n        title={\n          <>React.memo + <span>内联函数</span></>\n        }\n        date={date}\n        getContent={getContentInlineFunc}\n      />\n      <hr />\n      <ChildDemoWithMemo\n        title={\n          <>\n            useCallback(..., [date]) <del>+ React.memo</del> \n          </>\n        }\n        date={date}\n        getContent={getContent}\n      />\n    </div>\n  );\n}"),new r.a("child.jsx","import React, { useRef } from 'react';\n\nexport function ChildDemo({ title, getContent, date }) {\n  const updateTimes = useRef(0);\n  \n  updateTimes.current++;\n\n  return (\n    <div>\n      {title}\n      <br />\n      子组件更新次数: <span>{updateTimes.current}</span>\n      <hr data-mini />\n      date: {date.toLocaleTimeString()}\n      <br />\n      getContent(): <span>{getContent()}</span><sub>刷新标识</sub>\n    </div>\n  );\n}\n\nexport const ChildDemoWithMemo = React.memo(ChildDemo);"),o.b],(function(){var n,e=Object(a.useState)(new Date),t=e[0],c=e[1],r=Object(u.a)(),o=Object(a.useCallback)(n=function(){return r},[t]);return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(s.a,{onClick:function(){c(new Date)}},"点击刷新 ",l.a.createElement("span",null,"date"))),l.a.createElement("hr",null),l.a.createElement(m,{title:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,"React.memo")," + useCallback(..., [date])"),date:t,getContent:o}),l.a.createElement("hr",null),l.a.createElement(m,{title:l.a.createElement(l.a.Fragment,null,"React.memo + ",l.a.createElement("span",null,"内联函数")),date:t,getContent:n}),l.a.createElement("hr",null),l.a.createElement(m,{title:l.a.createElement(l.a.Fragment,null,"useCallback(..., [date]) ",l.a.createElement("del",null,"+ React.memo")),date:t,getContent:o}))}),!0),p=new c.a([new r.a("JavaScript","/**\n * useCallback 将会根据参数 callback 来返回一个记忆化版本的 callback；它只会在依赖项 deps 发生变化时，才会更新、改变。\n * @param {Function} callback 需要记忆化的回调函数\n * @param {unknown[]} deps 更新依赖\n * @returns {Function} 一个记忆化版本的 callback\n */\nfunction useCallback(callback, deps) {}","js"),new r.a("TypeScript","interface useCallback {\n  /**\n   * useCallback 将会根据参数 callback 来返回一个记忆化版本的 callback；它只会在依赖项 deps 发生变化时，才会更新、改变。\n   * @param callback 需要记忆化的回调函数\n   * @param deps 更新依赖\n   * @returns 一个记忆化版本的 callback\n   */\n  <T extends (...args: unknown[]) => unknown>(callback: T, deps: unknown[]): T;\n}","ts")]),d=new c.a([new r.a("index.jsx","import React, { useState, useCallback } from 'react';\nimport useUpdateTimes from '@/demos/hooks/use-update-times';\nimport { Button } from 'antd';\n\nexport function DepsDemo() {\n  const [changeableDeps, setChangeableDeps] = useState(true);\n  const times = useUpdateTimes();\n\n  const getTimes = useCallback(\n    () => {\n      return times;\n    },\n    // 这里得保持 deps 的个数一致，所以是 [null]\n    changeableDeps ? [times] : [null]\n  );\n\n  const onButtonClick = () => {\n    setChangeableDeps(!changeableDeps);\n  };\n\n  return (\n    <div>\n      <p>\n        useCallback(..., <span>[{changeableDeps ? 'times' : 'null'}]</span>);\n      </p>\n      <hr />\n      <p>\n        每秒执行结果: <span>{getTimes()}</span>\n        <sub>{\n          changeableDeps ?\n            '每次结果都不同，说明 useCallback 在随着 deps 的变化而更新' :\n            'deps 固定为 [null]，useCallback 不会更新，结果不再变化'\n        }</sub>\n      </p>\n      <p>\n        <Button onClick={onButtonClick}>\n          {changeableDeps ? '移除' : '设置'}动态 deps\n        </Button>\n      </p>\n    </div>\n  );\n}"),o.b],(function(){var n=Object(a.useState)(!0),e=n[0],t=n[1],c=Object(u.a)(),r=Object(a.useCallback)((function(){return c}),e?[c]:[null]);return l.a.createElement("div",null,l.a.createElement("p",null,"useCallback(..., ",l.a.createElement("span",null,"[",e?"times":"null","]"),");"),l.a.createElement("hr",null),l.a.createElement("p",null,"每秒执行结果: ",l.a.createElement("span",null,r()),l.a.createElement("sub",null,e?"每次结果都不同，说明 useCallback 在随着 deps 的变化而更新":"deps 固定为 [null]，useCallback 不会更新，结果不再变化")),l.a.createElement("p",null,l.a.createElement(s.a,{onClick:function(){t(!e)}},e?"移除":"设置","动态 deps")))}),!0),b=new c.a([new r.a("index.jsx","import React, { useCallback } from 'react';\nimport useUpdateTimes from '@/demos/hooks/use-update-times';\n\nexport function InlineFuncDemo() {\n  let getTimes;\n  const times = useUpdateTimes();\n\n  const getTimesWithUseCallback = useCallback(\n    // 这里每次都会生成一个新的函数，所以每次不同的 times 都会被闭包于函数内\n    getTimes = () => {\n      return times;\n    },\n    // 这里没有依赖，所以 callback 不会刷新\n    []\n  );\n\n  return (\n    <div>\n      <p>\n        <b>内联函数</b> 每秒执行结果: <span>{getTimes()}</span>\n        <sub>每次结果都不同，说明内联函数随组件刷新而重新生成</sub>\n      </p>\n      <p>\n        <b>useCallback</b> 每秒执行结果: <span>{getTimesWithUseCallback()}</span>\n        <sub>无论内联函数生成多少次，只要 deps 不发生变化，useCallback 就不会更新，所以结果永远一致</sub>\n      </p>\n    </div>\n  );\n}"),o.b],(function(){var n,e=Object(u.a)(),t=Object(a.useCallback)(n=function(){return e},[]);return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("b",null,"内联函数")," 每秒执行结果: ",l.a.createElement("span",null,n()),l.a.createElement("sub",null,"每次结果都不同，说明内联函数随组件刷新而重新生成")),l.a.createElement("p",null,l.a.createElement("b",null,"useCallback")," 每秒执行结果: ",l.a.createElement("span",null,t()),l.a.createElement("sub",null,"无论内联函数生成多少次，只要 deps 不发生变化，useCallback 就不会更新，所以结果永远一致")))}),!0),f=new c.a([new r.a("index.jsx","import React, { useCallback } from 'react';\nimport { saveInput } from './locale';\n\nexport function OuterFuncDemo() {\n  // 引入外部函数，避免每次都临时创建内联函数\n  const onChange = useCallback(saveInput, []);\n\n  return (\n    <input onChange={onChange} />\n  );\n}"),new r.a("locale.js","export function saveInput({ target }) {\n  const http = new XMLHttpRequest();\n\n  http.open('GET', `/a/b/c?input=${target.value}`, true);\n  http.send();\n}")]),C=new c.a([new r.a("index.jsx","import React, { useCallback } from 'react';\nimport { Sub } from './sub';\nimport useUpdateTimes from '@/demos/hooks/use-update-times';\n\nexport function DepBySubDemo() {\n  const times = useUpdateTimes();\n\n  // 在某些特殊情况下，需要监听子组件的注销事件，你可能会如下使用\n  const onSubUnmount = useCallback(() => {\n    console.log(`子组件在 times=${times} 时，被注销。`);\n  }, [times]);\n\n  return (\n    <div>\n      <Sub onUnmount={onSubUnmount} />\n    </div>\n  );\n}"),new r.a("sub.jsx","import React, { useEffect } from 'react';\n\nexport function Sub({ onUnmount }) {\n  // 将 onUnmount 加入依赖，以便对最新的 onUnmount 函数进行调用\n  useEffect(() => {\n    // 当组件被注销，此函数会被调用\n    return onUnmount;\n  }, [onUnmount]);\n\n  return (\n    <div />\n  );\n}"),o.b]);e.default="### 描述\n`useCallback` 将会根据参数 `callback` 来返回一个记忆化版本的 `callback`，它只会在依赖项 `deps` 发生变化时，才会更新、改变。\n\n### 文档释义\n```demo\nimport(interfaceDemo);\n```\n\n### 基础调用\n```js\nconst cb = useCallback(callback, deps);\nconst cb1 = useCallback(() => {}, []);\nconst cb2 = useCallback(() => {}, [dep1, dep2]);\n```\n\n### 更新机制\n只有当 `依赖项（deps）` 发生变化时，`useCallback` 才会更新。\n```demo\nimport(depsDemo);\n```\n注意事项：\n\n1. 函数内部所引用的 `外部变量`，多数情况下都需要加入 `deps` 中，如上例中的变量 `times`；因为是记忆化的函数，如果没有加入 `deps`，那么函数的 `变量引用`，不会随 `外部变量` 的更新而更新，直到下一次 `useCallback` 的更新；\n2. 在 `deps` 频繁更新的情况下，**不建议**使用 `useCallback`，否则依赖判断机制及函数更新会造成更多的性能消耗。\n\n### 内联函数\n\n使用 `useCallback`，其 `内联函数` 依然会随组件的每次更新而创建，这是一个 `耗性能` 的行为。\n```demo\nimport(inlineFuncDemo);\n```\n\n针对优化这个 `耗性能` 问题，可以将 `非关联上下文` 的内联函数，提取到 `组件外部` 或 `其他文件` 中，这样不仅能优化性能，还能将部分逻辑代码分离，使代码更简单、整洁。\n```demo\nimport(outerFuncDemo);\n```\n\n### 有效场景\n* `useCallback` 函数被子组件 `deps` 所依赖，即子组件需根据该函数的更新，从而进行某些特定操作。\n```demo\nimport(depBySubDemo);\n```\n\n* 配合 `React.memo` 使用，以避免子组件随父组件的频繁刷新；类似 `React.Component` 的 `shouldComponentUpdate` 机制。\n```demo\nimport(memoUpdateDemo);\n```"}}]);