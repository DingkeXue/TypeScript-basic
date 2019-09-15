/*
* 命名空间是引用和输出
* 引入：///
* 输出编译命令：tsc main.ts --outFile main.js(打包名字)
* */
/// <reference path='./circle.ts' />
/// <reference path='./sumValue.ts' />
console.log(MyMath.sumValue(10, 20), MyMath.Circle.calcCircle(30));
