// Browser Console
// console.log("Log message");

// console.info("Info message");

// console.error("Error message");

// console.debug("Debug message");

// console.warn("Warning message");

// console.table({data1: "value1", data2: "value2"});

// let x = 4;
// let y = 10;

// console.assert(x + y == 4, "False Response");


// Browser Debugging (Setting a Breakpoint)
// function add(x, y) {
//     return +x + +y;
// }

// console.log(add(3, 5));
// console.log(add("1", 1));


// debugger keyword
// function add_concatenate(x, y) {
//     debugger;
//     if (typeof x === "number" && typeof y === "number") {
//         return x + y;
//     }else if (typeof x === "string" && typeof y === "string"){
//         return x + " " + y;
//     }else {
//         return null;
//     }
// }


// console.log(add_concatenate(2, 5));

// Error Handling
// try {
//     add();
// } catch {
//     console.log("add is not defined.");   
// } finally {
//     console.log("Hi");
// }

try {
    add();
} catch (e) {
    console.error(e);  
} finally {
    console.log("Hi");
}

// add();

// let x = 8;
// console.log(x);