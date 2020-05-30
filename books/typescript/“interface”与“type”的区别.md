# “interface” 与 “type” 的区别

1. interface 用于覆盖，属于重写
2. type 用于兼容，主要归为合并与抉择（多选1），可以用操作符 & |， type 可以用 [K in keyof X]: string，好像 interface 也可以
3. 扩充属性的情况下，建议使用 interface，以表明在原有基础上该属性并不存在，为新增。