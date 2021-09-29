function doSomething(value) {
    value.forEach(function (el) {
        console.log(el);
    });
}
var rishi2 = ["hello", "world"];
doSomething(rishi2);
doSomething(new Array("hello", "world"));
