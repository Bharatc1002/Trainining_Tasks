function move(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
var obj = {
    swim: "can swim"
};
console.log(move(obj));
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toLocaleDateString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
var date = new Date();
logValue(date);
