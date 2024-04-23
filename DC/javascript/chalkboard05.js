// Function 1: Check the trivia answer
function checkTrivia() {
  // Retrieve user input 
  const answer = document.getElementById('trivia-answer').value.trim();
  // Access the element where the response will be displayed
  const responseElement = document.getElementById('trivia-response');
  // Put the correct answer in lowercase
  const correctAnswer = 'paris';

  // Compare the user's answer to the correct answer in a case-insensitive manner
  if (answer.toLowerCase() === correctAnswer) {
    // If the answer is correct, display positive feedback
    responseElement.textContent = `Correct! You guessed: ${answer}.`;
  } else {
    // If the answer is incorrect, display negative feedback 
    responseElement.textContent = `Incorrect. You guessed: ${answer}.`;
  }
}
  
  // Function to trigger button click on "Enter key" press
  document.addEventListener('DOMContentLoaded', () => {
    // Get the trivia input box element by its ID
    const triviaInput = document.getElementById('trivia-answer');
    
    // Event listener for the keypress event on the trivia input box
    triviaInput.addEventListener('keypress', function(event) {
      // Check if the key pressed is the Enter key
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        checkTrivia(); // Call the checkTrivia function
      }
    });
  
    // Event listener for the click event on the trivia submit button
    const triviaButton = document.getElementById('trivia-submit');
    triviaButton.addEventListener('click', checkTrivia);
  });
  
  // Function 2: Check if a number is odd or even
function checkNumber() {
    // Retrieve the value from the input field
    const numInput = document.getElementById('number-input').value;
    // Parse the input to an integer
    const num = parseInt(numInput, 10);
  
    // Check if the input is not a number (NaN) or not within the 5-digit range
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
      // Check if the number is even
      const isEven = num % 2 === 0;
      // Update the result text based on whether the number is even or odd
      document.getElementById('number-response').innerText = `The number ${num} is ${isEven ? 'even' : 'odd'}.`;
    } else {
      // Prompt the user to enter a valid 5-digit number if the input is invalid
      document.getElementById('number-response').innerText = "Please enter a valid 5-digit number.";
    }
  }
  
  // Add event listeners for the number checker in the DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', () => {
    // Event listener for the number input keypress event
    const numberInput = document.getElementById('number-input');
    numberInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default form submission
        checkNumber(); // Call the checkNumber function
      }
    });
  
    // Event listener for the click event on the number submit button
    const numberButton = document.getElementById('number-submit');
    numberButton.addEventListener('click', checkNumber);
  });
  