const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);


// Remove event listener
button.removeEventListener("click", handleClick);


// Event delegation example
const list = document.createElement("ul");
list.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;
document.body.appendChild(list);                    

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked on:", event.target.textContent);
    }
});

