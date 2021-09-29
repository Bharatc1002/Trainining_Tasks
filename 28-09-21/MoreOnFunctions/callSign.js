function doSomething(fn) {
    console.log(fn.description + " returned " + fn.Func(6));
}
var Func = function (num) {
    return num > 0;
};
var secobj = {
    description: "Hello",
    Func: Func
};
doSomething(secobj);
