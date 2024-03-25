new Promise(function(resolve,reject){
    setTimeout(function(){
         console.log("Promises completed")
          resolve();
    },1000)

}).then(function(){
       console.log("promiss resolved")
  
})


const promisseThree= new Promise(function(resolve,reject){
    
    setTimeout(function(){
         console.log("promis3 has been resolved")
           resolve({
                firstname: "example",
                email: "example@gmail.com",
                company:"Jp Morgan Chase"
           })
           
    },1000)
})

promisseThree.then(function(user){
       console.log(user);
})
const Promise4= new Promise(function(resolve, reject){
       setTimeout(function(){
            let settime=true;
            // settime=0;
            if(!settime){
                   resolve({
                    firstname: "example",
                    email: "example@gmail.com",
                    company:"Jp Morgan Chase"
                   })
            }  else {
                  console.log("error has been occured")
            }
       },1000)
})

Promise4.then((user)=> {
    console.log(user)
    return user.firstname;
}).catch((error)=>console.log(error))
.then((user)=>{
         console.log(user)
}).finally(function(){
       console.log("promise hase been either resolved or rejected")
})
//using async and await 
  async function consumePromise(){
    try {
         let pr= await Promise4;
         console.log(pr)
    } catch (error) {
         console.log("error hase been occired")
    }
  }
  consumePromise();


async function delay() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promise completed");
            resolve();
        }, 1000);
        
    });
}

async function main() {
    await delay();
    console.log("Promise resolved");
}

main();

   async function fetcjAllusers(){
       const response = await fetch('https://randomuser.me/api/');
       const data= await response.json();
       console.log(data.results);

}
fetcjAllusers();

