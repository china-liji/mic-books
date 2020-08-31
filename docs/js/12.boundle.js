(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{172:function(n,e,o){"use strict";o.d(e,"a",(function(){return t}));var t=function(n,e,o){if(this.name=n,this.source=e,!o){var t=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);o=t?t[1]:""}this.type=o}},405:function(n,e,o){"use strict";o.r(e),o.d(e,"usageDemo",(function(){return m}));var t=o(74),i=o(172),r=o(0),c=o.n(r),s=o(173);var m=new t.a([new i.a("index.jsx","import React from 'react';\nimport { DomInspector } from 'mic-inspector';\n\nexport function UsageDemo() {\n  return (\n    <div>\n      <DomInspector dom={document} />\n    </div>\n  );\n}")],(function(){return c.a.createElement("div",null,c.a.createElement(s.DomInspector,{dom:document}))}),!1,!0);e.default="### Description\nA `react` DOM inspector which a most similar of `Chorme DevTools` inspector.\n\n### Usage\n```jsx\nimport { DomInspector } from 'mic-inspector';\n\n<DomInspector dom={document} />\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **dom** · *required* - A specific node name to inspect.\n* **expandLevel* · *optional* - An integer specifying to which level the tree should be initially expanded.\n* **...props** · *extends* - HTMLProps&lt;HTMLDivElement&gt;"}}]);