function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
        console.log(container.value);
    }
}
var container = {
    value: 5
};
multiplyValue(container, 3);
