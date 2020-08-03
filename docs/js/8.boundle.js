(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{129:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t){if(this.name=e,this.source=n,!t){var a=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=a?a[1]:""}this.type=t}},130:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a=function(e,n,t,a){void 0===n&&(n=null),void 0===t&&(t=!1),void 0===a&&(a=!1),this.files=e,this.component=n,this.autoUpdate=t,this.cleanStyle=a}},193:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return c}));var a=t(130),o=t(129),r=t(0),l=t.n(r),d=t(131);var c=new a.a([new o.a("index.jsx","import React from 'react';\nimport { Inspector } from 'mic-inspector';\n\nexport function UsageDemo() {\n  const obj = {\n    a: 1,\n    b: 'abc',\n    c: true,\n    d() {},\n    get self() {\n      return obj;\n    }\n  };\n\n  return (\n    <div>\n      <dl>\n        <dt>normal</dt>\n        <dd>\n          <Inspector name='object' value={obj} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>normal</dt>\n        <dd>\n          <Inspector name='location' value={location} isNonenumerable={false} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.defaultExpand = true</dt>\n        <dd>\n          <Inspector name='object' value={obj} defaultExpand />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.isNonenumerable = true</dt>\n        <dd>\n          <Inspector name='document' value={document} isNonenumerable />\n        </dd>\n      </dl>\n    </div>\n  );\n}")],(function(){var e={a:1,b:"abc",c:!0,d:function(){},get self(){return e}};return l.a.createElement("div",null,l.a.createElement("dl",null,l.a.createElement("dt",null,"normal"),l.a.createElement("dd",null,l.a.createElement(d.Inspector,{name:"object",value:e}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"normal"),l.a.createElement("dd",null,l.a.createElement(d.Inspector,{name:"location",value:location,isNonenumerable:!1}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"props.defaultExpand = true"),l.a.createElement("dd",null,l.a.createElement(d.Inspector,{name:"object",value:e,defaultExpand:!0}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"props.isNonenumerable = true"),l.a.createElement("dd",null,l.a.createElement(d.Inspector,{name:"document",value:document,isNonenumerable:!0}))))}),!1,!0);n.default="### Description\nA `react` inspector which a most similar of `Chorme DevTools` inspector.\n\n### Usage\n```jsx\nimport { Inspector } from 'mic-inspector';\n\n<Inspector name='name' data={anyObject} />;\n<Inspector name='name' data={anyObject} isNonenumerable defaultExpand />;\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **name** · *required* - A specific property name to display.\n* **data** · *required* - Any type data that you want to inspect.\n* **isNonenumerable** · *optional* - A boolean represents whether the object property is non-enumerable.\n* **defaultExpand** · *optional* - A boolean represents whether this property should be expand by default\n* **...props** · *extends* - HTMLProps&lt;HTMLDivElement&gt;"}}]);