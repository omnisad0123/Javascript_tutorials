let fruits=["aapple","banana","orange","papaya",null,undefined,123]
// console.log(fruits.length)
// console.log(fruits)
// fruits[1]=2323;
// console.log(fruits[1])
// console.log(Array.isArray(fruits))
// fruits.push("imli")
// console.log(Array.isArray(fruits))
// fruits.shift()
// const array1=["apple","mango","banana"]
// console.log(array1)
// array1.push("item4")
// console.log(array1)
// but give error if 
// array1=["sjdns,","skmdqwd"];
// // 


// array destructing
const array1=["ugukguoo","om" ]
 let [myvar1,myvar2]=array1
console.log(array1.includes("om"))
console.log(myvar1)

let newarray1=fruits.slice(1,2);
let nearray2=fruits.splice(1,2);
console.log(fruits);
console.log(newarray1);
// console.log(nearray2);
console.log("s",nearray2)
/* 
Interview quetions 
diffrence between slice and splice
slice does not includes both index and does not change original array 
while splice includes both index and changes original array also.
*/