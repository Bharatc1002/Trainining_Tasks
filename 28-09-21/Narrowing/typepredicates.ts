// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
//   }

// let pet = {
//     swim: () => {
//         return "can swim";
//     }
// };
 
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);

// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
//     const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });

// type Bird[] = {
    
// }

// function getSmallPet(name1, name2): string[] {
//     return [name1, name2];
// }