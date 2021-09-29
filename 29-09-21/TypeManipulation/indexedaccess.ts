
const MyArray = [
    { name: "Rishi1", age: 15 },
    { name: "Rishi2", age: 20 },
    { name: "Rishi3", age: 25 },
  ];
   
  type Person = typeof MyArray[number];
  type Age = Person["age"];
  type Age2 = Person["name"];

  var RishiNum: Age = 21;
  var RishiString: Age2 = "Hi";
  var RishiTypes = {
      1: typeof(RishiNum),
      2: typeof(RishiString),
  }
  console.log(RishiTypes);
  