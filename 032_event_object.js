const button = document.getElementById("btn btn-headline");


function handleClick(event) {
    console.log("Button clicked!");
    console.log("Event target:", event.target);
    console.log("Event type:", event.type);
    console.log("Mouse coordinates:", event.clientX, event.clientY);
    console.log("Key code:", event.keyCode);
    event.preventDefault(); // Prevents the default behavior of the event
  }
  
  button.addEventListener("click", handleClick);