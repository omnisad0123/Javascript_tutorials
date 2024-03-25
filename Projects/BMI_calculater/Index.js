const button = document.querySelector('.button');
const outputArea = document.querySelector('.outputArea');

button.addEventListener("click", function(){
    const w = parseInt(document.getElementById('weight').value);
    const h = parseInt(document.getElementById('height').value);

    // Check if weight and height are valid numbers
    if (isNaN(w) || isNaN(h)) {
        outputArea.textContent = "Please enter valid numbers for weight and height.";
        return; // Exit the function early if inputs are invalid
    }

    const bmi = w / ((h / 100) ** 2);
    const result = document.createElement('p');
    result.textContent = "Your BMI is: " + bmi.toFixed(2);
    outputArea.innerHTML = ''; // Clear previous output
    outputArea.appendChild(result);
});
