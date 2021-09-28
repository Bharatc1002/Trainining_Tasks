
type Fish = { swim: string };
type Bird = { fly: string };
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}
var obj: Fish = {
  swim: "can swim",
}
console.log(move(obj));



function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString()); 
  } else {
    console.log(x.toUpperCase());           
  }
}
var date = new Date();
logValue(date);
