// let x = 5;
// let y = 8;

/*
    if/else
*/
// if (x == y) {
//   console.log("True, x and y are equal.");
// } else {
//   console.log("False, x and y are not equal.");
// }

/*
    if/else if
*/
// if (x < 10 && y > 5) {
//   console.log("sum:", x + y);
// } else if (x < 4 || y > 5) {
//   console.log("subtract:", x - y);
// } else {
//   console.log("multiply:", x * y);
// }

/*
    Inline if
*/
// let a = 1;
// let b = 8;

// let c = (a == b);
// let d = ((a == b) ? console.log("True") : console.log("False"));

/*
    for, for/in, for/of loops
*/
// console.log("Amirhossein");
// console.log("Amirhossein");
// console.log("Amirhossein");
// console.log("Amirhossein");
// console.log("Amirhossein");

// for(let i = 0; i < 5; i++){
//     console.log("Amirhossein");
// }

// let numbers = [0, 4, 9, 12, 15, 11, 8];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// for (const i in numbers) {
//   if (Object.hasOwnProperty.call(numbers, i)) {
//       const element = numbers[i];

//       console.log(element);
//   }

//   console.log(numbers[i]);

//   console.log(i);

//   if (Object.hasOwnProperty.call(numbers, i)) {
//     const element = numbers[i];

//     if(element % 2 == 0){
//         console.log(element);
//     }
//   }
// }

// console.log("================");

// for (const i of numbers) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }


// continue and break keyworks
// for (const i in numbers) {
//     if (Object.hasOwnProperty.call(numbers, i)) {
//         const element = numbers[i];
        
//         if(element <= 10){
//             continue;
//         }else {
//             console.log(element);
//         }

//         if(element == 15){
//             break;
//         }
//     }
// }


/*
    while, do/while loops
*/

// let x = 10;

// while(x <= 10){
//     console.log("Trust yourself.");
//     x--;

//     if (x == 0) {
//         break;
//     }
// }

// do {
//     console.log("Hello world!");    
// } while (x > 10);



/*
    foreach and switch
*/
// let myArray = ["Addition", "Subtraction", "Multiplication", "Division"];

// myArray.forEach(element => {
//     switch (element) {
//         case "Addition":
//             console.log(x + y);
//             break;
//         case "Subtraction":
//             console.log(x - y);
//             break;
//         case "Multiplication":
//             console.log(x * y);
//             break;
//         case "Division":
//             console.log(x / y);
//             break;
//         default:
//             break;
//     }
// });