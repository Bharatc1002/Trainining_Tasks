interface X {
    x: number;
  }
  let rx: Readonly<X> = { x: 1 };

//   rx.x = 12;
console.log(rx.x);





const a = [1, 2, 3];
a.push(102);
a[0] = 101; 
console.log(a);
