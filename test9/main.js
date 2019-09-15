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
var whh = {
    name: '娃哈哈',
    age: 22,
    salary: 14000,
    id: 2,
    sayHi: function () {
        console.log('hello');
    }
};
whh.name = 'whh';
// whh.salary = 3333; 会报错
function createPerson(person) {
    console.log(person.name, person.age, person.salary);
}
var lbb = new createPerson(whh);
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
// 安全门具有报警功能
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () { };
    return SecurityDoor;
}(Door));
var door = {
    brand: '大门',
    alert: function () {
        console.log(this.brand);
    }
};
// 车也有报警功能，并且具有灯的功能（多接口）
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('报警啦');
    };
    Car.prototype.lightOff = function () {
        console.log('off');
    };
    Car.prototype.lightOn = function () {
        console.log('on');
    };
    return Car;
}());
