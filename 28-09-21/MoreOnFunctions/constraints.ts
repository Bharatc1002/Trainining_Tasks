
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      console.log(a);
      
    } else {
        console.log(b);
        
    }
  }
  const longerArray = longest([1, 2], [1, 2, 3]);
  const longerString = longest("alice", "bob");