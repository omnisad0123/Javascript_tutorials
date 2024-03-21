// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number,index) {
//   console.log(`number is ${number} at index ${index}`);
// });

// map method

// const numbers = [1, 2, 3, 4, 5];
// const  sq=function(number) {
//       return number*number;
// }
// const nesquareaaary=numbers.map(sq);
// console.log(nesquareaaary)
// filter method
// const numbers = [1, 2, 3, 4, 5,6,9,56,45,126];
//    const divisbleby3=function(number) {
//         return number%3===0;
//    }
//  const filt=numbers.filter(divisbleby3);
//  console.log(filt);

//  reduce method
// const numbers = [3, 3, 4,];
// const accumul=numbers.reduce((acc,cc)=>{
//     return acc*cc;
// })
// console.log(accumul)

// const Usercart = [
//   { p1Id: 1, p1name: "mobile", p1Price: 12000 },
//   { p1Id: 2, p1name: "laptop", p1Price: 40000 },
//   { p1Id: 3, p1name: "mac", p1Price: 400000 },
// ];

// we want sum of price

// const productsum=Usercart.reduce((acc,currentvalue)=>{
//      return currentvalue.p1Price+acc;
// },0)

// console.log(productsum)

// sort method -changes orginal array sort as string

// describe/ diffrent type of method like above in javascript and write in put code and out put also
// let fruits = ["banana", "apple", "orange", "lemon"];
// fruits.sort();

// console.log(fruits); // Output: ["apple", "banana", "lemon", "orange"]

// find method
// The find() method is used to find the first element in an array that satisfies a specific condition. It returns the value of the first element that passes the condition or undefined if no element is found. Here's how the find() method works:

// let numbers = [1, 2, 3, 4, 5];

// let foundNumber = numbers.find((number) => number > 3);

// console.log(foundNumber); // Output: 4

// let people = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Mike", age: 35 }
// ];

// let foundPerson = people.find((person) => person.age === 30);

// console.log(foundPerson); // Output: { name: "Jane", age: 30 }

// some method
// The some() method checks if at least one element in the array satisfies a specific condition defined by a callback function. It returns true if any element passes the condition; otherwise, it returns false.

// let numbers = [1, 2, 3, 4, 5];

// let hasEvenNumber = numbers.some((number) => {
//   return number % 2 === 0;
// });

// console.log(hasEvenNumber); // Output: true


// every method 
// The every() method checks if all elements in the array satisfy a specific condition defined by a callback function. It returns true if all elements pass the condition; otherwise, it returns false.

// let numbers = [2, 4, 6, 8, 1];

// let allEvenNumbers = numbers.every((number) => {
//   return number % 2 === 0;
// });

// console.log(allEvenNumbers); // Output: true

// fill method 


// slice method
// let fruits = ["apple", "banana", "orange"];

// fruits.splice(1, 1, "grape", "kiwi");

// console.log(fruits); // Output: ["apple", "grape", "kiwi", "orange"]
// let colors = ["red", "blue", "green"];

// colors.splice(1, 0, "yellow", "orange");

// console.log(colors); // Output: ["red", "yellow", "orange", "blue", "green"]
