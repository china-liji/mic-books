var a: A = ...; - 先规定类型，是根据类型定义值，值必须将类型中的字段全部定义，而且不能多定义不存在的字段。

var a = ... as A; - 先定义值，再将值的类型转换为指定类型，值可以缺少类型中的字段，但不能多定义不存在的字段。

``` ts
interface Fn {
  (a: string, b: number | boolean): string;
  (a: number | boolean): number;
}

// 报错：不能将类型“string | number”分配给类型“string”
var a: Fn = (arg1: string | number | boolean, arg2?: number | boolean): string | number => {
  return 1;
};

// 正确
var a = (
  (arg1: string | number | boolean, arg2?: number | boolean): string | number => {
    return 1;
  }
) as Fn;
```