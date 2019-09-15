/*
* class 类（属性和方法）：typescript中有三种修饰符：public、private、protected
* public：表示方法或属性是公开的，谁都可以访问
* private：表示属性或方法是私有的，只有在 class 内部才可以访问
* protected：表示属性或方法受保护的，可以被 class 或子类方法
* 存取器：get、set 属性（不是方法！）
* */
class Person {
    public name: string;
    protected gender: string;
    private age: number;
    static _PI: number = 3.14;

    constructor(name: string, gender: string, age: number) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    // 存取器
    get Name() {
        return this.name;
    }

    set Name(name: string) {
        this.name = name;
    }

    getName(): void {
        console.log(this.name);
        this.getAge();
    }

    private getAge():void {
        console.log(this.age);
    }

    setAge(age: number): void {
        this.age = age;
    }
}

let whh = new Person('娃哈哈', '男', 11);
console.log(whh.Name);
whh.Name = 'whh';
console.log(whh.Name);
// 获取 static 属性，只能通过 类 获取
console.log(Person._PI);

// 类的继承
class Student extends Person {
    public level: string;
    constructor(name: string, gender: string, age: number, level: string) {
        super(name, gender, age);
        this.level = level;
    }
    sayHi(): void {
        console.log(this.name + this.gender + this.level);
    }
    // 重写父类方法
    getName(): void {
        console.log("name:", this.name)
    }
}
let lbb = new Student('冷冰冰', 'male', 11, '高一');
lbb.getName();
