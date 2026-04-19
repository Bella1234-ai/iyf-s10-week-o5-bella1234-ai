const article = document.querySelector("article");

function createParagraph() {
  const p = document.createElement("p");
  p.textContent = "This is a new paragraph!";
  p.className = "content highlight";
  return p;
}

const firstParagraph = article.querySelector("p");

// Add in different places
article.appendChild(createParagraph());
article.insertBefore(createParagraph(), firstParagraph);
article.prepend(createParagraph());
firstParagraph.before(createParagraph());
firstParagraph.after(createParagraph());

// Remove
const lastParagraph = article.querySelector("p:last-child");
lastParagraph.remove();

// Replace
const secondParagraph = article.querySelector("p:nth-child(2)");
article.replaceChild(createParagraph(), secondParagraph);

// Clone
const clonedParagraph = firstParagraph.cloneNode(true);
article.appendChild(clonedParagraph);

// Check if an element contains another
const contains = article.contains(firstParagraph);
console.log("Article contains first paragraph:", contains);

// Get element properties
console.log("First paragraph text:", firstParagraph.textContent);
console.log("First paragraph classes:", firstParagraph.className);
console.log("First paragraph ID:", firstParagraph.id);

// Add event listener to the first paragraph
firstParagraph.addEventListener("click", () => {
  alert("First paragraph clicked!");
});

// Create and append a new paragraph with an event listener
const newParagraph = createParagraph();
newParagraph.addEventListener("click", () => {
  alert("New paragraph clicked!");
});
article.appendChild(newParagraph);  

// Get all paragraphs and log their text content
const paragraphs = article.querySelectorAll("p");
paragraphs.forEach((p, index) => {
  console.log(`Paragraph ${index + 1}:`, p.textContent);
}); 

// Get the parent element of the first paragraph
const parent = firstParagraph.parentElement;
console.log("Parent of the first paragraph:", parent.tagName);  

// Get the next sibling of the first paragraph
const nextSibling = firstParagraph.nextElementSibling;
console.log("Next sibling of the first paragraph:", nextSibling ? nextSibling.textContent : "None");

// Get the previous sibling of the first paragraph
const previousSibling = firstParagraph.previousElementSibling;
console.log("Previous sibling of the first paragraph:", previousSibling ? previousSibling.textContent : "None");    

// Get the number of child elements in the article
const childCount = article.childElementCount;
console.log("Number of child elements in the article:", childCount);

// Get the first child element of the article
const firstChild = article.firstElementChild;
console.log("First child element of the article:", firstChild ? firstChild.textContent : "None");

// Get the last child element of the article
const lastChild = article.lastElementChild;
console.log("Last child element of the article:", lastChild ? lastChild.textContent : "None");

// Get the class list of the first paragraph
const classList = firstParagraph.classList;
console.log("Class list of the first paragraph:", classList);

// Toggle a class on the first paragraph
firstParagraph.classList.toggle("highlight");
console.log("Class list after toggling 'highlight':", firstParagraph.classList);

// Check if the first paragraph has a specific class
const hasHighlight = firstParagraph.classList.contains("highlight");
console.log("First paragraph has 'highlight' class:", hasHighlight);

// Get the computed style of the first paragraph
const computedStyle = window.getComputedStyle(firstParagraph);
console.log("Computed style of the first paragraph:", computedStyle.color, computedStyle.fontSize); 

// Set a new style for the first paragraph
firstParagraph.style.color = "blue";
firstParagraph.style.fontSize = "18px";
console.log("Updated style of the first paragraph:", firstParagraph.style.color, firstParagraph.style.fontSize);    

// Get the attributes of the first paragraph
const attributes = firstParagraph.attributes;
console.log("Attributes of the first paragraph:");

for (let i = 0; i < attributes.length; i++) {
  const attr = attributes[i];
  console.log(`- ${attr.name}: ${attr.value}`);
}   

// Set a new attribute for the first paragraph
firstParagraph.setAttribute("data-info", "This is a custom attribute");
console.log("Updated attributes of the first paragraph:");

for (let i = 0; i < firstParagraph.attributes.length; i++) {
  const attr = firstParagraph.attributes[i];
    console.log(`- ${attr.name}: ${attr.value}`);
}

// Remove an attribute from the first paragraph
firstParagraph.removeAttribute("data-info");
console.log("Attributes after removing 'data-info':");

for (let i = 0; i < firstParagraph.attributes.length; i++) {
  const attr = firstParagraph.attributes[i];
  console.log(`- ${attr.name}: ${attr.value}`);
}

// Get the dataset of the first paragraph
const dataset = firstParagraph.dataset;
console.log("Dataset of the first paragraph:", dataset);

// Set a new data attribute for the first paragraph
firstParagraph.dataset.info = "This is a new data attribute";
console.log("Updated dataset of the first paragraph:", firstParagraph.dataset); 

// Remove a data attribute from the first paragraph
delete firstParagraph.dataset.info;
console.log("Dataset after removing 'info':", firstParagraph.dataset);  

// Get the inner HTML of the first paragraph
const innerHTML = firstParagraph.innerHTML;
console.log("Inner HTML of the first paragraph:", innerHTML);

// Set new inner HTML for the first paragraph
firstParagraph.innerHTML = "This is the updated <strong>inner HTML</strong>!";
console.log("Updated inner HTML of the first paragraph:", firstParagraph.innerHTML);

// Get the outer HTML of the first paragraph
const outerHTML = firstParagraph.outerHTML;
console.log("Outer HTML of the first paragraph:", outerHTML);

// Set new outer HTML for the first paragraph
firstParagraph.outerHTML = "<p>This is the updated <em>outer HTML</em>!</p>";
console.log("Updated outer HTML of the first paragraph:", firstParagraph.outerHTML);

// Get the text content of the first paragraph
const textContent = firstParagraph.textContent;
console.log("Text content of the first paragraph:", textContent);

// Set new text content for the first paragraph
firstParagraph.textContent = "This is the updated text content!";
console.log("Updated text content of the first paragraph:", firstParagraph.textContent);

function createList() {
  const ul = document.createElement("ul"); 
    const items = ["Item 1", "Item 2", "Item 3"];
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  return ul;
}
article.appendChild(createList());

//Removing Elements

// Remove an element
const footer = document.querySelector("footer");
footer.remove();

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
lastLink.parentElement.removeChild(lastLink);

// Clear all children
article.innerHTML = "";  // Simple but rebuilds DOM
// OR
while (article.firstChild) {
    article.removeChild(article.firstChild);
}

// cloning elements
const header = document.querySelector("header");
const clonedHeader = header.cloneNode(true);
document.body.appendChild(clonedHeader);
document.body.appendChild(clonedHeader.cloneNode(true));

const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);  // true = deep clone
clone.querySelector("a").textContent = "New Link";
document.querySelector(".nav-list").appendChild(clone);
