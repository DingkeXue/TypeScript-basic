var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* class 类（属性和方法）：typescript中有三种修饰符：public、private、protected
* public：表示方法或属性是公开的，谁都可以访问
* private：表示属性或方法是私有的，只有在 class 内部才可以访问
* protected：表示属性或方法受保护的，可以被 class 或子类方法
* 存取器：get、set 属性（不是方法！）
* */
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "Name", {
        // 存取器
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getName = function () {
        console.log(this.name);
        this.getAge();
    };
    Person.prototype.getAge = function () {
        console.log(this.age);
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person._PI = 3.14;
    return Person;
}());
var whh = new Person('娃哈哈', '男', 11);
console.log(whh.Name);
whh.Name = 'whh';
console.log(whh.Name);
// 获取 static 属性，只能通过 类 获取
console.log(Person._PI);
// 类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, gender, age, level) {
        var _this = _super.call(this, name, gender, age) || this;
        _this.level = level;
        return _this;
    }
    Student.prototype.sayHi = function () {
        console.log(this.name + this.gender + this.level);
    };
    // 重写父类方法
    Student.prototype.getName = function () {
        console.log("name:", this.name);
    };
    return Student;
}(Person));
var lbb = new Student('冷冰冰', 'male', 11, '高一');
lbb.getName();
