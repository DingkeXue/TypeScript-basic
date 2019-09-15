/*
* 泛型是指在定义函数、接口或类的时候，不预先定义具体的类型，等调用时再定义
* */
// 预定义类型函数写法：传入的参数只能是 number
function sumValue1(a) {
    return a;
}
sumValue1(1);
// 泛型：编译器会自动判断传入参数类型
function sumValue2(a) {
    return a;
}
sumValue2('hello');
sumValue2(1);
var whh = function (name) {
    return name;
};
// 泛型约束：使用 extends 约束了泛型必须有 length 属性
function sayHi(obj) {
    return obj.length;
}
var obj = {
    name: 'Foo',
    length: 1
};
sayHi(obj);
function whiteLight(arg) {
    console.log(arg.lightOn);
    return arg;
}
var arg = {
    name: 'hhh',
    lightOn: true
};
whiteLight(arg);
/*======================泛型-类=====================*/
// 预定义类型
var CaclNumber = /** @class */ (function () {
    function CaclNumber(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    CaclNumber.prototype.calc = function () {
        return +this.num1 * +this.num2;
    };
    return CaclNumber;
}());
// 泛型写法
var CalcNumber2 = /** @class */ (function () {
    function CalcNumber2(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    CalcNumber2.prototype.calc = function () {
        return +this.num1 * +this.num2;
    };
    return CalcNumber2;
}());
var number = new CalcNumber2(1, 2);
var count = new CalcNumber2('1', '2');
