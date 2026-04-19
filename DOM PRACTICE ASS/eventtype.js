// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);
element.addEventListener("mousemove", handler);

// Keyboard events
input.addEventListener("keydown", handler);
input.addEventListener("keyup", handler);
input.addEventListener("keypress", handler);  // Deprecated

// Form events
form.addEventListener("submit", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);
input.addEventListener("input", handler);     // Real-time changes
input.addEventListener("change", handler);    // On blur after change

// Window events
window.addEventListener("load", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler); 

// Custom events
const customEvent = new CustomEvent("myCustomEvent", { detail: { key: "value" } }); 
element.addEventListener("myCustomEvent", function(event) {
    console.log("Custom event triggered with data:", event.detail);
});
element.dispatchEvent(customEvent);

// Touch events (for mobile)
element.addEventListener("touchstart", handler);
element.addEventListener("touchmove", handler);
element.addEventListener("touchend", handler);  

