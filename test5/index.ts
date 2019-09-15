function createArray<T>(x:number, y:T):T[] {
    let result:T[] = [];
    for (let i = 0; i < x; i++) {
        result[i] = y;
    }
    return result;
}

createArray<string>(5, 'z');

/*多种泛型*/
function swap<U, T>(tuple: [U, T]):[T, U] {
    return [tuple[1], tuple[0]];
}
swap([1, 'x']);

/*对泛型进行约束*/
interface HasLen {
    length: number;
}
function getLen<T extends HasLen>(args: T):number {
    return args.length;
}
getLen('1');

/*使用接口来定义泛型*/
interface createArr<T> {
    (x: number, y:T):T[];
}

let creArr:createArr<any>;
creArr = function<T>(x:number, y:T):T[] {
    let result:T[] = [];
    for (let i = 0; i < x; i++) {
        result[i] = y;
    }
    return result;
};
creArr(2,'x');

/*泛型类*/
class creNumber<T> {
    age: number;
    add: (x:T, y:T) => T;
}
let num = new creNumber<number>();
num.age = 2;
num.add(2, 2);
