document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
console.log("Clicking on Child...");
document.getElementById("child").click();

// Answer: Child → Parent → Grandparent (bubbling up)
console.log("Clicking on Parent...");
document.getElementById("parent").click();

// Answer: Parent → Grandparent (bubbling up)
console.log("Clicking on Grandparent...");
document.getElementById("grandparent").click();

// Answer: Grandparent only (no bubbling up)
console.log("Answer: Grandparent only (no bubbling up)");   

