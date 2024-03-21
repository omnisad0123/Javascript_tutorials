
// function functionName(){

//        console.log("happy birthday to undefined....")

// }
// functionName();
// function addnums(num1,num2,num3) {
//        return (num1+num3+num2);
// }
// const sum=addnums(1,2,3);
// console.log(sum)
// let iseven=function(num) {
//        return (num%2===0);
// }
  
//    const f= iseven(4);
//    console.log(f)

const funct1= function(...num){
         return num;

}

console.log(funct1(1,2,3,4))


// This keayword
// const user={
//        Username: "omprakash",
//        welcommessage: funct=function(){
//            console.log(`${this.Username}, welcome to website`);
//           }
// }


// user.welcommessage()

const funct=function(){
       let username="om";
       console.log(`${this.username}`)
}

// so this keyword used in the objects only
// when we log this only then we get empty object;

// other way to define function

const f=()=>{
          console.log("welcome")
}

const Addnumbers =(num1,mum2)=> (num1,num2);
f();

/*
control flow 
falsy value- null, "", 0 ,-0, NaN, undefines , BigInt 0n,
true value-rest are true value;
*/