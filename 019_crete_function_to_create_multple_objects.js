// const user = {
//   name: 'om',
//   id: 1,
//   age: 25,
//   isAdult: function() {
//     return this.age > 18;
//   }
// };

// console.log(user.isAdult())

  function createuser(name,id,age,) {
          const user={};
          user.name=name;
          user.id=id;
          user.age=age
          user.isAdult=function() {
            return this.age > 18;
          }
          return user;
  }
  const user1=createuser(`om`,1,25)
  const user2=createuser(`pooh`,3,23 )
  const user3=createuser(`suraj`,3,15)
  console.log(user1.isAdult())
  console.log(user2)
  console.log(user3)
 console.log( user2.isAdult());