(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t){if(this.name=e,this.source=n,!t){var a=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=a?a[1]:""}this.type=t}},131:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t,a){void 0===n&&(n=null),void 0===t&&(t=!1),void 0===a&&(a=!1),this.files=e,this.component=n,this.autoUpdate=t,this.cleanStyle=a}},201:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return o}));var a=t(131),r=t(130),l=t(0),d=t.n(l),u=t(132);var o=new a.a([new r.a("index.jsx","import React from 'react';\nimport { ObjectValue } from 'mic-inspector';\n\nexport function UsageDemo() {\n  const obj = {\n    a: 1,\n    b: 'abc',\n    c: true,\n    d() {},\n    get self() {\n      return obj;\n    },\n    get arr() {\n      return arr;\n    }\n  };\n\n  const arr = [obj, 1, 'a', document.body];\n\n  return (\n    <div>\n      <dl>\n        <dt>object # normal</dt>\n        <dd>\n          <ObjectValue value={obj} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>array # normal</dt>\n        <dd>\n          <ObjectValue value={arr} />\n        </dd>\n      </dl>\n      ----------\n      <dl>\n        <dt>object # empty</dt>\n        <dd>\n          <ObjectValue value={{}} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>array # empty</dt>\n        <dd>\n          <ObjectValue value={[]} />\n        </dd>\n      </dl>\n      ----------\n      <dl>\n        <dt>object # props.preview = true</dt>\n        <dd>\n          <ObjectValue value={obj} preview />\n        </dd>\n      </dl>\n      <dl>\n        <dt>array # props.preview = true</dt>\n        <dd>\n          <ObjectValue value={arr} preview />\n        </dd>\n      </dl>\n      ----------\n      <dl>\n        <dt>object # props.maxPropertyLength = 2</dt>\n        <dd>\n          <ObjectValue value={obj} maxPropertyLength={2} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>array # props.maxPropertyLength = 2</dt>\n        <dd>\n          <ObjectValue value={arr} maxPropertyLength={2} />\n        </dd>\n      </dl>\n    </div>\n  );\n}")],(function(){var e={a:1,b:"abc",c:!0,d:function(){},get self(){return e},get arr(){return n}},n=[e,1,"a",document.body];return d.a.createElement("div",null,d.a.createElement("dl",null,d.a.createElement("dt",null,"object # normal"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:e}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array # normal"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:n}))),"----------",d.a.createElement("dl",null,d.a.createElement("dt",null,"object # empty"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:{}}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array # empty"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:[]}))),"----------",d.a.createElement("dl",null,d.a.createElement("dt",null,"object # props.preview = true"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:e,preview:!0}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array # props.preview = true"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:n,preview:!0}))),"----------",d.a.createElement("dl",null,d.a.createElement("dt",null,"object # props.maxPropertyLength = 2"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:e,maxPropertyLength:2}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array # props.maxPropertyLength = 2"),d.a.createElement("dd",null,d.a.createElement(u.ObjectValue,{value:n,maxPropertyLength:2}))))}),!1,!0);n.default="### Description\nObject value inspector.\n\n### Usage\n```jsx\nimport { ObjectValue } from 'mic-inspector';\n\n<ObjectValue value={anyObject} />;\n<ObjectValue value={anyObject} preview maxPropertyLength={5} />;\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **value** · *required* - Any object that you want to inspect.\n* **preview** · *optional* - A boolean represents whether enable the preview mode. In preview mode, the property will not show sub properties.\n* **maxPropertyLength** · *optional* - A number represents the length of object properties to preview.\n* **...props** · *extends* - PropertyValueProps"}}]);