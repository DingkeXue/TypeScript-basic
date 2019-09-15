var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*类
* 修饰符：public：共有 private：只能在类内部调用 protected：可以在子类调用
* */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.say = function () {
        return this.name;
    };
    return Animal;
}());
var cat = new Animal('cat');
console.log(cat.say());
console.log(cat.name);
// 抽象类不能实例化
var Dogs = /** @class */ (function () {
    function Dogs(props) {
        this.name = props;
    }
    return Dogs;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.say = function () {
        return this.name;
    };
    return Dog;
}(Dogs));
var dogs = new Dog('dog');
console.log(dogs.say());
