function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}!`);
  };
  
  const john = new Person("John");
  john.greet();  // Output: Hello, John!
  