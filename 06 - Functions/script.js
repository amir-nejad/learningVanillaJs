// let myArray = [2, 5, 6, 8, 10];

// let sum = 0;

// for (const i of myArray) {
//     sum += i;
// }

// console.log(sum);

// let myArray2 = [2, 10, 6, 9, 15];

// let sum2 = 0;

// for (const i of myArray) {
//     sum += i;
// }

// console.log(sum);

// function arraySum(array){
//     let sum = 0;

//     if(typeof array === 'object'){
//         for (const i of array) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// console.log(arraySum(myArray));
// console.log(arraySum(myArray2));

/*
    Functions Definitions

    Function input/output types:
        - input/output
        - no input/output
        - input/no output
        - not input/no output 
*/

// Declared Functions
// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(4, 9));

// Expression Functions
// const sum = function (x, y) {
//   return x + y;
// };

// console.log(sum(4, 9));

// Self-invoking Functions
// (function (){
//     let x = 4;
//     let y = 8;

//     console.log(x + y);
// })();

// function add_concatenate(a, b){
//     return a + b;
// }

// console.log(add_concatenate(2, 5));
// console.log(add_concatenate("Amirhossein", "Shabaninejad"));
// console.log(add_concatenate("Amir", 2));

// function add_concatenate(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a + b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + " " + b;
//   } else {
//     return null;
//   }
// }

// console.log(add_concatenate(2, 5));
// console.log(add_concatenate("Amirhossein", "Shabaninejad"));
// console.log(add_concatenate("Amir", 2));

// The Spread Operator (Rest Parameters)
// function sum(...data) {
//     sum = 0;

//     for (const i of data) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sum(4, 5, 9, 10, 12));

// function sum(...data) {
//   let dataLength = arguments.length;

//   if (dataLength == 2) {
//     console.log("Data Length:", dataLength);
//     return data[0] + data[1];
//   }else {
//     sum = 0;

//     for (const i of data) {
//       sum += i;
//     }
  
//     return sum;
//   }
// }

// console.log(sum(3, 5))
// console.log(sum(4, 5, 9, 10, 12));


// Scopes
// let x = 4;

// console.log(x);

// if(x == 4){
//     x = 5;
//     console.log(x);
// }

// console.log(x);

// var x = 4;

// console.log(x);

// if(x == 4){
//     x = 5;
//     console.log(x);
// }

// console.log(x);


let x = 4;

if(x == 4){
    // let y = 5;
    // var y = 5;
    let x = 8;
    // var x = 9; // Wrong usage
    console.log(x);
}

// console.log(y);
console.log(x);