
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };
   
  type LockedAccount = {
    readonly id: string,
    readonly name: string,
  };
   
  type UnlockedAccount = CreateMutable<LockedAccount>;

  var Rishi9: UnlockedAccount = {
      id: "First",
      name: "Rishi",
  }
  console.log(typeof(Rishi9.id));
  