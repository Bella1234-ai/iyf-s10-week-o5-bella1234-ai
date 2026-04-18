const article = document.querySelector("article");

// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This is new content.</p>
`;

// Safer: textContent (escapes HTML)
const userInput = "<script>alert('hack!')</script>";
article.textContent = userInput;  // Displays as text, not executed

// Practice: Update the content of these elements
// 1. The h1 element to "Welcome to the DOM Practice"
// const h1 = document.querySelector("h1");
// h1.textContent = "Welcome to the DOM Practice";
// 2. The first paragraph to "This is the first paragraph."
// const firstParagraph = document.querySelector("p");
// firstParagraph.textContent = "This is the first paragraph.";
// 3. The second paragraph to "This is the second paragraph."
// const secondParagraph = document.querySelectorAll("p")[1];
// secondParagraph.textContent = "This is the second paragraph.";
// 4. The article to include a new section with a heading and some text
// article.innerHTML += `
//     <section>
//         <h2>New Section</h2>
//         <p>This is a new section added to the article.</p>
//     </section>
// `;   
// Change Title Text	document.querySelector('.title').textContent = "New Title";	Safe and fast for plain text.  
//Inject New HTML	article.innerHTML = "<h3>Subheading</h3><p>New text</p>";	Replaces everything inside.
// Clear an Element	document.querySelector('section').innerHTML = "";	Removes all children.
// Security Testconst malicious = "<img src=x onerror=alert(1)>";el.textContent = malicious;Displays code as harmless text.
// 