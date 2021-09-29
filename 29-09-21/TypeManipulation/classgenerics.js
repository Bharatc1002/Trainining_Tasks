var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function rishi5(x, y) {
    return x + y;
};
console.log(myGenericNumber.add(5, 10));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function rishi5(x, y) {
    return x + y;
};
console.log(stringNumeric.add("hello ", "Rishi"));
