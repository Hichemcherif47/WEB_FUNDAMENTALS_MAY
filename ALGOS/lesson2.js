//? ====== Always isSunny ======
var isSunny = true; // Boolean
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
// DRY
// Don't repeat yourself
// condtional
if (isSunny == true) { // if the weather is sunny
    whatToBring += "sunglasses, "; // I should bring: sunglasses,
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining == true) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

//console.log(whatToBring); // I should bring sunglasses coat and a smile

//? ====== Prepare for downcount ======
//! 3S
//* Start : 10
//* Stop: 0
//* Step: --1
for (var i = 10; i > 0; i--) {
    if (i != 2) { // true
        //console.log(i); // 10, 9, 8
    } else {
        //console.log("ignition!");
    }
}

//console.log("liftoff!");


//* ====== Count positives ======
//TODO: count the total of negative numbers
var countPositives = 0;
//            
//             0   1  2   3   4   5  6
var numbers = [3, 4, -2, 7, 16, -8, 0];
// your code here!
// !Steps
// ? iterate through the list of numbers (For Loop)
// ? For each iteration:
//* Check whether the value in the current index is positive
//* if yes: increment the count by 1
//* Display the count

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        countPositives++;

    }
}

console.log("there are " + countPositives + " positive values");