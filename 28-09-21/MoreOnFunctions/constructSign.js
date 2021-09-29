var MadeFromString = /** @class */ (function () {
    function MadeFromString(name) {
        this.name = name;
        console.log('ctor invoked');
    }
    return MadeFromString;
}());
function makeObj(n) {
    return new n('hello!');
}
console.log(makeObj(MadeFromString).name);
