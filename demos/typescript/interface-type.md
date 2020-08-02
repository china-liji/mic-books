### 可定义的类型
* `interface` 只能用于定义**对象**类型；
```ts
// interface 定义对象
interface Car {
  color: string;
  width: number;
  height: number;

  run(): void;
}
```

* `type` 不仅能定义**对象**，还可以定义其他类型，如**基本类型（原始值）**、**联合类型**、**数组
**。
```ts
// type 定义对象
type Car = {
  color: string;
  width: number;
  height: number;

  run(): void;
};

// type 定义基本类型
type Name = string;
type ID = number;
type Disabled = boolean;

// type 定义联合类型
type UserIdentifier1 = Name & ID;
type UserIdentifier2 = Name | ID;

// type 定义数组类型
type NameList = Name[];
type StringList = string[];
type NumberList = number[];
```

### 拓展类型
* `interface` 可通过关键字 `extends` 对目标类型进行拓展，该目标类型可以是 `interface` 也可以是用 `type` 所定义的对象类型或对象类型与静态已知成员的交集。

```ts
interface X {
  name: string;
}

type Y = {
  name: Symbol;
};

type U1 = X & Y;

type U2 = X & {
  [name: string]: number;
}

type S = string;

// 正确示例
interface I1 extends X {
  value: string;
}

// 正确示例
interface I2 extends Y {
  value: string;
}

// 正确示例
interface I3 extends U1 {}
// 错误示例：类型 “string & Symbol” 的属性 “name” 不能赋给字符串索引类型 “number”
interface I4 extends U2 {}
// 错误示例： S 是原始类型 string
interface I5 extends S {}
```

* `type` 比较灵活，可以通过操作符 `&`、`|` 对其他类型进行拓展。
```ts
interface X {
  name: string;
}

type Y = {
  name: Symbol;
};

// 正确示例
type U1 = X & Y;

// 正确示例
type U2 = X & {
  [name: string]: number;
};

// 正确示例
type O = X | Y;
```

### 重写属性
* `interface` 可通过关键字 `extends` 对被拓展类型的属性进行**重写**；重写属性时，类型需与被拓展的属性类型一致或兼容 - 包含于被拓展属性的类型范围中。
```ts
interface A {
  name: string | Symbol;
  value: number | string;
}

// 正确示例
interface B extends A {
  name: string;
  value: number;
}

// 错误示例
interface C extends A {
  name: string;
  // boolean 类型并不存在于 A['value'] 的类型范围之中
  value: boolean;
}
```

* `type` 可以通过操作符 `&`、`|` 对其他类型进行**联合**，其主要功能在于**合并**或**选择**。
```ts
interface X {
  x: number;
  z: number;
}

interface Y {
  y: number;
  z: string;
}

type And = X & Y;

type Or = X | Y;

type Z1 = And['z']; // Z1 = never

type Z2 = Or['z']; // Z2 = number | string;

// 利用 type 达不到重写目的
type Override = X & Y & {
  // 无法重写属性 x 的类型至 Symbol：Override['x'] = never
  x: Symbol;
  // 无法重写属性 y 的类型至 Symbol：Override['y'] = never
  y: Symbol;
}
```

### 类的实现
`class` 可以通过关键字 `implements` 以相同的方式实现 `interface` 或 `type`。但是 `class` 和 `interface` 被认为是**静态**的，因此它们不能实现或扩展**联合类型**的 `type`。

```ts
interface Car<T = string> {
  color: T;
  width: number;
  height: number;
}

type MyCar = Car | Car<Symbol>;

// 正确示例
class BYD implements Car {
  color = 'white';
  width = 4870;
  height = 1720;

  run(): void {
    // ...
  }
}

// 错误示例：类只能实现对象类型或对象类型与静态已知成员的交集
class BYD implements MyCar {}
```

### 映射属性
`interface` 不能使用关键字 `in` 来生成映射属性。
```ts
// 错误示例
interface A<T> {
  [N in keyof T]: string; // 这里存在语法错误
}
```

`type` 可以使用关键字 `in` 来生成映射属性。
```ts
// 正确示例
type A<T> = {
  [N in keyof T]: string;
};
```

### 二者的选择建议
1. `interface` 能现实的，建议都用 `interface`，如：定义新属性、类型或拓展某个类型。因为，`interface` 可以对拓展类型的属性进行检验 - 无则为新建属性，有则视为**重写**并进行类型核对，而 `type` 做不到这一点。

2. `interface` 无法实现的，使用 `type`，如：定义**联合类型**、**基础类型**、**数组类型**。