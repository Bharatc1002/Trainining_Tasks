var Three = /** @class */ (function () {
    function Three() {
        this.p = "Hello";
        console.log(this.p);
    }
    return Three;
}());
var x = { p: "hi" };
var two = x;
two = new Three();
