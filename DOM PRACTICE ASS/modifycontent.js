const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent);     // Includes hidden text
console.log(h1.innerText);       // Only visible text

// Modifying text
h1.textContent = "New Title";
// Modifying HTML
h1.innerHTML = "New <em>Title</em>";
