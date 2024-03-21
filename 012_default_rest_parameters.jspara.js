// function add(num1,num2) {
     
//       if(typeof num2==="undefined"){
//         num2=0;
//       }
//              return num1+num2;
//     } 
//     const sum=add(2);
//     console.log(sum)
// but we dont need it we have defaultpora
function add(num1,num2=0) {
     
      
             return num1+num2;
    } 
    const sum=add(2);
    console.log(sum)

    // rest parameters 
    function addthree(a,b,c) {

        console.log(`a is ${a}`)
        console.log(`b is ${b}`)
        console.log(`c is ${c}`)
    }
   addthree(1,2,3)
//    but we want more number if passed in function
function addall(...array) {
      let sum=0;
      for(let num of array){
        sum=sum+num;
      }
      return sum;
}
  
console.log(addall(1,2,3,4,5,6,6,7,8,5))
    