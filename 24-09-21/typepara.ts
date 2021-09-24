function getSmallPet(){
    return "hello"
}
type Fish = string;
type Bird = string;

let pet = getSmallPet();
let fishPet = pet as Fish;
let birdPet = pet as Bird;
 
if (fishPet=="hello") {
  console.log(fishPet);
  ;
} else if (birdPet=="No") {
  console.log(birdPet);
  
}