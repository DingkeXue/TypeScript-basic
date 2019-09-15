function createArray(x, y) {
    var result = [];
    for (var i = 0; i < x; i++) {
        result[i] = y;
    }
    return result;
}
createArray(5, 'z');
/*多种泛型*/
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([1, 'x']);
function getLen(args) {
    return args.length;
}
getLen('1');
var creArr;
creArr = function (x, y) {
    var result = [];
    for (var i = 0; i < x; i++) {
        result[i] = y;
    }
    return result;
};
creArr(2, 'x');
/*泛型类*/
var creNumber = /** @class */ (function () {
    function creNumber() {
    }
    return creNumber;
}());
var num = new creNumber();
num.age = 2;
num.add(2, 2);
