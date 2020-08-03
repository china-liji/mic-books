(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{210:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e,n,t){if(this.name=e,this.source=n,!t){var r=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=r?r[1]:""}this.type=t}},359:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return p}));var r=t(98),o=t(210),a=t(0),l=t.n(a),d=t(99);var p=new r.a([new o.a("index.jsx","import React from 'react';\nimport { Property, NamedDescriptor } from 'mic-inspector';\n\nexport function UsageDemo() {\n  const descriptor = new NamedDescriptor(window, 'window.location', location);\n\n  return (\n    <div>\n      <dl>\n        <dt>normal</dt>\n        <dd>\n          <Property name='location' value={location} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.defaultExpand = true</dt>\n        <dd>\n          <Property name='location' value={location} defaultExpand />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.isNonenumerable = true</dt>\n        <dd>\n          <Property name='location' value={location} isNonenumerable />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.preview = true</dt>\n        <dd>\n          <Property name='location' value={location} preview />\n        </dd>\n      </dl>\n      <dl>\n        <dt>descriptor mode</dt>\n        <dd>\n          <Property descriptor={descriptor} />\n        </dd>\n      </dl>\n    </div>\n  );\n}")],(function(){var e=new d.NamedDescriptor(window,"window.location",location);return l.a.createElement("div",null,l.a.createElement("dl",null,l.a.createElement("dt",null,"normal"),l.a.createElement("dd",null,l.a.createElement(d.Property,{name:"location",value:location}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"props.defaultExpand = true"),l.a.createElement("dd",null,l.a.createElement(d.Property,{name:"location",value:location,defaultExpand:!0}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"props.isNonenumerable = true"),l.a.createElement("dd",null,l.a.createElement(d.Property,{name:"location",value:location,isNonenumerable:!0}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"props.preview = true"),l.a.createElement("dd",null,l.a.createElement(d.Property,{name:"location",value:location,preview:!0}))),l.a.createElement("dl",null,l.a.createElement("dt",null,"descriptor mode"),l.a.createElement("dd",null,l.a.createElement(d.Property,{descriptor:e}))))}),!1,!0);n.default="### Description\nObject property inspector.\n\n### Usage\n```jsx\nimport { Property, NamedDescriptor } from 'mic-inspector';\n\nconst descriptor = new NamedDescriptor(window, 'window.location', location);\n\n<Property name='object' value={anyObject} preview defaultExpand isNonenumerable={false} />\n<Property descriptor={descriptor} />\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **name** · *optional* - Property name.\n* **value** · *optional* - Property value.\n* **descriptor** · *optional* - Property descriptor.\n* **defaultExpand** · *optional* - A boolean represents whether this property should be expand by default\n* **isNonenumerable** · *optional* - A boolean represents whether the object property is non-enumerable.\n* **preview** · *optional* - A boolean represents whether enable the preview mode. In preview mode, the property can not expand and show sub properties of an object.\n* **...props** · *extends* - HTMLProps&lt;HTMLSpanElement&gt;"}}]);
//# sourceMappingURL=14.boundle.js.map