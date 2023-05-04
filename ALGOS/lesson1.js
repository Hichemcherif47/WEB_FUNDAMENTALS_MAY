// ==== Lesson 1 =====
var a = 25; // Declare a variable and assigned a value of 25
a = a - 13; // changed the varibale a value 
// console.log(a / 2); // 6

// changed the value of a -- reassigned the value of a
a = "hello";
// console.log(a + " hello");

// ==== Lesson 2 =====
// 3 S
// Start: 0
// Stop: i < 10
// Step: increment by 1 
// 10 iterations
// 0, 1, 2 , 3, 4, 5, 6, 7, 8, 9
// for (var i = 0; i < 10; i++) { // block of code
//     console.log("inside the loop " + i); // display value of i 
//     i = i + 3; // each iteration add 3 to i
// }

// console.log("outside of the loop " + i);

// ==== Lesson 3 =====
// function declaration
// keyword   name      parameter
//  v          v           v
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0]; // 

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]; // sum = 5 + 5
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}
// 1st iteration : 2
// 2nd iteration : 5
// 3rd iteration : 10
// Output: 10

// call a function / Invoke a function
getTotal([1, 3, 5]);
