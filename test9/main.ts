/*
* interface 接口
* interface可以继承 type不能继承
* */
interface Person {
    name: string,
    age: number,
    sex?: string, // ？表示可有可无
    readonly salary: number,  // 表示只读不能修改
    [propName: string]: any  // 任意类型
    sayHi();
}

let whh: Person = {
    name: '娃哈哈',
    age: 22,
    salary: 14000,
    id: 2,
    sayHi() {
        console.log('hello');
    }
};
whh.name = 'whh';
// whh.salary = 3333; 会报错

function createPerson(person: Person) {
    console.log(person.name, person.age, person.salary);
}
let lbb = new createPerson(whh);

/*==========================接口与类=========================*/
// 接口是对行为的抽象，行为具体行动由类实现
// 实现一个报警的接口
interface Alarm {
    alert();
}

// 实现一个灯的接口
interface Light {
    lightOn(),
    lightOff()
}

class Door {}
// 安全门具有报警功能
class SecurityDoor extends Door implements Alarm {
    brand: string;
    alert() {}
}
let door:SecurityDoor = {
    brand: '大门',
    alert() {
        console.log(this.brand);
    }
};

// 车也有报警功能，并且具有灯的功能（多接口）
class Car implements Alarm, Light {
    alert() {
        console.log('报警啦');
    }
    lightOff() {
        console.log('off');
    }
    lightOn() {
        console.log('on');
    }
}
