interface Circle {
    kind: "circle",
    radius: number,
}
interface Square {
    kind: "square",
    sideLength: number,
}

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return "Area of circle is : " + Math.PI * shape.radius ** 2;
    case "square":
      return "Area of square is : " + shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
var circleAria: Circle = {
    kind: "circle",
    radius: 10,
}
var result = getArea(circleAria);
console.log(result);
