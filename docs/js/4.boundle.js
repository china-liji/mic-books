(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var u=function(n,e,t){if(this.name=n,this.source=e,!t){var u=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=u?u[1]:""}this.type=t}},213:function(n,e,t){"use strict";e.a="import { useRef } from 'react';\n\nexport default (value) => {\n  const ref = useRef(value);\n  // 进行对比，记录对比结果\n  const result = ref.current !== value;\n\n  // 记录当前值\n  ref.current = value;\n  // 返回对比结果\n  return result;\n};"},214:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o}));var u=t(208),a=t(213),r=new u.a("use-has-changed.js",a.a),o=new u.a("use-update-times.js","import { useRef, useEffect } from 'react';\n\nexport default () => {\n  const ref = useRef(1);\n\n  /**\n   * 不能直接使用 return ++ref.current，\n   * 因为在某些情况下，进了渲染函数，不代表组件会被更新，比如：\n   * const [num, setNum] = useState(0);\n   * ...\n   * setNum(1); setNum(2); setNum(0);\n   * 连续的 setNum，最后 num 还是等于 0，并未变化，\n   * 这会导致进入组件的渲染函数，但其实组件不会被更新。\n   * 所以，利用 useEffect 才能表明组件是否被更新。\n   */\n  useEffect(() => {\n    ref.current++;\n  }, [Math.random()]);\n  \n  return ref.current;\n};")},216:function(n,e,t){"use strict";var u=t(0);e.a=function(){var n=Object(u.useRef)(1);return Object(u.useEffect)((function(){n.current++}),[Math.random()]),n.current}},352:function(n,e,t){"use strict";t.r(e),t.d(e,"interfaceDemo",(function(){return b})),t.d(e,"callSetStateDemo",(function(){return p})),t.d(e,"compareSetterDemo",(function(){return d})),t.d(e,"ineffectiveCallDemo",(function(){return S}));var u=t(213),a=t(98),r=t(0),o=t.n(r),s=t(100);t(135);var m=t(208),c=function(n){var e=Object(r.useRef)(n),t=e.current!==n;return e.current=n,t};var i=t(214),l=t(216),f=function(){return(f=Object.assign||function(n){for(var e,t=1,u=arguments.length;t<u;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)};var b=new a.a([new m.a("JavaScript","/**\n * useState 返回一个状态值和一个更新该状态值的函数。\n * @param {unknown} initialState 该状态值的初始值（该参数在代码同一位置，仅首次有效）。\n * @returns {[unknown, Function]} 一个状态值和一个更新该状态值的函数\n */\nfunction useState(initialState = undefined) {}","js"),new m.a("TypeScript","interface useState {\n  /**\n   * useState 返回一个状态值和一个更新该状态值的函数。\n   * @param initialState 该状态值的初始值（该参数在代码同一位置，仅首次有效）。\n   * @returns 一个状态值和一个更新该状态值的函数\n   */\n  <S>(initialState: S | (() => S)): [S, React.Dispatch<React.SetStateAction<S>>];\n\n  /**\n   * useState 返回一个状态值和一个更新该状态值的函数。（重载 - 无参数形式）\n   * @returns 一个状态值和一个更新该状态值的函数\n   */\n  <S = undefined>(): [S | undefined, React.Dispatch<React.SetStateAction<S | undefined>>];\n}","ts")]),p=new a.a([new m.a("index.jsx","import React, { useState } from 'react';\nimport { Button } from 'antd';\n\nexport function CallSetStateDemo() {\n  const [num, setNum] = useState(0);\n  \n  const onClick = () => {\n    setNum(num + 1);\n  };\n\n  return (\n    <div>\n      <span>num</span> = {num}\n      <hr />\n      <Button onClick={onClick}>setNum(num + 1)</Button>\n    </div>\n  );\n}")],(function(){var n=Object(r.useState)(0),e=n[0],t=n[1];return o.a.createElement("div",null,o.a.createElement("span",null,"num")," = ",e,o.a.createElement("hr",null),o.a.createElement(s.a,{onClick:function(){t(e+1)}},"setNum(num + 1)"))})),d=new a.a([new m.a("index.jsx","import React, { useState } from 'react';\nimport useHasChanged from '@/demos/hooks/use-has-changed';\nimport { Button } from 'antd';\n\nexport function CompareSetterDemo() {\n  const [num, setNum] = useState(0);\n  const numHasChanged = useHasChanged(num);\n  const setNumHasChanged = useHasChanged(setNum);\n  \n  const onClick = () => {\n    setNum(num + 1);\n  };\n\n  return (\n    <div>\n      <span>num</span> = {num}\n      <br />\n      <span>num</span> 是否有变化: {`${numHasChanged}`}\n      <br />\n      <span>setNum</span> 是否有变化: {`${setNumHasChanged}`}\n      <hr />\n      <Button onClick={onClick}>setNum(num + 1)</Button>\n    </div>\n  );\n}"),new m.a("use-has-changed.js",u.a),i.a],(function(){var n=Object(r.useState)(0),e=n[0],t=n[1],u=c(e),a=c(t);return o.a.createElement("div",null,o.a.createElement("span",null,"num")," = ",e,o.a.createElement("br",null),o.a.createElement("span",null,"num")," 是否有变化: ",""+u,o.a.createElement("br",null),o.a.createElement("span",null,"setNum")," 是否有变化: ",""+a,o.a.createElement("hr",null),o.a.createElement(s.a,{onClick:function(){t(e+1)}},"setNum(num + 1)"))})),S=new a.a([new m.a("index.jsx","import React, { useState } from 'react';\nimport useUpdateTimes from '@/demos/hooks/use-update-times';\nimport { Button } from 'antd';\n\nexport function IneffectiveCallDemo() {\n  const [num, setNum] = useState(0);\n  const [obj, setObj] = useState({ a: 1, b: 2 });\n  const times = useUpdateTimes();\n\n  const onNumButtonClick = () => {\n    setNum(num);\n  };\n\n  const onChangeNumButtonClick = () => {\n    setNum(num + 1);\n  };\n\n  const onObjButtonClick = () => {\n    obj[times] = times;\n    setObj(obj);\n  };\n\n  const onChangeObjButtonClick = () => {\n    obj[times] = times;\n    setObj({...obj});\n  };\n\n  const onMultiChangeNumButtonClick = () => {\n    setNum(num + 1);\n    setNum(num + 2);\n    setNum(num + 3);\n    setNum(num);\n  };\n\n  return (\n    <div>\n      组件更新次数：{times}\n      <hr />\n      <blockquote>\n        值类型数据测试，同理适用于 string、boolean、number、null、undefined 等。\n        <hr data-mini />\n        <span>num</span>: {num}\n        <br />\n        <Button onClick={onNumButtonClick}>\n          setNum(num)<sub>不会触发组件刷新</sub>\n        </Button>\n        <br />\n        <Button onClick={onChangeNumButtonClick}>setNum(num + 1)</Button>\n      </blockquote>\n      <hr />\n      <blockquote>\n        引用类型数据测试，同理适用于 object、function、Array、Symbo 等。\n        <hr data-mini />\n        <span>obj</span>: {JSON.stringify(obj)}\n        <br />\n        <Button onClick={onObjButtonClick}>\n          obj[times] = times &amp; setObj(obj)<sub>不会触发组件刷新</sub>\n        </Button>\n        <br />\n        <Button onClick={onChangeObjButtonClick}>obj[times] = times &amp; setObj({'{...obj}'})</Button>\n      </blockquote>\n      <hr />\n      <blockquote>\n        同一阶段，多次调用，以最后一个“新值”为准，并与“旧值”对比，如果一致，则不会触发更新。\n        <hr data-mini />\n        <span>num</span>: {num}\n        <br />\n        <Button onClick={onMultiChangeNumButtonClick}>\n          setNum(num + n) &amp; setNum(num)<sub>不会触发组件刷新</sub>\n        </Button>\n      </blockquote>\n    </div>\n  );\n}"),i.b],(function(){var n=Object(r.useState)(0),e=n[0],t=n[1],u=Object(r.useState)({a:1,b:2}),a=u[0],m=u[1],c=Object(l.a)();return o.a.createElement("div",null,"组件更新次数：",c,o.a.createElement("hr",null),o.a.createElement("blockquote",null,"值类型数据测试，同理适用于 string、boolean、number、null、undefined 等。",o.a.createElement("hr",{"data-mini":!0}),o.a.createElement("span",null,"num"),": ",e,o.a.createElement("br",null),o.a.createElement(s.a,{onClick:function(){t(e)}},"setNum(num)",o.a.createElement("sub",null,"不会触发组件刷新")),o.a.createElement("br",null),o.a.createElement(s.a,{onClick:function(){t(e+1)}},"setNum(num + 1)")),o.a.createElement("hr",null),o.a.createElement("blockquote",null,"引用类型数据测试，同理适用于 object、function、Array、Symbo 等。",o.a.createElement("hr",{"data-mini":!0}),o.a.createElement("span",null,"obj"),": ",JSON.stringify(a),o.a.createElement("br",null),o.a.createElement(s.a,{onClick:function(){a[c]=c,m(a)}},"obj[times] = times & setObj(obj)",o.a.createElement("sub",null,"不会触发组件刷新")),o.a.createElement("br",null),o.a.createElement(s.a,{onClick:function(){a[c]=c,m(f({},a))}},"obj[times] = times & setObj(","{...obj}",")")),o.a.createElement("hr",null),o.a.createElement("blockquote",null,"同一阶段，多次调用，以最后一个“新值”为准，并与“旧值”对比，如果一致，则不会触发更新。",o.a.createElement("hr",{"data-mini":!0}),o.a.createElement("span",null,"num"),": ",e,o.a.createElement("br",null),o.a.createElement(s.a,{onClick:function(){t(e+1),t(e+2),t(e+3),t(e)}},"setNum(num + n) & setNum(num)",o.a.createElement("sub",null,"不会触发组件刷新"))))}));e.default="### 描述\n`useState` 将会根据参数 `initialState` 来返回一个记忆化版本的状态值和一个更新该状态值的函数。\n\n### 文档释义\n```demo\nimport(interfaceDemo);\n```\n\n### 基础调用\n```js\nconst [state, setState] = useState(initialState);\nconst [num, setNum] = useState(0);\nconst [str, setStr] = useState('123');\nconst [anchor, setAnchor] = useState<HTMLButtonElement>();\n```\n\n### 更新机制\n调用其 `更新函数`，可对 `状态值` 进行更新。\n```demo\nimport(callSetStateDemo);\n```\n\n### 更新函数的唯一性\n`更新函数` 具有唯一性，其自身不受更新机制而变化，所以不必将其纳入其他 `hooks` 的 `deps` 范围中。\n```demo\nimport(compareSetterDemo);\n```\n\n### 无效的调用\n`值类型` 或 `引用类型` 的状态值，只要设置的 `新值` 与 `旧值` 一致，那么便不会触发更新。\n```demo\nimport(ineffectiveCallDemo);\n```"}}]);