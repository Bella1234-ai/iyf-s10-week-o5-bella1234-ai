// Implement these shortcuts:
//the following keyboard shortcuts:
// Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
// Escape: Clear all form inputs
// Ctrl+Enter: Submit form
// Ctrl+Shift+L: Toggle dark mode (add/remove "dark-mode" class on body)


// Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }   
}); 

// Escape: Clear all form inputs
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const formInputs = document.querySelectorAll("form input");
        formInputs.forEach(input => {
            input.value = "";
        });
    }
});


// Ctrl+Enter: Submit form
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key === "Enter") {
        const form = document.querySelector("form");
        form.submit();
    }
});

// Ctrl+Shift+L: Toggle dark mode (add/remove "dark-mode" class on body)
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "L") {
        document.body.classList.toggle("dark-mode");
    }
}); 