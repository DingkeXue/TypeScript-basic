/*
* 泛型是指在定义函数、接口或类的时候，不预先定义具体的类型，等调用时再定义
* */
// 预定义类型函数写法：传入的参数只能是 number
function sumValue1(a: number): number {
    return a;
}
sumValue1(1);
// 泛型：编译器会自动判断传入参数类型
function sumValue2<T>(a:T): T {
    return a;
}
sumValue2('hello');
sumValue2(1);

// 预定义类型接口写法
interface Person {
    <T>(name: T): T;
}
let whh: Person = function <T>(name: T): T {
    return name;
};

// 泛型约束：使用 extends 约束了泛型必须有 length 属性
function sayHi<T extends {length}>(obj: T): T {
    return obj.length;
}
let obj = {
    name: 'Foo',
    length: 1
};
sayHi(obj);

interface Light {
    lightOn: boolean;
}
function whiteLight<T extends Light>(arg: T): T {
    console.log(arg.lightOn);
    return arg;
}
let arg = {
    name: 'hhh',
    lightOn: true
};
whiteLight(arg);

/*======================泛型-类=====================*/
// 预定义类型
class CaclNumber {
    num1: any;
    num2: any;

    constructor(num1: any, num2: any) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calc(): number {
        return +this.num1 * +this.num2;
    }
}

// 泛型写法
class CalcNumber2 {
    num1: T;
    num2: T;
    constructor(n1: T, n2: T) {
        this.num1 = n1;
        this.num2 = n2;
    }

    calc(): T {
        return +this.num1 * +this.num2;
    }
}
let number = new CalcNumber2(1, 2);
let count = new CalcNumber2('1', '2');
