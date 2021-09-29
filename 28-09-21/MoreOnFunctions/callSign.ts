interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function createCounter():Counter{
    var counter = <Counter>function(start:number){};
    counter.interval = 123;
    counter.reset = function(){};
    return counter;
}

var getCounter = createCounter();
getCounter(10);
getCounter.reset();