function MultiplyBy5(num){
       return num*5;
}
 
MultiplyBy5.power=2;
console.log(MultiplyBy5.power);
console.log(MultiplyBy5(5));
console.log(MultiplyBy5.prototype);   // so everuy thing in javascript are functions

// we can also give our qwon methods to objects and sring and functions 

//for example 
  
let MyHeroes= [ "Thor", "spiderman", "Shaktimaan"]
let user= {
      Thor:"hammar",
      Spiderman: "spining",
      Shaktimaan: "flying"

}

 
   Object.prototype.Say=function(){
 
       console.log("Hii I'm om");
 
 }
   Array.prototype.Say=function(){
 
       console.log("Hii I'm om");
 
 }
 MyHeroes.Say()
 user.Say()
 console.log(user.Thor)