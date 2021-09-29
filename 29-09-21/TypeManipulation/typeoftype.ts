
function f() {
    return { x: 10, y: 3 };
  }
  type rishi8 = ReturnType<typeof f>;

  var rishi9: rishi8 = {
      x: 20,
      y: 30,
  }
  console.log(rishi9);
  