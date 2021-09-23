var Pushable = /** @class */ (function () {
    function Pushable() {
    }
    Pushable.prototype.sendPushMessage = function () {
        console.log("Your file has been converted successfully.");
    };
    return Pushable;
}());
var Converter = /** @class */ (function () {
    function Converter() {
        this.push = new Pushable();
    }
    Converter.prototype.convert = function () {
        console.log("Converting...");
        return true;
    };
    return Converter;
}());
var c1 = new Converter();
c1.convert();
c1.push.sendPushMessage();
