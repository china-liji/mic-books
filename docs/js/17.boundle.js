(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{208:function(n,e,a){"use strict";a.d(e,"a",(function(){return t}));var t=function(n,e,a){if(this.name=n,this.source=e,!a){var t=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);a=t?t[1]:""}this.type=a}},365:function(n,e,a){"use strict";a.r(e),a.d(e,"usageDemo",(function(){return c}));var t=a(98),l=a(208),o=a(0),r=a.n(o),u=a(99);var c=new t.a([new l.a("index.jsx","import React from 'react';\nimport { UnknownValue } from 'mic-inspector';\n\nexport function UsageDemo() {\n  return (\n    <div>\n      <UnknownValue value={location} />\n      <br />\n      <UnknownValue value='abc' />\n      <br />\n      <UnknownValue value={123} />\n      <br />\n      <UnknownValue value={undefined} />\n      <br />\n      <UnknownValue value={true} />\n      <br />\n      <UnknownValue value={false} />\n      <br />\n      <UnknownValue value={location.reload} />\n    </div>\n  );\n}")],(function(){return r.a.createElement("div",null,r.a.createElement(u.UnknownValue,{value:location}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:"abc"}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:123}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:void 0}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:!0}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:!1}),r.a.createElement("br",null),r.a.createElement(u.UnknownValue,{value:location.reload}))}),!1,!0);e.default="### Description\nObject unknown value inspector. This component will render another specific component by value type.\n\n### Usage\n```jsx\nimport { UnknownValue } from 'mic-inspector';\n\n<UnknownValue value={anyValue} />\n```\n\n### Demo\n```demo\nimport(usageDemo);\n```\n\n### Props\n* **value** · *required* - Any type data that you want to inspect.\n* **...props** · *extends* - PropertyValueProps"}}]);