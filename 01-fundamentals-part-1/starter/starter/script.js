
// // // // // // JavaScript Fundamentals - Hour 1
// // // // // // My first JavaScript code!


// // // // // let js = "amazing";
// // // // // console.log(40 + 8 + 23 - 10);
// // // // // console.log(js);

// // // // // console.log("=== VARIABLES ===");

// // // // // let firstName = "Will Allen";
// // // // // console.log(firstName);

// // // // // let age = 30;
// // // // // console.log(age);
// // // // // age = 31; 
// // // // // console.log(age);

// // // // // const birthYear = 1991;
// // // // // console.log(birthYear);

// // // // // const PI = 3.1415;
// // // // // console.log(PI); 3.145

// // // // // var job = "programmer";
// // // // // job = "teacher";
// // // // // console.log(job); 'teacher'

// // // // // const country = "Philippines";
// // // // // const language = "Filipino";

// // // // // age = 22;
// // // // // age = 23;

// // // // // console.log("=== DATA TYPES ===");

// // // // // let id = 12345;
// // // // // console.log(id); 12345
// // // // // console.log(typeof id); 'number'

// // // // // let lastName = "Allen";
// // // // // console.log(lastName); 'Allen'
// // // // // console.log(typeof lastName); 'string'

// // // // // let javaScriptIsFun = true;
// // // // // console.log (javaScriptIsFun); true
// // // // // console.log(typeof javaScriptIsFun); 'boolean'

// // // // // let year;
// // // // // console.log(year); undefined
// // // // // console.log(typeof year); 'undefined'

// // // // // let dynamicVariable = 40;
// // // // // console.log(dynamicVariable, typeof dynamicVariable);

// // // // // dynamicVariable = "I am now a string!";
// // // // // console.log(dynamicVariable, typeof dynamicVariable);
// // // // // dynamicVariable = true;

// // // // console.log("=== MATH OPERATORS");

// // // // const now = 2037;
// // // // const ageJonas = now - 1991;
// // // // const ageSarah = now - 2018;
// // // // console.log(ageJonas, ageSarah);

// // // // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // // // console.log("Math operations");
// // // // console.log("Addition", 10 + 5);
// // // // console.log("Subtraction", 20 - 8);
// // // // console.log("Multiplication", 4 * 7);
// // // // console.log("Division", 15 / 3);
// // // // console.log("Exponentation", 2 ** 3);

// // // // const firstName = "Allen";
// // // // const lastName = "Cando";
// // // // console.log("Concatenation",firstName + " " + lastName);

// // // // console.log("Hello" + "World" + "!");

// // // // console.log("=== ASSIGNMENT OPERATIONS ===");

// // // // let x = 10 + 5;
// // // // console.log("x starts as:", x);

// // // // x += 10;
// // // // console.log("x starts as:", x);

// // // // x *= 4;
// // // // console.log("x starts as:", x);

// // // // x /= 2;
// // // // console.log("x starts as:", x);

// // // // x++;
// // // // console.log("x starts as:", x);

// // // // x--;
// // // // console.log("x starts as:", x);

// // // // console.log("=== COMPARISON OPERATORS ===");
 
// // // // console.log("Age comparison:");
// // // // console.log(ageJonas > ageSarah); // true
// // // // console.log(ageSarah >= 18); // true
// // // // console.log(ageJonas < 30);
 
// // // // console.log("Number comparison:");
// // // // console.log(25 > 20); // true
// // // // console.log(15 < 10); // true
// // // // console.log(18 >= 10); // true
// // // // console.log(16 <= 15); // true
 
// // // // const isFullAge = ageSarah >= 18;
// // // // console.log("Is Sarah an adult:", isFullAge); // true
 
// // // // console.log("Complex comparison:");
// // // // console.log(now - 1991 > now - 2018); // true
 
// // // // let z, y;
// // // // z = y = 25 - 10 -5;
// // // // console.log(z, y); // 10

// // // // const averageAge = (ageJonas + ageSarah) / 2;
// // // // console.log(ageJonas, ageSarah, averageAge);

// // // // ////////////////////////////////////
// // // // // Coding Challenge #1 - BMI Calculator

// // // // // Test Data 1
// // // // const massMark = 78;
// // // // const heightMark = 1.69;
// // // // const massJohn = 92;
// // // // const heightJohn = 1.95;
 
// // // // const bmiMark = massMark / heightMark ** 2;
// // // // const bmiJohn = massJohn / heightJohn ** 2;
// // // // console.log("Mark's BMI:", bmiMark);
// // // // console.log("John's BMI:", bmiJohn);
// // // // console.log("Is Mark's BMI higher than John's?", bmiMark > bmiJohn); // true
 
// // // // // Test Data 2
// // // // const massMark2 = 95;      
 
// // // // const heightMark2 = 1.88;
// // // // const massJohn2 = 85;
// // // // const heightJohn2 = 1.76;
// // // // const bmiMark2 = massMark2 / heightMark2 ** 2;
// // // // const bmiJohn2 = massJohn2 / heightJohn2 ** 2;
// // // // console.log("Mark's BMI:", bmiMark2);
// // // // console.log("John's BMI:", bmiJohn2);
// // // // console.log("Is Mark's BMI higher than John's?", bmiMark2 > bmiJohn2);



// // // const firtName = "Jonas";
// // // const job = "teacher";
// // // const birthYear = 1991;
// // // const year = 2037;

// // // const jonas = "I'm " + firtName + ", a " + (year - birthYear) + " year old " + job + "!";

// // // const JonasNew = `I'm ${firtName}, a ${year - birthYear} year old ${job}!`;
// // // console.log(JonasNew);

// // // console.log(`I'm ${2037 - 1991}`);


// // // const age = 15;

// // // if (age >= 18) {
// // //     console.log("Sarah can start a driving license");

// // // }else {
// // //     const yearsLeft = 18 - age;
// // //     console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// // // }

// // // console.log(Boolean(0)); // false
// // // console.log(Boolean(undefined));
// // // console.log(Boolean("Jonas"));
// // // console.log(Boolean({}));
// // // console.log(Boolean(""));

// // // const massMark = 78;
// // // const heightMark = 1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;
 
// // // const BMIMark = massMark / heightMark ** 2;
// // // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // // console.log(BMIMark, BMIJohn);
// // // if (BMIMark > BMIJohn) {
// // //     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// // // } else {
// // //     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// // // } 


// // // type conversion and coercion

// // const inputYear = "1991";
// // console.log(Number(inputYear), inputYear); 
// // console.log(Number(inputYear) + 18);

// // console.log(Number("Jonas"));
// // console.log(typeof NaN);

// // console.log(String(23), 23);
// // console.log(typeof String(23));

// // // Automatic Type Coercion
// // console.log("I am " + 23 + " years old");
// // console.log("23" - "10" - 3);
// // console.log("23" / "2"  );
// // console.log("23" * "2");

// // let n = "1" + 1;
// // console.log(n);

// // n = n - 1;
// // console.log(n);

// // // type conversion = explicit/manual (recommended)
// // // type coercion = implicit/automatic

// // //Equality - Strict

// // //const age = 18;
// // //if (age === 18) console.log("You just became an adult :D (strict)");
// // //if (age == 18) console.log("You just became an adult :D (loose)");

// // //console.log("18" == 18);
// // //console.log("18" === 18); //coercion happens
// // //console.log(18 === 18);

// // // why == can be dangerous

// // console.log('0' == 0); 
// // console.log(0 == false); 
// // console.log('0' == false);
// // console.log(null == undefined);
// // console.log('' == 0);
// // console.log('        ' == 0);

// // // best practice

// // const favorite = Number(prompt("What's your favorite number?"));
// // console.log(favorite);
// // console.log(typeof favorite);

// // if (favorite === 23) {
// //     console.log("Cool! 23 is an amazing number!");
// //  } else if (favorite === 7) {
// //     console.log("7 is also a cool number");
// //  } else if (favorite === 9) {
// //     console.log("9 is also a cool number");
// //  } else {
// //     console.log("Number is not 23 or 7 or 9");
// //     }

// // if (favorite !== 23) console.log("Why not 23?");

// // // Logical Operators

// // const hasDriversLicense = true; // A
// // const hasGoodVision = true; // B

// // console.log(`AND OPERATOR: ${hasDriversLicense && hasGoodVision}`);
// // console.log(`OR OPERATOR: ${hasDriversLicense || hasGoodVision}`);
// // console.log(`NOT OPERATOR: ${!hasDriversLicense}`);

// // const isTired = false; // C
// // console.log(hasDriversLicense && hasGoodVision && isTired);

// // if (hasDriversLicense && hasGoodVision && !isTired) {
// //     console.log("Allen is able to drive!");
// // } else {
// //     console.log("Someone else should drive...");
// // }

// // // Test with different values

// // let age = 25;
// // let hasID = true;
// // let isVIP = false;

// // if ((age >= 21 && hasID) || isVIP) {
// //   console.log("✅ Welcome to the club!");
// // } else {
// //   console.log("❌ Sorry, you cannot enter.");
// // }

// // age = 25; hasID = true; isVIP = false;
// // console.log((age >= 21 && hasID) || isVIP ? "✅ Welcome to the club!" : "❌ Sorry, you cannot enter.");

// // age = 19; hasID = true; isVIP = true;
// // console.log((age >= 21 && hasID) || isVIP ? "✅ Welcome to the club!" : "❌ Sorry, you cannot enter.");

// // age = 19; hasID = false; isVIP = false;
// // console.log((age >= 21 && hasID) || isVIP ? "✅ Welcome to the club!" : "❌ Sorry, you cannot enter.");


// // The Conditional (Ternary) Operator

// const age = 23;

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// // if else statement
// let drink2 
// if (age >=18) {
//     drink2 = "wine 🍷";
// } else {
//     drink2 = "water 💧";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// Coding Challenge #4

// Test different bills
const bills = [275, 40, 430];

for (let bill of bills) {

  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}
