
// Iterables are objects that implement the iterable protocol, which means they can be iterated over using a loop or other iterable-consuming constructs such as the for...of loop or the Array.from() method. Iterables have a built-in iterator object that defines how to access their elements.
let iterable = [1, 2, 3];

for (let element of iterable) {
  console.log(element);
}

// Output:
// 1
// 2
// 3
