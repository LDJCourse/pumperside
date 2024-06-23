// Open dropdown menu in mobile version

const dropdown_btn = document.querySelector(".nav_dropdown");

const dropdown_menu = document.querySelector("ul");

dropdown_btn.addEventListener("click", handleDropdownOpen);

// Handle open dropdown

function handleDropdownOpen() {
  dropdown_menu.classList.toggle("open");
}
