* id、class、data-* 组件 与 main、article 页面布局

* ts: 函数重载与多参数的区别：(a, b, c?, d?) 与 (a, b, c, d)
```ts
// 这里是 2 - 4 个参数，需要判断第 3、4 参数的存在以实现某些功能
function a(a, b, c?, d?): void {
  
};

// 与

function b(a: string, b: string): void
function b(a: number, b: number, c: number, d:number): void
// 这里只能是 2 个参数 或者 4个参数，不存在 3 参数情况，所以，不用判断 d 是否存在，可以直接使用
function b(a: number | string, b: number | string, c?: number, d?:number): void {

}
```