class Point {
	
 constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
    toString() {
      return '(${this.x},${this.y})';
    }
  }

  const p = new Point(3,8);
console.log(p.x);//3
console.log(p.y);//8
