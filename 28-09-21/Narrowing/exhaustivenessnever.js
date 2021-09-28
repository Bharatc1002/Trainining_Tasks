function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return "Area of circle is : " + Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return "Area of square is : " + Math.pow(shape.sideLength, 2);
        default:
            var _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
var circleAria = {
    kind: "circle",
    radius: 10
};
var result = getArea(circleAria);
console.log(result);
