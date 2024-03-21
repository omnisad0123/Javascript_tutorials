class animal{
    constructor(animalname, age) {
      this.age = age;
      this.animalname = animalname;
    }
   get eat() {
      return `${this.animalname} is eating `;
    }
    isCute() {
      return true;
    }
    setName(animalname,age){
        this.age = age;
        this.animalname = animalname;

    }
  }
  const doggy= new animal("tom", 2);
// console.log(anim);
// console.log(anim.eat());
console.log(doggy.eat);
// we can gey functions as properties of class
console.log(doggy.animalname);
console.log(doggy.age);
doggy.setName("riam",7)
console.log(doggy.animalname);
console.log(doggy.age);