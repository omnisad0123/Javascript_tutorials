var message;
function sayHello() {
  console.log("Hello, there!");
}

console.log(message);  // Output: undefined
message = "Hello, world!";

sayHello();  // Output: "Hello, there!"


console.log(message);  // Output: undefined
var message = "Hello, world!";

sayHello();  // Output: "Hello, there!"
function sayHello() {
  console.log("Hello, there!");
}
// we can call a function before its declaration in the case of function declarartion not in the function expression .
// lexical scope - if we declare function under function and define var1 in first function var2  in the inner function function and we ccall inner function
// we call inner function then it will print var2 first , if there is nop var2 in the inner function then it will print var1 whcih is define in the oute function.