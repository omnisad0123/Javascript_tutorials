// let age=13
// if(age>=18){
//        console.log("user can vote")
// }else {
//     console.log("user can not vote")
// }
// if(age%2===0){
//     console.log("even")
// }   else {

//     console.log("odd")
// }
// // falsy value
// // 0,false,null,undefined
// let name1="pooh"
// if(name1){
//     console.log("name1")
// } else {
//     console.log("empty")
// }
// // left are all truthh values
let num=13;
let userguess=+prompt("guess a nummber :");
// console.log(userguess)
if(userguess===num){
      console.log("user win")

} else {
    if(userguess<num){
    console.log("number is too high")
} else {
    console.log("number is too low")
}
}

