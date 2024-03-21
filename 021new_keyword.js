 function createuser(firstname ,age) {
    this.firstname=firstname;
    this.age=age;
    
 }

 const user1= new createuser("om",22)

 createuser.prototype.about=function () {
    console.log(this.firstname,this.age)
 }
 console.log(user1)
 for(let key in user1){
        
 }