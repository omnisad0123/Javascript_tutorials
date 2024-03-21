// const iseven =(num)=> {
//     return (num%2===0);
// }

// const f= iseven(23);
// console.log(f)

// const addnums =(num1,num2,num3)=> {
//        return (num1+num3+num2);
// }
// const sum=addnums(1,2,3);
// console.log(sum)

// function inside function
function outerFunction() {
    let outerVar = "Hello";
  
    function innerFunction(name) {
        outerVar="om";
      console.log(outerVar + ", " + name);
    }
  
    innerFunction("John"); // Output: "Hello, John"
  }
  
  outerFunction();
  
//   lexical scope when we call outer fuction innner function chekc outrecvar in innner funcytion if does not find then try to find out in outer function this is lexical scope 
// block scope vs function scope
if (true) {
    let x = 10; // Block-scoped variable
    const y = 20; // Block-scoped constant
    console.log(x); // Output: 10
  }
  
//   console.log(x); // Error: x is not defined (not accessible outside the block)
//   console.log(y); // Error: y is not defined (not accessible outside the block)
  
  function example() {
    var x = 10; // Function-scoped variable
    if (true) {
      var y = 20; // Function-scoped variable
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }
  
 
//   console.log(x); // Error: x is not defined (not accessible outside the function)
//   console.log(y); // Error: y is not defined (not accessible outside the function)
  
