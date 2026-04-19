function addNavItem(text, href) {
    // Create li with a.nav-link inside
    // Add to the nav list
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

function addNavItem(text, href) {
  // Create <li>
  const li = document.createElement("li");

  // Create <a>
  const link = document.createElement("a");
  link.className = "nav-link";
  link.textContent = text;
  link.href = href;

  // Append <a> to <li>
  li.appendChild(link);

  // Select the nav list (make sure it exists in your HTML)
  const navList = document.querySelector("#nav-list");

  // Append <li> to nav list
  navList.appendChild(li);
}

// Usage
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");