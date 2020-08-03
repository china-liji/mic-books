(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{209:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var l=function(e,n,t){if(this.name=e,this.source=n,!t){var l=/\.([^/\\.]+?)(?=(?:[?#].*)?$)/.exec(this.name);t=l?l[1]:""}this.type=t}},354:function(e,n,t){"use strict";t.r(n),t.d(n,"usageDemo",(function(){return m}));var l=t(97),a=t(209),r=t(0),d=t.n(r),u=t(1),o=Object(u.createStyles)("usage-demo",{"& > dl":{marginBottom:u.EM.M1,"& > dt":{fontWeight:"bold",fontSize:u.EM.M2,"&::before":{content:'"<"'},"&::after":{content:'" />"'}}}}),c=t(98);var m=new l.a([new a.a("index.jsx","import React from 'react';\nimport { useStyles } from './use-styles';\nimport { DomInspector, Inspector, Properties, Property, PropertyName, PropertyValue, GetterValue, NumberValue, ObjectValue, StringValue, UnknownValue } from 'mic-inspector';\n\nexport function UsageDemo() {\n  const obj = {\n    a: 1,\n    b: 2,\n    get self() {\n      if (this === obj) {\n        return obj;\n      }\n\n      throw new Error('here is an error');\n    }\n  };\n\n  return (\n    <div className={useStyles()}>\n      <dl>\n        <dt>Inspector</dt>\n        <dd>\n          <Inspector name='document' value={document} />\n          <Inspector name='object' value={obj} defaultExpand />\n        </dd>\n      </dl>\n      <dl>\n        <dt>DomInspector</dt>\n        <dd>\n          <DomInspector dom={document} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>Properties</dt>\n        <dd>\n          <Properties owner={obj} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>Property</dt>\n        <dd>\n          <Property name='object' value={obj} defaultExpand isNonenumerable={false} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>PropertyName</dt>\n        <dd>\n          <PropertyName name='enumerable' />\n          <br />\n          <PropertyName name='nonenumerable' dimmed />\n        </dd>\n      </dl>\n      <dl>\n        <dt>PropertyValue</dt>\n        <dd>\n          <PropertyValue>This is a super component of other type values</PropertyValue>\n        </dd>\n      </dl>\n      <dl>\n        <dt>GetterValue</dt>\n        <dd>\n          <dl>\n            <dt>GetterStatus.Protected -&gt; GetterStatus.Opened</dt>\n            <dd>\n              <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self').get} owner={obj} />\n            </dd>\n          </dl>\n          <dl>\n            <dt>GetterStatus.Protected -&gt; GetterStatus.Unexpected</dt>\n            <dd>\n              <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self').get} owner={null} />\n            </dd>\n          </dl>\n        </dd>\n      </dl>\n      <dl>\n        <dt>NumberValue</dt>\n        <dd>\n          You can press the alt/cmd key and click the number to change the number radix.\n          <br />\n          <NumberValue value={255} />\n        </dd>\n      </dl>\n      <dl>\n        <dt>ObjectValue</dt>\n        <dd>\n          <dl>\n            <dt>object - normal mode</dt>\n            <dd>\n              <ObjectValue value={obj} />\n            </dd>\n          </dl>\n          <dl>\n            <dt>object - preview mode</dt>\n            <dd>\n              <ObjectValue value={obj} preview />\n            </dd>\n          </dl>\n          <dl>\n            <dt>array - normal mode</dt>\n            <dd>\n              <ObjectValue value={[1, 2, 3]} />\n            </dd>\n          </dl>\n          <dl>\n            <dt>array - preview mode</dt>\n            <dd>\n              <ObjectValue value={[1, 2, 3]} preview />\n            </dd>\n          </dl>\n        </dd>\n      </dl>\n      <dl>\n        <dt>StringValue</dt>\n        <dd>\n          <StringValue value={'123'.repeat(10)} />\n          <br />\n          <StringValue value={'123'.repeat(10)} before={'\\''} after={'\\''} />\n          <br />\n          <StringValue value={'123'.repeat(10)} before='`' after='`' />\n        </dd>\n      </dl>\n      <dl>\n        <dt>UnknownValue</dt>\n        <dd>\n          <UnknownValue value={obj} />\n          <br />\n          <UnknownValue value='abc' />\n          <br />\n          <UnknownValue value={123} />\n          <br />\n          <UnknownValue value={undefined} />\n          <br />\n          <UnknownValue value={true} />\n          <br />\n          <UnknownValue value={false} />\n          <br />\n          <UnknownValue value={location.reload} />\n        </dd>\n      </dl>\n    </div>\n  );\n}"),new a.a("use-styles.js","import { createStyles, EM } from 'mic-global';\n\nexport const useStyles = createStyles(\n  'usage-demo',\n  {\n    '& > dl': {\n      marginBottom: EM.M1,\n      '& > dt': {\n        fontWeight: 'bold',\n        fontSize: EM.M2,\n        '&::before': {\n          content: '\"<\"',\n        },\n        '&::after': {\n          content: '\" />\"',\n        },\n      },\n    },\n  }\n);")],(function(){var e={a:1,b:2,get self(){if(this===e)return e;throw new Error("here is an error")}};return d.a.createElement("div",{className:o()},d.a.createElement("dl",null,d.a.createElement("dt",null,"Inspector"),d.a.createElement("dd",null,d.a.createElement(c.Inspector,{name:"document",value:document}),d.a.createElement(c.Inspector,{name:"object",value:e,defaultExpand:!0}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"DomInspector"),d.a.createElement("dd",null,d.a.createElement(c.DomInspector,{dom:document}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"Properties"),d.a.createElement("dd",null,d.a.createElement(c.Properties,{owner:e}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"Property"),d.a.createElement("dd",null,d.a.createElement(c.Property,{name:"object",value:e,defaultExpand:!0,isNonenumerable:!1}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"PropertyName"),d.a.createElement("dd",null,d.a.createElement(c.PropertyName,{name:"enumerable"}),d.a.createElement("br",null),d.a.createElement(c.PropertyName,{name:"nonenumerable",dimmed:!0}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"PropertyValue"),d.a.createElement("dd",null,d.a.createElement(c.PropertyValue,null,"This is a super component of other type values"))),d.a.createElement("dl",null,d.a.createElement("dt",null,"GetterValue"),d.a.createElement("dd",null,d.a.createElement("dl",null,d.a.createElement("dt",null,"GetterStatus.Protected -> GetterStatus.Opened"),d.a.createElement("dd",null,d.a.createElement(c.GetterValue,{value:Object.getOwnPropertyDescriptor(e,"self").get,owner:e}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"GetterStatus.Protected -> GetterStatus.Unexpected"),d.a.createElement("dd",null,d.a.createElement(c.GetterValue,{value:Object.getOwnPropertyDescriptor(e,"self").get,owner:null}))))),d.a.createElement("dl",null,d.a.createElement("dt",null,"NumberValue"),d.a.createElement("dd",null,"You can press the alt/cmd key and click the number to change the number radix.",d.a.createElement("br",null),d.a.createElement(c.NumberValue,{value:255}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"ObjectValue"),d.a.createElement("dd",null,d.a.createElement("dl",null,d.a.createElement("dt",null,"object - normal mode"),d.a.createElement("dd",null,d.a.createElement(c.ObjectValue,{value:e}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"object - preview mode"),d.a.createElement("dd",null,d.a.createElement(c.ObjectValue,{value:e,preview:!0}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array - normal mode"),d.a.createElement("dd",null,d.a.createElement(c.ObjectValue,{value:[1,2,3]}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"array - preview mode"),d.a.createElement("dd",null,d.a.createElement(c.ObjectValue,{value:[1,2,3],preview:!0}))))),d.a.createElement("dl",null,d.a.createElement("dt",null,"StringValue"),d.a.createElement("dd",null,d.a.createElement(c.StringValue,{value:"123".repeat(10)}),d.a.createElement("br",null),d.a.createElement(c.StringValue,{value:"123".repeat(10),before:"'",after:"'"}),d.a.createElement("br",null),d.a.createElement(c.StringValue,{value:"123".repeat(10),before:"`",after:"`"}))),d.a.createElement("dl",null,d.a.createElement("dt",null,"UnknownValue"),d.a.createElement("dd",null,d.a.createElement(c.UnknownValue,{value:e}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:"abc"}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:123}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:void 0}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:!0}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:!1}),d.a.createElement("br",null),d.a.createElement(c.UnknownValue,{value:location.reload}))))}),!1,!0);n.default="# `Mic-Inspector`\nA `react` inspector which a most similar of `Chorme DevTools` inspector.\n\n### Installation\n```bash\n# Yarn\nyarn add mic-inspector\n\n# NPM\nnpm install mic-inspector\n```\n\n### Usage & Demo\n```demo\nimport(usageDemo)\n```\n\n### Components\n* [<Inspector />](./inspector)\n* [<DomInspector />](./dom-inspector)\n* [<Properties />](./properties)\n* [<Property />](./property)\n* [<PropertyName />](./property-name)\n* [<PropertyValue />](./property-value)\n* [<GetterValue />](./getter-value)\n* [<NumberValue />](./number-value)\n* [<ObjectValue />](./object-value)\n* [<StringValue />](./string-value)\n* [<UnknownValue />](./unknown-value)\n\n### Urls\n* Repository: [https://github.com/china-liji/mic-inspector](https://github.com/china-liji/mic-inspector)\n* Bugs: [https://github.com/china-liji/mic-inspector/issues](https://github.com/china-liji/mic-inspector/issues)"}}]);