function getSmallPet() {
    return "hello";
}
var pet = getSmallPet();
var fishPet = pet;
var birdPet = pet;
if (fishPet == "hello") {
    console.log(fishPet);
    ;
}
else if (birdPet == "No") {
    console.log(birdPet);
}
