// Getting required elements
let parentDiv = document.getElementById("parentDiv");
let childDiv = document.getElementById("childDiv");

// Setting first event listener
parentDiv.addEventListener("mouseenter", () => {
  childDiv.style.top = "300px";
  childDiv.style.left = "300px";
  childDiv.style.transition = "all 1s";
});

// Setting second event listener
parentDiv.addEventListener("mouseleave", () => {
  childDiv.style.top = "0px";
  childDiv.style.left = "0px";
  childDiv.style.transition = "all 1s";
});

// Setting third event listener
parentDiv.addEventListener("mousemove", (e) => {
  parentDiv.style.top = `${e.clientY / 2}px`;
  parentDiv.style.left = `${e.clientX / 2}px`;
});



// Setting fourth event listener
parentDiv.addEventListener("mousedown", () => {
  let r = getRandom8BitNumber();
  let g = getRandom8BitNumber();
  let b = getRandom8BitNumber();
  parentDiv.style.background = `rgb(${r}, ${g}, ${b})`;
});

// Functions
function getRandom8BitNumber() {
  return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}
