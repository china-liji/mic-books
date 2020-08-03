(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{188:function(n,e,t){"use strict";t.r(e),e.default="### 可定义的类型\n* `interface` 只能用于定义**对象**类型；\n```ts\n// interface 定义对象\ninterface Car {\n  color: string;\n  width: number;\n  height: number;\n\n  run(): void;\n}\n```\n\n* `type` 不仅能定义**对象**，还可以定义其他类型，如**基本类型（原始值）**、**联合类型**、**数组\n**。\n```ts\n// type 定义对象\ntype Car = {\n  color: string;\n  width: number;\n  height: number;\n\n  run(): void;\n};\n\n// type 定义基本类型\ntype Name = string;\ntype ID = number;\ntype Disabled = boolean;\n\n// type 定义联合类型\ntype UserIdentifier1 = Name & ID;\ntype UserIdentifier2 = Name | ID;\n\n// type 定义数组类型\ntype NameList = Name[];\ntype StringList = string[];\ntype NumberList = number[];\n```\n\n### 拓展类型\n* `interface` 可通过关键字 `extends` 对目标类型进行拓展，该目标类型可以是 `interface` 也可以是用 `type` 所定义的对象类型或对象类型与静态已知成员的交集。\n\n```ts\ninterface X {\n  name: string;\n}\n\ntype Y = {\n  name: Symbol;\n};\n\ntype U1 = X & Y;\n\ntype U2 = X & {\n  [name: string]: number;\n}\n\ntype S = string;\n\n// 正确示例\ninterface I1 extends X {\n  value: string;\n}\n\n// 正确示例\ninterface I2 extends Y {\n  value: string;\n}\n\n// 正确示例\ninterface I3 extends U1 {}\n// 错误示例：类型 “string & Symbol” 的属性 “name” 不能赋给字符串索引类型 “number”\ninterface I4 extends U2 {}\n// 错误示例： S 是原始类型 string\ninterface I5 extends S {}\n```\n\n* `type` 比较灵活，可以通过操作符 `&`、`|` 对其他类型进行拓展。\n```ts\ninterface X {\n  name: string;\n}\n\ntype Y = {\n  name: Symbol;\n};\n\n// 正确示例\ntype U1 = X & Y;\n\n// 正确示例\ntype U2 = X & {\n  [name: string]: number;\n};\n\n// 正确示例\ntype O = X | Y;\n```\n\n### 重写属性\n* `interface` 可通过关键字 `extends` 对被拓展类型的属性进行**重写**；重写属性时，类型需与被拓展的属性类型一致或兼容 - 包含于被拓展属性的类型范围中。\n```ts\ninterface A {\n  name: string | Symbol;\n  value: number | string;\n}\n\n// 正确示例\ninterface B extends A {\n  name: string;\n  value: number;\n}\n\n// 错误示例\ninterface C extends A {\n  name: string;\n  // boolean 类型并不存在于 A['value'] 的类型范围之中\n  value: boolean;\n}\n```\n\n* `type` 可以通过操作符 `&`、`|` 对其他类型进行**联合**，其主要功能在于**合并**或**选择**。\n```ts\ninterface X {\n  x: number;\n  z: number;\n}\n\ninterface Y {\n  y: number;\n  z: string;\n}\n\ntype And = X & Y;\n\ntype Or = X | Y;\n\ntype Z1 = And['z']; // Z1 = never\n\ntype Z2 = Or['z']; // Z2 = number | string;\n\n// 利用 type 达不到重写目的\ntype Override = X & Y & {\n  // 无法重写属性 x 的类型至 Symbol：Override['x'] = never\n  x: Symbol;\n  // 无法重写属性 y 的类型至 Symbol：Override['y'] = never\n  y: Symbol;\n}\n```\n\n### 类的实现\n`class` 可以通过关键字 `implements` 以相同的方式实现 `interface` 或 `type`。但是 `class` 和 `interface` 被认为是**静态**的，因此它们不能实现或扩展**联合类型**的 `type`。\n\n```ts\ninterface Car<T = string> {\n  color: T;\n  width: number;\n  height: number;\n}\n\ntype MyCar = Car | Car<Symbol>;\n\n// 正确示例\nclass BYD implements Car {\n  color = 'white';\n  width = 4870;\n  height = 1720;\n\n  run(): void {\n    // ...\n  }\n}\n\n// 错误示例：类只能实现对象类型或对象类型与静态已知成员的交集\nclass BYD implements MyCar {}\n```\n\n### 映射属性\n`interface` 不能使用关键字 `in` 来生成映射属性。\n```ts\n// 错误示例\ninterface A<T> {\n  [N in keyof T]: string; // 这里存在语法错误\n}\n```\n\n`type` 可以使用关键字 `in` 来生成映射属性。\n```ts\n// 正确示例\ntype A<T> = {\n  [N in keyof T]: string;\n};\n```\n\n### 二者的选择建议\n1. `interface` 能现实的，建议都用 `interface`，如：定义新属性、类型或拓展某个类型。因为，`interface` 可以对拓展类型的属性进行检验 - 无则为新建属性，有则视为**重写**并进行类型核对，而 `type` 做不到这一点。\n\n2. `interface` 无法实现的，使用 `type`，如：定义**联合类型**、**基础类型**、**数组类型**。"}}]);