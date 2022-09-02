/*
    Inputs and Validation Spans
*/

let firstNameInput = document.getElementById("firstNameInput");
let firstNameValidationSpan = document.getElementById(
  "firstNameValidationSpan"
);

let lastNameInput = document.getElementById("lastNameInput");
let lastNameValidationSpan = document.getElementById("lastNameValidationSpan");

let emailInput = document.getElementById("emailInput");
let emailValidationSpan = document.getElementById("emailValidationSpan");

let passwordInput = document.getElementById("passwordInput");
let passwordValidationSpan = document.getElementById("passwordValidationSpan");

// Adding Event Listeners
firstNameInput.addEventListener("change", firstNameInputCheck);
lastNameInput.addEventListener("change", lastNameInputCheck);
emailInput.addEventListener("change", emailInputCheck);
passwordInput.addEventListener("change", passwordInputCheck);

// Getting the form
let form = document.getElementById("register-form");

// Submit event listener for the form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  firstNameInputCheck();
  lastNameInputCheck();
  emailInputCheck();
  passwordInputCheck();
});

/*
    Null checking functions
*/
function firstNameInputCheck() {
  firstNameValidationSpan.textContent = "";
  if (firstNameInput.value === null || firstNameInput.value === "") {
    firstNameValidationSpan.textContent = "You should fill this field.";
  }
}

function lastNameInputCheck() {
  lastNameValidationSpan.textContent = "";
  if (lastNameInput.value === null || lastNameInput.value === "") {
    lastNameValidationSpan.textContent = "You should fill this field.";
  }
}

function emailInputCheck() {
  emailValidationSpan.textContent = "";
  if (emailInput.value === null || emailInput.value === "") {
    emailValidationSpan.textContent = "You should fill this field.";
  }
}

function passwordInputCheck() {
  passwordValidationSpan.textContent = "";
  if (passwordInput.value === null || passwordInput.value === "") {
    passwordValidationSpan.textContent = "You should fill this field.";
  } else {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    result = passwordInput.value.match(pattern);
    if (result === null) {
      passwordValidationSpan.textContent = "The password must contain at least 8 characters, a combination of Uppercase and lowercase letters, and numbers."
    }
  }
}
