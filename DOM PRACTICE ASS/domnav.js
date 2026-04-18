const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);          // header

// Children
console.log(nav.children);               // HTMLCollection
console.log(nav.firstElementChild);      // ul
console.log(nav.lastElementChild);       // ul

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);     // section
console.log(article.previousElementSibling); // null

// Descendants
const navLinks = nav.querySelectorAll("a");  // all links inside nav



// 1. Select the header, then navigate to the nav inside it
        //const nav = document.querySelector('header').firstElementChild;
       //(or header.children[1] depending on your HTML)
// 2. Select the first nav-link, then get its parent li
     // const parentLi = document.querySelector('.nav-link').parentElement;
// 3. Select the article, then get its next sibling (section)
        // const nextSection = document.querySelector('article').nextElementSibling;
// 4. Select the ul, then get all its child li elements
        // const listItems = document.querySelector('ul').children;
// Start from the footer and navigate up to the body
        // const body = document.querySelector('footer').parentElement.parentElement;