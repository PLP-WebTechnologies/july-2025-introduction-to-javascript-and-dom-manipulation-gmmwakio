console.log("JavaScript file is loaded!");

// We ask the user for their name and store it in a variable called 'userName'.
const userName = prompt("What is your name?");

// If the user entered a name, we say hello. Otherwise, we keep it 'Guest'.
if (userName) {
    console.log(`Hello, ${userName}!`); // Logs to the browser console
} else {
    console.log("Hello, Guest!");
}


// Function 1: A function that calculates the sum of two numbers.
// It takes two inputs (num1, num2) and 'returns' a result.
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Let's test our function.
const sum = addNumbers(5, 10);
console.log(`The sum is: ${sum}`); // This will show "The sum is: 15"

// This function doesn't return a value; it performs an action.
function updateGreeting(name) {
    // This is our first DOM interaction! We find the h1 element...
    const greetingElement = document.getElementById("greeting-title");
    // ...and change its text content.
    greetingElement.textContent = `Hello, ${name}!`;
}

// function to update the page.
// We'll use the name we got from the prompt earlier.
if (userName) {
    updateGreeting(userName);
}


// Loop 1: A 'for' loop to count down from 3 in the console.
console.log("Starting countdown...");
for (let i = 3; i > 0; i--) {
    console.log(i);
}
console.log("Go!");

// Loop 2: A 'forEach' loop to display items from an array on the page.
const fruits = ["🍎 Apple", "🍊 Orange", "🍌 Banana", "🍇 Grape"];

// We get the empty list from our HTML.
const fruitListElement = document.getElementById("fruit-list");

// The forEach loop runs once for every item in the 'fruits' array.
fruits.forEach(function(fruit) {
    // This is another DOM interaction: creating a new element.
    const listItem = document.createElement("li"); // Create an <li> element
    listItem.textContent = fruit; // Set its text
    fruitListElement.appendChild(listItem); // Add it to the list on our page
});

// Interaction 1: Selecting the button (DOM Selection).
const myButton = document.getElementById("action-button");

// We tell the button to "listen" for a click. When it's clicked,
// it will run the code inside the function.
myButton.addEventListener("click", function() {

    alert("You clicked the button! 🎉");
    document.body.style.backgroundColor = "#cce5ff"; // Change the background color
});