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
