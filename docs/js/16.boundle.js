(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e,n,t){if(this.name=e,this.source=n,!t){var r=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=r?r[1]:""}this.type=t}},364:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return u}));var r=t(98),a=t(208),l=t(0),o=t.n(l),i=t(99);var u=new r.a([new a.a("index.jsx","import React from 'react';\nimport { StringValue } from 'mic-inspector';\n\nexport function UsageDemo() {\n  return (\n    <div>\n      <dl>\n        <dt>normal</dt>\n        <dd>\n          <StringValue value='abc' />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.before = props.after = '`'</dt>\n        <dd>\n          <StringValue value='abc' before='`' after='`' />\n        </dd>\n      </dl>\n      <dl>\n        <dt>props.before = '${'{'}' and props.after = '{'}'}'</dt>\n        <dd>\n          <StringValue value='abc' before='${' after='}' />\n        </dd>\n      </dl>\n    </div>\n  );\n}")],(function(){return o.a.createElement("div",null,o.a.createElement("dl",null,o.a.createElement("dt",null,"normal"),o.a.createElement("dd",null,o.a.createElement(i.StringValue,{value:"abc"}))),o.a.createElement("dl",null,o.a.createElement("dt",null,"props.before = props.after = '`'"),o.a.createElement("dd",null,o.a.createElement(i.StringValue,{value:"abc",before:"`",after:"`"}))),o.a.createElement("dl",null,o.a.createElement("dt",null,"props.before = '$","{","' and props.after = '","}","'"),o.a.createElement("dd",null,o.a.createElement(i.StringValue,{value:"abc",before:"${",after:"}"}))))}),!1,!0);n.default="### Description\nObject string value inspector.\n\n### Usage\n```jsx\nimport { StringValue } from 'mic-inspector';\n\n<StringValue value='abc' />\n<StringValue value='abc' before='`' after='`' />\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **value** · *required* - A specific string.\n* **before** · *optional* - A string represents the start tag of this string value.\n* **after** · *optional* - A string represents the end tag of this string value.\n* **...props** · *extends* - PropertyValueProps"}}]);
//# sourceMappingURL=16.boundle.js.map