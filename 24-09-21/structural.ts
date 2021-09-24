
type One = { p: string };
interface Two {
  p: string;
}
class Three {
  p = "Hello";
  constructor(){
      console.log(this.p);
      
  }
}
 
var x : One = { p: "hi" };
var two: Two = x;
two = new Three();