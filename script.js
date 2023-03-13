// Select all the buttons
const buttons = document.querySelectorAll(".anil2 button");

// Select the input field
const input = document.querySelector("#gfgf");

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Get the button value
    const value = button.textContent;
    
    // Clear the input field if the CE button is clicked
    if (value === "CE") {
      input.value = "";
    }
    // Delete the last character if the DEL button is clicked
    else if (value === "DEL") {
      input.value = input.value.slice(0, -1);
    }
    // Calculate the result if the = button is clicked
    else if (value === "=") {
      input.value = eval(input.value);
    }
    // Append the button value to the input field
    else {
      input.value += value;
    }
  });
});
