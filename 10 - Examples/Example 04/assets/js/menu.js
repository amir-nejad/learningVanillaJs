// Getting all dropdown menus
let dropDownMenus = document.getElementsByClassName("dropdown");

if (dropDownMenus) {
  // Adding click event listener for all dropdowns
  for (const dropdown of dropDownMenus) {
    dropdown.addEventListener("click", () => {
      let firstUl = dropdown.nextElementSibling;

      if (!firstUl) {
        return;
      }

      firstUl.classList.toggle("show");
    });
  }
}

// Setup mobile menu
let mobileMenuButton = document.getElementById("mobile-menu-button");
let mobileMenuContainer = document.getElementById("mobile-menu-container");

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenuContainer.classList.toggle("show");
  });
}

let timesButton = document.getElementById("times-button");

if (timesButton) {
  timesButton.addEventListener("click", () => {
    mobileMenuContainer.classList.toggle("show");
  });
}
