console.log("Part 2 functions is ready");

//
// Functions - Declarations and Expressions
console.log("=== FUNCTIONS ===");

function logger() {
  console.log("My name is Will");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}   

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 2 oranges.`;

const juice1 = fruitProcessor(3, 0);
const juice2 = fruitProcessor(0, 5);
const juice3 = fruitProcessor(2, 3);

// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age1 = calcAge2(2003);
console.log(age1);
console.log(calcAge2(1991));

function introduce(firstName, lastName, age) {
  const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
  return introduction;
}

console.log(introduce("Will Allen", "Cando", 22));
console.log(introduce("Jannah"));

function yearsUntilRetirement(birthYear, firstName) {
  const age = calcAge2(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

/// function scope

const globalVar = "I am global";

function testScope() {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
// console.log(localVar);

// Coding Challenge 1

////////////////////////////////////
// Coding Challenge #1

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
  }
}

// Test Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins, scoreKoalas));

