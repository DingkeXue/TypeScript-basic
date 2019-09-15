/*类
* 修饰符：public：共有 private：只能在类内部调用 protected：可以在子类调用
* */
class Animal {
    public name:string;
    public constructor(name:string) {
        this.name = name;
    }
    say():string {
        return this.name;
    }
}
let cat = new Animal('cat');
console.log(cat.say());
console.log(cat.name);

// 抽象类不能实例化
abstract class Dogs {
    protected name:string;
    public constructor(props:string) {
        this.name = props;
    }
    public abstract say();
}

class Dog extends Dogs{
    public say() {
        return this.name;
    }
}

let dogs = new Dog('dog');
console.log(dogs.say());


