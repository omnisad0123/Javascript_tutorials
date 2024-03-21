// const person1 ={
//     firstname:"om",
//     Id:1,
//     about:function() {
//           console.log(`person name is ${this.firstname} id is ${this.Id}`)
//     }
// }
// const person2 ={
//     firstname:"pooh",
//     Id:2,
//     about:function() {
//           console.log(`person name is ${this.firstname} id is ${this.Id}`)
//     }
// }

// person1.about()
// person2.about()

// apply bimnd and call
const person2 ={
    firstname:"pooh",
    Id:2,
    about:function() {
          console.log(`person name is ${this.firstname} id is ${this.Id}`)
    }
}
// person2.about()
const person1 ={
    firstname:"om",
    Id:1,
 
}
person2.about.call(person2)
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum.apply(null, numbers);
  console.log(result);  // Output: 6
  const person = {
    name: "John",
    greet: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const greetFunction = person.greet.bind(person);
  greetFunction();  // Output: Hello, John!
  
