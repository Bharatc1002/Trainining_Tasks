
interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle = Colorful & Circle;

  var obj2: ColorfulCircle = {
      color: "black",
      radius: 50
  }
  console.log(obj2);
  