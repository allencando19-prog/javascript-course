
// // JavaScript Fundamentals - Hour 1
// // My first JavaScript code!


// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);

// console.log("=== VARIABLES ===");

// let firstName = "Will Allen";
// console.log(firstName);

// let age = 30;
// console.log(age);
// age = 31; 
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI); 3.145

// var job = "programmer";
// job = "teacher";
// console.log(job); 'teacher'

// const country = "Philippines";
// const language = "Filipino";

// age = 22;
// age = 23;

// console.log("=== DATA TYPES ===");

// let id = 12345;
// console.log(id); 12345
// console.log(typeof id); 'number'

// let lastName = "Allen";
// console.log(lastName); 'Allen'
// console.log(typeof lastName); 'string'

// let javaScriptIsFun = true;
// console.log (javaScriptIsFun); true
// console.log(typeof javaScriptIsFun); 'boolean'

// let year;
// console.log(year); undefined
// console.log(typeof year); 'undefined'

// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "I am now a string!";
// console.log(dynamicVariable, typeof dynamicVariable);
// dynamicVariable = true;

console.log("=== MATH OPERATORS");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

console.log("Math operations");
console.log("Addition", 10 + 5);
console.log("Subtraction", 20 - 8);
console.log("Multiplication", 4 * 7);
console.log("Division", 15 / 3);
console.log("Exponentation", 2 ** 3);

const firstName = "Allen";
const lastName = "Cando";
console.log("Concatenation",firstName + " " + lastName);

console.log("Hello" + "World" + "!");

console.log("=== ASSIGNMENT OPERATIONS ===");

let x = 10 + 5;
console.log("x starts as:", x);

x += 10;
console.log("x starts as:", x);

x *= 4;
console.log("x starts as:", x);

x /= 2;
console.log("x starts as:", x);

x++;
console.log("x starts as:", x);

x--;
console.log("x starts as:", x);

console.log("=== COMPARISON OPERATORS ===");
 
console.log("Age comparison:");
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true
console.log(ageJonas < 30);
 
console.log("Number comparison:");
console.log(25 > 20); // true
console.log(15 < 10); // true
console.log(18 >= 10); // true
console.log(16 <= 15); // true
 
const isFullAge = ageSarah >= 18;
console.log("Is Sarah an adult:", isFullAge); // true
 
console.log("Complex comparison:");
console.log(now - 1991 > now - 2018); // true
 
let z, y;
z = y = 25 - 10 -5;
console.log(z, y); // 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////
// Coding Challenge #1 - BMI Calculator

// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Is Mark's BMI higher than John's?", bmiMark > bmiJohn); // true
 
// Test Data 2
const massMark2 = 95;      
 
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;
const bmiMark2 = massMark2 / heightMark2 ** 2;
const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
console.log("Mark's BMI:", bmiMark2);
console.log("John's BMI:", bmiJohn2);
console.log("Is Mark's BMI higher than John's?", bmiMark2 > bmiJohn2);









