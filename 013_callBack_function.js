function myfn2() {
       console.log("inside myfn2") 
}
  
function myfn1(callback) {
   console.log("inside myfn1")
   callback();
}
myfn1(myfn2);
