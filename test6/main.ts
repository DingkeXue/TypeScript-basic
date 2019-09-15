/*===================================基础数据类型===========================================*/
// number
let num:number = 1;

// string
let str: string = 'string';

// boolean
let boo: boolean = true;

// null,undefined 是所有类型的子集，所以可以给任何类型赋该值
let no:null = undefined;
no = null;
num = undefined;
num = null;
str = undefined;
str = null;
boo = undefined;
boo = null;

// never 类型：它是任何类型的子类型，也可以赋值给任何类型；然而，never类型没有子类型，即使any类型也不能赋值给never。never常用于抛出异常和无限循环
let x: never;
// x = 123; 会报错
// never 应用场景：抛出异常
function error(message: string): never {
    throw new Error(message);
}
// never 应用场景：死循环
function loop():never {
    while (true) {
        //...
    }
}

// void js 中没有该类型，用它来表示没有任何返回值的函数
function say(): void {
    console.log(1);
    // return 一个值会报错
}


/*===================================数组 元组 枚举===========================================*/
// 数组：合并了相同类型是对象
let arr : Array<number> = [1, 2];
let arr2: number[] = [1, 2];
let arr3: any[] = [1, '2'];

// 元组：合并了不同类型的对象。元组类型前后一定要一一对应，否则会报错
let colors:[string, number] = ['hello', 1];
// let colors:[string, number] = [1, 'hello']; 会报错

// 枚举 enum 用于取值被限于一定范围内的场景。枚举成员会被赋值为从 0 开始递增 1 的数字，同时枚举名和枚举值一一反向映射
enum Color {
    Red,
    Green,
    Blue
}
console.log(Color[0] === 'Red'); // true
console.log(Color['Green'] === 1);

// 可以手动为枚举对象成员赋值
enum Days {
    Fri = 1,
    Sun = 4,
    Wed
}
console.log(Days['Fri'] === 1);  // true
console.log(Days['Wed'] === 5); // true


/*===================================函数类型===========================================*/
// 在 js 中定义函数的两种方式：函数声明和函数表达式
function sum(a, b) {
    return a + b;
}
let mySum = function (a, b) {
    return a + b;
};

// 上述函数对输入参数，输出都没有限制，在 ts 中会对其进行限制。如果输入/输出参数类型不对或者多余/少于要求是会报错的
// 函数声明写法
function sum2(a:number, b:number): number {
    return a + b;
}
console.log(sum2(1, 2));
// console.log(sum2('1', 2)); 会报错

// 函数表达式写法
let mySum2 = function (a:number, b:number): number {
    return a + b;
};
// 上面的写法只是声明了等号右边函数的参数/输出类型，并没有声明 mySum2 的类型。ts 中使用 => 声明一个函数，并且左右两边函数的参数和输出类型必须一致
let mySum3:(a:number, b:number) => number = function (a: number, b:number): number {
    return a + b;
};
console.log(mySum3(1, 2));

// 可选参数：可选参数必须放在参数最后
function mySum4(a: number, b:number, c?:number): number {
    if (c) {
        return a + b + c;
    } else  {
        return a + b;
    }
}
console.log(mySum4(1, 2, 4));

// 默认参数问题：typescript 中将会为添加默认参数的参数识别为可选参数
function mySum5(a:number, b:number, c:number = 3): number {
    return a + b + c;
}
console.log(mySum5(1, 2));

// 剩余参数问题：剩余参数是一个数组，所以可以用 array 来定义它，并且它只能出现在最后
function mySum6(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
console.log(mySum6([], 1, 2, '3'));

// 类型练习
interface SumValue  {
    money: number,
    count: (value: number) => void
}
let sumValue: SumValue = {
    money: 20,
    count(value: number): void {
        this.money += value;
    }
} ;
let handleCount: {name: string, sumValue: SumValue, friends: string[]} = {
    name: 'Foo',
    sumValue: sumValue,
    friends: ['1', '2']
};
handleCount.sumValue.count(20);
