// Define the lastItem function that takes an array of strings as a parameter
function lastItem(fruits) {
    // Make a copy of the original array to show later
    const originalFruits = [...fruits]; // Using spread syntax to copy the array

    // Find quicker option!
  
    // Sort the fruits array alphabetically using the localeCompare method
    fruits.sort((a, b) => a.localeCompare(b)); 
  
    // Get the last item from the sorted array which will be the last alphabetically
    const lastAlphabetical = fruits[fruits.length - 1];
  
    // Select the output div where the results will be displayed
    const outputDiv = document.getElementById('output');
  
    // Note: The spaces are adjusted to ensure there are no leading spaces before commas
    outputDiv.innerHTML = `The original array is [${originalFruits.join(',')}] and I sorted it alphabetically.<br>The last item of the sorted array is ${lastAlphabetical}.`;
}

// Create an object that stores categories! 

// Define the getUserInput function
function getUserInput() {
    // Ask the user how many items they would like to enter
    let count = parseInt(prompt("How many items would you like to enter? (between 2 and 4)"));

    // Validate the input count
    if (isNaN(count) || count < 2 || count > 4) {
        alert("Please enter a valid number between 2 and 4.");
        return;
    }

    // Create an array to store user input items
    let items = [];

    // Loop to gather user input
    for (let i = 1; i <= count; i++) {
        let item = prompt(`Enter item ${i}:`);
        items.push(item);
    }

    // Make a copy of the original items array before sorting
    let originalItems = [...items]; // This creates a shallow copy of the items array

    // Sort the items alphabetically
    items.sort();

    // Display the original array and the sorted array
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `Original array: [${originalItems.join(', ')}]<br>Sorted array: [${items.join(', ')}]`;
}
