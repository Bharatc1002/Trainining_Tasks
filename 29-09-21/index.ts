
interface StringArray {
    [index: number]: string;
  }
   

  function getStringArray(): string[]{
      return ["Hello", "okay"];
  }
  const myArray: StringArray = getStringArray();
  const secondItem = myArray[1];
  console.log(secondItem);
  