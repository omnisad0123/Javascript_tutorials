let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');
myMap.set('key4', 'value4');
myMap.delete('key2');
console.log(myMap)

// for (let [key, value] of myMap) {
//     console.log(key, value);
//   }
  
  myMap.forEach((value, key)=> {
    console.log(key, value);
  });
  const mym=new Map();
  mym.set(1,"pooh")
  mym.set("dsad","pooh")
  // console.log(mym)
  // console.log(mym.get(1))
  // iterate 
// const myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');
// myMap.set('key4', 'value4');
// for (let [key, value] of myMap) {
//     console.log(key, value);
//   }
  
//   myMap.forEach(function(value, key) {
//     console.log(key, value);
//   });
//   const users = [
//     {UserId:1,Username:"Pooh",gender:"female"},
//     {UserId:2,Username:"om",gender:"male"},
//     {UserId:3,Username:"khushboo",gender:"female"}
    
// ];
// for(let user of users){
//     console.log(user.Username)
// }