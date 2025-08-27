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
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired!`;
  }


}

