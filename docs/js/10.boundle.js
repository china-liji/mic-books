(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{343:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e,n,t){if(this.name=e,this.source=n,!t){var r=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=r?r[1]:""}this.type=t}},357:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return p}));var r=t(114),a=t(343),m=t(0),o=t.n(m),d=t(115);var p=new r.a([new a.a("index.jsx","import React from 'react';\nimport { PropertyName, DescriptorNameType } from 'mic-inspector';\n\nexport function UsageDemo() {\n  return (\n    <div>\n      <dl>\n        <dt>normal</dt>\n        <dd>\n          <PropertyName name='abc' />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.dimmed = true</dt>\n        <dd>\n          <PropertyName name={Symbol('abc')} dimmed />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.type = DescriptorNameType.Index</dt>\n        <dd>\n          <PropertyName name={0} type={DescriptorNameType.Index} />\n        </dd>\n      </dl>\n    </div>\n  );\n}")],(function(){return o.a.createElement("div",null,o.a.createElement("dl",null,o.a.createElement("dt",null,"normal"),o.a.createElement("dd",null,o.a.createElement(d.PropertyName,{name:"abc"}))),o.a.createElement("dl",null,o.a.createElement("dt",null,"props.dimmed = true"),o.a.createElement("dd",null,o.a.createElement(d.PropertyName,{name:Symbol("abc"),dimmed:!0}))),o.a.createElement("dl",null,o.a.createElement("dt",null,"props.type = DescriptorNameType.Index"),o.a.createElement("dd",null,o.a.createElement(d.PropertyName,{name:0,type:d.DescriptorNameType.Index}))))}),!1,!0);n.default="### Description\nObject property name inspector.\n\n### Usage\n```jsx\nimport { PropertyName } from 'mic-inspector';\n\n<PropertyName name='abc' />;\n<PropertyName name={Symbol('abc')} dimmed />;\n<PropertyName name={0} type={DescriptorNameType.Index} />;\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **name** · *required* - Property name.\n* **dimmed** · *optional* - A boolean represents whether the font color should be dimmed.\n* **type** · *optional* - Property name type, only for query this component in css.\n* **...props** · *extends* - HTMLProps&lt;HTMLSpanElement&gt;"}}]);
//# sourceMappingURL=10.boundle.js.map