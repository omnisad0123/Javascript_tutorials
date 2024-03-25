// // Get a reference to the button element
// const button = document.getElementById("header");

// // Define an event listener
// function handleClick() {
//   console.log("Button clicked!");
// }

// // Attach the event listener to the button
// button.addEventListener("click", handleClick);
// Select the button element
// const button = document.getElementById("btn btn-headline");

// Define the event listener function
// function handleClick() {
//   console.log("Button clicked!");
// }

// // Attach the event listener to the button
// button.addEventListener("click",handleClick);


// const button = document.getElementById("myButton");


const signup=document.querySelector('.signup-form')

function submitform(e){
    e.preventDefault()
    signup.remove();
    console.log("clicked on submit button");  
}
function GotoGoogle(e){
    e.preventDefault();
    window.location.href = 'https://www.google.com';
}

signup.addEventListener('click',GotoGoogle);