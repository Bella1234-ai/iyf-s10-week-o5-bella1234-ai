// Create a counter display and buttons
const counterDisplay = document.createElement("div");
counterDisplay.textContent = "Count: 0";
counterDisplay.style.fontSize = "24px";
counterDisplay.style.marginBottom = "10px";
document.body.appendChild(counterDisplay);  
const incrementButton = document.createElement("button");
incrementButton.textContent = "+";
document.body.appendChild(incrementButton);
const decrementButton = document.createElement("button");
decrementButton.textContent = "-";
document.body.appendChild(decrementButton);
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);
let count = 0;
// + button increases count
incrementButton.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
}); 
// - button decreases count
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = `Count: ${count}`;
    }   
});
// Reset button sets to 0
resetButton.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`;
}); 
// Count cannot go below 0
decrementButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = `Count: ${count}`;
    }
});