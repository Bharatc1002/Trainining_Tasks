function createCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var getCounter = createCounter();
getCounter(10);
getCounter.reset();
