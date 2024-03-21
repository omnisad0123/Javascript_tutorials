function outer() {
    var outerVariable = "I'm from the outer function.";
  
    function inner() {
      console.log(outerVariable);
    }
  
    return inner;
  }
  
  var closure = outer();
  closure();  // Output: I'm from the outer function.
  