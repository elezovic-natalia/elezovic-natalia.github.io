function lastItem(fruits) {
    const originalFruits = [...fruits];
    fruits.sort((a, b) => a.localeCompare(b));
    const lastAlphabetical = fruits[fruits.length - 1];
    document.getElementById('output').innerHTML = `The original array is [${originalFruits.join(',')}] and I sorted it alphabetically.<br>The last item of the sorted array is ${lastAlphabetical}.`;
}

function sortItemsInput() {
    let responses = {};
    
    var numItems = Number(prompt('How many items would you like to enter? 2-4.'));
    while(isNaN(numItems) || numItems > 4 || numItems < 2 || !(Number.isInteger(numItems))){
        numItems = Number(prompt('How many items would you like to enter? 2-4.'));
    }
    for (let index = 0; index < numItems; index++) {
        let catInput = prompt(`Enter category ${index+1} of ${numItems}.`);
        let catItem = prompt(`Enter your ${catInput}`);
        responses[catInput] = catItem;
    }
    const responseKeys = Object.keys(responses).sort();
    for (const key of responseKeys) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `Your ${key.toLowerCase()} is ${responses[key]}`;
        document.getElementById('outputArray').appendChild(newDiv);
    }
}
