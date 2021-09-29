
class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
   
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function rishi5(x, y) {
    return x + y;
  };
  console.log(myGenericNumber.add(5, 10));

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function rishi5(x, y) {
  return x + y;
};
console.log(stringNumeric.add("hello ", "Rishi"));

 
  