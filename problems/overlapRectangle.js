class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  isOverlapping(rect2) {
    return (this.x < (rect2.x + rect2.width) &&
         (this.x + this.width) > rect2.x  &&
          this.y < (rect2.y + rect2.height) &&
          (this.y + this.height) > rect2.y
         );
  }
}

const rect1 = new Rectangle(250, 250, 150,100);
const rect2 = new Rectangle(100, 100, 300, 200);

const rect3 = new Rectangle(450, 450, 150,100);


console.log(rect1.isOverlapping(rect2));  // true

console.log(rect2.isOverlapping(rect3)); // false
