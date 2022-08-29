// let myParagraph = document.getElementsByTagName("p")[0];

// console.log(myParagraph);

// myParagraph.style.color = "red";

// ----

let simpleDivs = document.getElementsByClassName("simpleDiv");

// console.log(simpleDivs);

// for (const element of simpleDivs) {
//     console.log(element);

//     element.style.border = "2px solid black";
//     element.style.margin = "20px";
//     element.style.padding = "20px";
// }

// ---

// let label = document.querySelector(".simpleDiv form label");

// console.log(label);

// label.textContent ="Simple Input";

// ---

let input = document.getElementById("simpleInput");

input.value = "Hello";

// ---

// Creating Elements

let newLabel = document.createElement("label");

newLabel.textContent = "Simple Label 2";
newLabel.htmlFor = "simpleInput2";

let newInput = document.createElement("input");

newInput.type = "text";
newInput.name = "simpleInput2";
newInput.id = "simpleInput2";
newInput.setAttribute("data-custom-attribute", "Amir");
newInput.classList.add("myInput");
// newInput.classList.toggle("myInput");

let form = document.querySelector(".simpleDiv form");
form.appendChild(newLabel);
form.appendChild(newInput);

// ---

let firstParagraph = document.querySelector(".simpleDiv p");

console.log(firstParagraph);

console.log(firstParagraph.nextSibling);

console.log(firstParagraph.nextElementSibling);

// ---

simpleDivs[1].innerHTML = "<h3>Hello, I'm Amir.</h3>";