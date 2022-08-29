function myOnClickFunction() {
    alert("Hello");
}

// Setting Event Listener
// let simpleButton3 = document.getElementById("simpleButton3");
// simpleButton3.addEventListener("click", () => {
//     alert("Hello");
// });

// simpleButton3.addEventListener("click", myOnClickFunction);
// simpleButton3.addEventListener("click", myOnClickFunction()); // Wrong usage\

// simpleButton3.onclick = myOnClickFunction;

// simpleButton3.onclick = () => {
//     alert("Hello");
// };

// Mouse Events
// let simpleDiv = document.querySelector("#simpleDiv");
let simpleDiv = document.getElementById("simpleDiv");

// simpleDiv.addEventListener("mousedown", () => {
//     console.log("Mouse Down");
// });

// simpleDiv.addEventListener("mouseup", () => {
//     console.log("Mouse Up");
// });

// simpleDiv.addEventListener("mouseenter", () => {
//     console.log("Mouse Enter");
// });

// simpleDiv.addEventListener("mouseover", () => {
//     console.log("Mouse Over");
// });

// simpleDiv.addEventListener("mouseleave", () => {
//     console.log("Mouse Leave");
// });

// simpleDiv.addEventListener("mouseout", () => {
//     console.log("Mouse Out");
// });

// simpleDiv.addEventListener("mousemove", () => {
//     console.log("Mouse Move");
// });


// Event parameter
simpleDiv.addEventListener("click", (e) => {
    console.log(e);
});

// Manual passing event parameters
function inputClick(text, e){
    console.log(text);
    console.log(e);
}