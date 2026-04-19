document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);
    
    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);
    
    // Event type
    console.log("Type:", event.type);
    
    // Mouse position
    console.log("Position:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation (bubbling)
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);       // "a", "Enter", "Escape"
    console.log("Code:", event.code);     // "KeyA", "Enter", "Escape"
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});

// Form events
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Input value:", form.querySelector("input").value);
});

// Custom events
const customEvent = new CustomEvent("myCustomEvent", { detail: { key: "value" } });
document.addEventListener("myCustomEvent", function(event) {
    console.log("Custom event triggered with data:", event.detail);
});     
document.dispatchEvent(customEvent);

// Touch events (for mobile)
document.addEventListener("touchstart", function(event) {
    console.log("Touch started at:", event.touches[0].clientX, event.touches[0].clientY);
}); 

