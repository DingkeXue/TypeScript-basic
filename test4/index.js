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
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SeDoor = /** @class */ (function (_super) {
    __extends(SeDoor, _super);
    function SeDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeDoor.prototype.alert = function () {
        console.log('b');
    };
    return SeDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('bb');
    };
    Car.prototype.driving = function () {
        console.log('i can drive');
    };
    return Car;
}());
