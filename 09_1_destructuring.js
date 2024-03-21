// let arr= ["value1", "value2"];
// let [v1,v2]=arr;
// console.log(v1);
// console.log(v2);

const person = { name: 'John', age: 30 };

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet(person); // Output: Hello, John. You are 30 years old.
