let rndnum= parseInt(Math.random()*100+1);
let isNumber=true;
const userInpupt=document.querySelector('.userInpupt');
const remaining=document.querySelector('.prv');
const submit=document.querySelector('.button');
const output=document.querySelector('.output');
const loworhi=document.querySelector('.lh');
let AttemptRemaining=10;
let prevArray=[];

const  previouelements=document.createElement('p');
if(isNumber){
 submit.addEventListener('click',function(e){
    e.preventDefault();
    const gauess= userInpupt.value
    console.log(gauess)
      isValid(gauess);
 })
}

function isValid(gauess){
    //

    if(gauess<1||gauess>100||isNaN(gauess)){
        alert('enter a valid number');
    } else {
        GuessNumber(gauess)
    }
}
function GuessNumber(gauess){
    if(rndnum===gauess){
        displaymessage("You gauess it right");

        endgame();
    } else {  
        
        prevArray.push(gauess);
        
         remaining.innerHTML = `Previous guesses are: ${prevArray.join(', ')}`;
        AttemptRemaining--;
        if(AttemptRemaining===0){
            endgame();
        }



    }
}
   function displaymessage(mssg){
       loworhi.innerHTML= `<h2>${mssg}<h2>`
   }
function endgame(){
    isNumber=false;
    rndnum= parseInt(Math.random()*100+1)
    AttemptRemaining=10;
    prevArray=[];
    previouelements.innerText="Start Over";
    
    startover();
}
function startover(){
    const newgame=document.querySelector('.newgame')
    button
}