
class user{
      constructor(username,password,email){
          this.username=username;
          this.password=password;
          this.email=email;
      }
   encryptPassword(){
        return `${this.password}abcd`
   }
    
     changeUsername(){
          return `${this.username.toUpperCase()}`
     }
}
const firstuser=new user("ompraksh",'123',"om@gmail.com");
console.log(firstuser);

user.prototype.surnameadd=function(namee){
       return `surname is ${namee}`;
}

console.log(firstuser.surnameadd("kashyap"));