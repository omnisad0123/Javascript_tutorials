// array are sufficient to represent real data
// objects store key value pir
// objects dont have indexed
// const person1 = { name: "hbivh", age: 22 };
// console.log(person1.name, person1.age)

// const person2 = {
//   name: "om",
//   age: 20,
//   hobby: ["singing", "playing "],
//   "person2 state": "up",
// };

// can add one key value pair
// person2.gender="male"
// person2.gender = "male";
//  now we want add a key value pair in using following wednsday
// let key ="email";

// person2[key] ="om.gmail.com";

// iterating on=bjects
// for(let key in person2){
//     console.log(person2[key])
// }
// const key1="objkey1"
// const valu1="myvalue1"
//   const obj={
//     [key1] : valu1
//   }
//   console.log(obj)

// spread operater in array
// const array1=[1,2,3]
// const array2=[4,5,6]
// const nearray=[...array1,...array2,..."7890"]
// console.log(nearray)

// object destruction

// const band = {
//   bandname: "sanam band",
//   famoussong: "gulabi aankhe",
//   year: 2016,
// };
// const myband = band.bandname;
// console.log(myband);
// // but we have shortcut ......it is destructuring
// const { bandname, famoussong } = band;
// console.log(bandname);

// // objects in array

// const users = [
//     {UserId:1,Username:"Pooh",gender:"female"},
//     {UserId:2,Username:"om",gender:"male"},
//     {UserId:3,Username:"khushboo",gender:"female"}
    
// ];
// for(let user of users){
//     console.log(user)
// }
// // console.log(users)

const band = {
  bandname: "sanam band",
  famoussong: "gulabi aankhe",
  year: 2016,
};

// Object.freeze(band); // Freeze the entire band object to prevent modifications

// band.bandname = "michael jackson"; // Attempt to modify the bandname property

// console.log(band);

// const band = {
//   bandname: "sanam band",
//   famoussong: "gulabi aankhe",
//   year: 2016,
// };
// band.func1 = function() {
//   console.log("this is sanam band");
// };

// console.log(band);
// console.log(band.func1());


const obj1= new Object() // singleton object
const obj2={}  // Non singleton object

obj1.id=323
obj1.name="om";

obj1.newobject={
    namm1: "another object",
    workzrole : "Objectdefining"

}

// console.log(obj1.newobject? obj1.newobject.workzrole:obj1.name)
// const obj3=Object.assign({},obj1,band)
const obj3={...obj1,...band}  // ... is called res operater and spread operater , depends on use cases
  

console.log(obj3)