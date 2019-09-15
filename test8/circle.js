/*
* 命名空间内可以嵌套命名空间，外部如果要访问一定要加上 export
* */
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircle(num) {
            return num * PI;
        }
        Circle.calcCircle = calcCircle;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
