class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.getArea()); // Output: 15

const square = Rectangle.createSquare(4);
console.log(square.getArea()); // Output: 16

class animal {
  constructor(animalname, age) {
    this.age = age;
    this.animalname = animalname;
  }
  eat() {
    return `${this.animalname} is eating `;
  }
  isCute() {
    return true;
  }
}
const anim = new animal("tom", 2);
console.log(anim);
console.log(anim.eat());

class dog extends animal {
  constructor(animalname, age, speed) {
    super(animalname, age);
    this.speed = speed;
  }

  run() {
    return `${this.animalname} runing at speed ${this.speed}`;
  }

  eat() {
    return `modified : ${this.animalname} is eating `;
  }
}

const mydog = new dog("tommy", 3, 23);
console.log(mydog);
console.log(mydog.run());
console.log(mydog.eat());
