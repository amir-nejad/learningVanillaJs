/*
  Constants
*/

const dangerResultBoxText = "danger-result-box";
const successResultBoxText = "success-result-box";
const resultBoxText = "result-box";
const userObjectLocalStorageKey = "userObject";

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
  let isFirstNameValid = firstNameInputCheck(e);
  let isLastNameValid = lastNameInputCheck(e);
  let isEmailValid = emailInputCheck(e);
  let isPasswordValid = passwordInputCheck(e);

  if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid) {
    let userObject = {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    // Saving user information to the localStorage
    localStorage.setItem(userObjectLocalStorageKey, JSON.stringify(userObject));
  }
});

/*
    Null checking functions
*/
function firstNameInputCheck(e) {
  isFormValid = true;
  firstNameValidationSpan.textContent = "";
  if (firstNameInput.value === null || firstNameInput.value === "") {
    firstNameValidationSpan.textContent = "You should fill this field.";
    e.preventDefault();

    return false;
  }

  return true;
}

function lastNameInputCheck(e) {
  isFormValid = true;
  lastNameValidationSpan.textContent = "";
  if (lastNameInput.value === null || lastNameInput.value === "") {
    lastNameValidationSpan.textContent = "You should fill this field.";
    e.preventDefault();
    return false;
  }

  return true;
}

function emailInputCheck(e) {
  emailValidationSpan.textContent = "";
  if (emailInput.value === null || emailInput.value === "") {
    emailValidationSpan.textContent = "You should fill this field.";
    e.preventDefault();
    return false;
  }

  return true;
}

function passwordInputCheck(e) {
  passwordValidationSpan.textContent = "";
  if (passwordInput.value === null || passwordInput.value === "") {
    passwordValidationSpan.textContent = "You should fill this field.";
    e.preventDefault();
    return false;
  } else {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    result = passwordInput.value.match(pattern);
    if (result === null) {
      passwordValidationSpan.textContent =
        "The password must contain at least 8 characters, a combination of Uppercase and lowercase letters, and numbers.";
      e.preventDefault();
      return false;
    }
  }

  return true;
}

/*
  Result Box Setup
*/

let resultBox = document.getElementById(resultBoxText);

// Success Result
function showSuccessResult(htmlMessage) {
  if (!resultBox) {
    resultBox = document.getElementById(resultBoxText);
  }

  if (resultBox.classList.contains(dangerResultBoxText)) {
    resultBox.classList.remove(dangerResultBoxText);
  }

  if (!resultBox.classList.contains(successResultBoxText)) {
    resultBox.classList.add(successResultBoxText);
  }

  // Nullish coalescing operator
  resultBox.innerHTML = htmlMessage ?? "Successful Result!";
  localStorage.clear();

  resultBox.classList.toggle("show");
}

// Failed Result
function showFailedResult(htmlMessage) {
  if (!resultBox) {
    resultBox = document.getElementById(resultBoxText);
  }

  if (resultBox.classList.contains(successResultBoxText)) {
    resultBox.classList.remove(successResultBoxText);
  }

  if (!resultBox.classList.contains(dangerResultBoxText)) {
    resultBox.classList.add(dangerResultBoxText);
  }

  resultBox.innerHTML = htmlMessage ?? "Failed Result!";
  localStorage.clear();

  resultBox.classList.toggle("show");
}

// Showing result after page loading.
(() => {
  let userObject = JSON.parse(localStorage.getItem(userObjectLocalStorageKey));
  // console.log(userObject);
  if (userObject) {
    let htmlMessage = `Your registeration was successful. Here is your information: <br />
                   First Name: ${userObject.firstName}<br />
                   Last Name: ${userObject.lastName} <br />
                   Email: ${userObject.email} <br />
                   Password: ${userObject.password}`;

    showSuccessResult(htmlMessage);
  }
})();
