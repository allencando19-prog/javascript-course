// // // // // // // // // console.log("Part 2 functions is ready");

// // // // // // // // // //
// // // // // // // // // // Functions - Declarations and Expressions
// // // // // // // // // console.log("=== FUNCTIONS ===");

// // // // // // // // // function logger() {
// // // // // // // // //   console.log("My name is Will");
// // // // // // // // // }

// // // // // // // // // logger();
// // // // // // // // // logger();
// // // // // // // // // logger();

// // // // // // // // // function fruitProcessor(apples, oranges) {
// // // // // // // // //   console.log(apples, oranges);
// // // // // // // // //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // // // // // //   return juice;
// // // // // // // // // }   

// // // // // // // // // const appleJuice = fruitProcessor(5, 0);
// // // // // // // // // console.log(appleJuice);

// // // // // // // // // const appleOrangeJuice = fruitProcessor(2, 4);
// // // // // // // // // console.log(appleOrangeJuice);

// // // // // // // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // // // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // // // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // // // // // // // const juice1 = fruitProcessor(3, 0);
// // // // // // // // // const juice2 = fruitProcessor(0, 5);
// // // // // // // // // const juice3 = fruitProcessor(2, 3);

// // // // // // // // // // function expression
// // // // // // // // // const calcAge2 = function (birthYear) {
// // // // // // // // //   return 2025 - birthYear;
// // // // // // // // // };

// // // // // // // // // const age1 = calcAge2(2003);
// // // // // // // // // console.log(age1);
// // // // // // // // // console.log(calcAge2(1991));

// // // // // // // // // function introduce(firstName, lastName, age) {
// // // // // // // // //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// // // // // // // // //   return introduction;
// // // // // // // // // }

// // // // // // // // // console.log(introduce("Will Allen", "Cando", 22));
// // // // // // // // // console.log(introduce("Jannah"));

// // // // // // // // // function yearsUntilRetirement(birthYear, firstName) {
// // // // // // // // //   const age = calcAge2(birthYear);
// // // // // // // // //   const retirement = 65 - age;

// // // // // // // // //   if (retirement > 0) {
// // // // // // // // //     return `${firstName} retires in ${retirement} years`;
// // // // // // // // //   } else {
// // // // // // // // //     return `${firstName} has already retired!`;
// // // // // // // // //   }
// // // // // // // // // }
// // // // // // // // // console.log(yearsUntilRetirement(1991, "Jonas"));
// // // // // // // // // console.log(yearsUntilRetirement(1950, "Mike"));

// // // // // // // // // /// function scope

// // // // // // // // // const globalVar = "I am global";

// // // // // // // // // function testScope() {
// // // // // // // // //     const localVar = "I am local";
// // // // // // // // //     console.log(globalVar);
// // // // // // // // //     console.log(localVar);
// // // // // // // // // }

// // // // // // // // // testScope();
// // // // // // // // // console.log(globalVar);
// // // // // // // // // // console.log(localVar);

// // // // // // // // // // Coding Challenge 1

// // // // // // // // // ////////////////////////////////////
// // // // // // // // // // Coding Challenge #1

// // // // // // // // // function calcAverage(score1, score2, score3) {
// // // // // // // // //   return (score1 + score2 + score3) / 3;
// // // // // // // // // }
// // // // // // // // // function checkWinner(avgDolphins, avgKoalas) {
// // // // // // // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // // // // // // //     return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
// // // // // // // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // // // // // // //     return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
// // // // // // // // //   } else {
// // // // // // // // //     return `No team wins! Dolphins: ${avgDolphins.toFixed(1)}, Koalas: ${avgKoalas.toFixed(1)}`;
// // // // // // // // //   }
// // // // // // // // // }

// // // // // // // // // // Test Data 1
// // // // // // // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // // // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // // // // // Test Data 2
// // // // // // // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // // // // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // // // // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // // // // const grades = [85, 92, 78, 96, 88];
// // // // // // // // console.log(grades);
 
 
// // // // // // // // const friends = ["Jay", "Steven", "Peter"];
// // // // // // // // console.log(friends);
 
// // // // // // // // const mixed = ["Jonas", 27, true, friends];
// // // // // // // // console.log(mixed);
 
// // // // // // // // const years = new Array(1991, 1984, 2008, 2020);
// // // // // // // // console.log(years);
 
// // // // // // // // // Accessing Array Elements
// // // // // // // // console.log(friends[0]);
// // // // // // // // console.log(friends[1]);
// // // // // // // // console.log(friends[2]);
// // // // // // // // console.log(friends[4]);
 
// // // // // // // // // access the length
// // // // // // // // console.log(friends.length);
 
// // // // // // // // friends[0] = "Page";
// // // // // // // // console.log(friends);
 
// // // // // // // // const calcAge = function (birthYear) {
// // // // // // // //   return 2037 - birthYear;
// // // // // // // // };
 
// // // // // // // // const ages = [calcAge(1991), calcAge(1967), calcAge(2002)];
// // // // // // // // console.log(ages);
 
// // // // // // // // const newLength = friends.push("John");
 
// // // // // // // // friends.unshift("Will");
// // // // // // // // console.log(friends);

// // // // // // // // // removing elements
// // // // // // // // const popped = friends.pop();
// // // // // // // // console.log(popped);
// // // // // // // // console.log(friends);

// // // // // // // // const shifted = friends.shift();
// // // // // // // // console.log(shifted);
// // // // // // // // console.log(friends);

// // // // // // // // // finding an element

// // // // // // // // console.log(friends.indexOf("Steven"));
// // // // // // // // console.log(friends.indexOf("Bob"));

// // // // // // // // // includes
// // // // // // // // console.log(friends.includes("Steven"));
// // // // // // // // console.log(friends.includes("Bob"));

// // // // // // // // // Array Iteration

// // // // // // // // const friends2 = ["Jay", "Steven", "Peter"];
// // // // // // // // for (let i = 0; i < friends.length; i++) {
// // // // // // // //   console.log(`Hello, ${friends2[i]}!`);
// // // // // // // // }

// // // // // // // // friends.forEach(function (friend, index) {
// // // // // // // //   console.log(`${index + 1}${friend}!`);
// // // // // // // // });

// // // // // // // // friends.forEach ((friend, index) => {
// // // // // // // //     console.log(`${index + 1}: ${friend}`);
// // // // // // // //   });

// // // // // // // //   // practical example
// // // // // // // //   const grades2 = [85, 92, 78, 96, 88, 74];
// // // // // // // //   let total = 0;

// // // // // // // //   for (let i = 0; i < grades2.length; i++) {
// // // // // // // //     total += grades2[i];
// // // // // // // //   }

// // // // // // // // const average = total / grades2.length;
// // // // // // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // // // // // let passedCount = 0;
// // // // // // // // grades2.forEach((grade) => {
// // // // // // // //   if (grade >= 70) {
// // // // // // // //     passedCount++;
// // // // // // // //   }
// // // // // // // // });
// // // // // // // // console.log (`${passedCount} out of ${grades2.length} students passed the exam.`);


// // // // // // // ////////////////////////////////////
// // // // // // // // Coding Challenge #2 - Student Grade Manager

// // // // // // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // // // // function calculateAverage(grades) {
// // // // // // //   let sum = 0;
// // // // // // //   for (let i = 0; i < grades.length; i++) {
// // // // // // //     sum += grades[i];
// // // // // // //   }
// // // // // // //   return sum / grades.length;
// // // // // // // }

// // // // // // // function findHighestGrade(grades) {
// // // // // // //   let highest = grades[0];
// // // // // // //   for (let i = 1; i < grades.length; i++) {
// // // // // // //     if (grades[i] > highest) {
// // // // // // //       highest = grades[i];
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return highest;
// // // // // // // }

// // // // // // // function findLowestGrade(grades) {
// // // // // // //   let lowest = grades[0];
// // // // // // //   for (let i = 1; i < grades.length; i++) {
// // // // // // //     if (grades[i] < lowest) {
// // // // // // //       lowest = grades[i];
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return lowest;
// // // // // // // }

// // // // // // // function countPassing(grades, passingGrade) {
// // // // // // //   let count = 0;
// // // // // // //   for (let i = 0; i < grades.length; i++) {
// // // // // // //     if (grades[i] >= passingGrade) {
// // // // // // //       count++;
// // // // // // //     }
// // // // // // //   }
// // // // // // //   return count;
// // // // // // // }

// // // // // // // const average = calculateAverage(grades);
// // // // // // // const highest = findHighestGrade(grades);
// // // // // // // const lowest = findLowestGrade(grades);
// // // // // // // const passing = countPassing(grades, 70);

// // // // // // // console.log("=== GRADE REPORT ===");
// // // // // // // console.log(`Average: ${average.toFixed(2)}`);
// // // // // // // console.log(`Highest: ${highest}`);
// // // // // // // console.log(`Lowest: ${lowest}`);
// // // // // // // console.log(`Passing students: ${passing} out of ${grades.length}`);

// // // // // // // Hour 3

// // // // // // const willArray =  [
// // // // // //   "Will", 
// // // // // //   "Cando",
// // // // // //   2025 - 2003,
// // // // // //   "student",
// // // // // //   ["Jay", "Steven", "Peter"],
// // // // // // ];

// // // // // // console.log(willArray[0]);
// // // // // // console.log(willArray[1]);

// // // // // // const willObject = {
// // // // // //   firstName: "Will",
// // // // // //   lastName: "Cando",
// // // // // //   age: 2025 - 2003,
// // // // // //   job: "student",
// // // // // //   friends: ["Jay", "Steven", "Peter"],
// // // // // // };

// // // // // // console.log(willObject);

// // // // // // // Property access methods
// // // // // // // Dot notation
// // // // // // console.log(willObject.firstName);
// // // // // // console.log(willObject.lastName);
// // // // // // console.log(willObject.age);

// // // // // // // Bracket notation
// // // // // // console.log(willObject["firstName"]);
// // // // // // console.log(willObject["lastName"]);
// // // // // // console.log(willObject["age"]);

// // // // // // const nameKey = "Name";
// // // // // // console.log(willObject["first" + nameKey]);
// // // // // // console.log(willObject["last" + nameKey]);

// // // // // // // Modifying existing properties
// // // // // // willObject.job = "programmer";
// // // // // // willObject["age"] = 24;
// // // // // // console.log(willObject);

// // // // // // // add new properties
// // // // // // willObject.location = "Philippines";
// // // // // // willObject["twitter"] = "@allencando19";
// // // // // // willObject.hasDriverLicense = true;
// // // // // // console.log(willObject);

// // // // // // Objects
// // // // // const person = {
// // // // //   firstName: "Will",
// // // // //   age: 22,
// // // // //   occupation: "student",
// // // // // };
// // // // // const car = {
// // // // //   brand: "Toyota",
// // // // //   model: "Corolla",
// // // // //   year: 2020,
// // // // //   color: "black",
// // // // // };

// // // // // // objects can contain arrays, array can contain objects
// // // // // const student = {
// // // // //   name: "Judith",
// // // // //   grades: [95, 98, 100, 96, 98],
// // // // //   address: {
// // // // //     street: "123 Main St",
// // // // //     city: "Taguig",
// // // // //   },
// // // // // };
// // // // // console.log(student.grades[0]);
// // // // // console.log(student.address.city);


// // // // // Object Methods
// // // // const will = {
// // // //   firstName: "Will",
// // // //   lastName: "Cando",
// // // //   birthYear: 2003,
// // // //   job: "student",
// // // //   friends: ["Jay", "Steven", "Peter"],
// // // //   hasDriverLicense: true, 

// // // //   calcAge: function () {
// // // //     return 2025 - this.birthYear;
// // // //   },
// // // // };
// // // // console.log(will.calcAge(2003));

// // // // //'this' keyword
// // // // const willImproved = {
// // // //   firstName: "Will",
// // // //   lastName: "Cando",
// // // //   birthYear: 2001,
// // // //   job: "Programmer",
// // // //   friends: ["Jay", "Steven", "Peter"],
// // // //   hasDriverLicense: true,


// // // //   calcAge: function () {
// // // //     this.age = 2025 - this.birthYear;
// // // //     return this.age;
// // // //   },
// // // //   getSummary: function () {
// // // //     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`;
// // // //   }
// // // // };
// // // // console.log(willImproved.calcAge());
// // // // console.log(willImproved.age);
// // // // console.log(willImproved.getSummary());

// // // ////////////////////////////////////
// // // // Coding Challenge #3 - User Profile System

// // // const user = {
// // //   firstName: "Sarah",
// // //   lastName: "Johnson",
// // //   birthYear: 1995,
// // //   location: "New York",
// // //   interests: ["photography", "travel", "coding"],
// // //   friends: [
// // //     { name: "Michael", status: "active" },
// // //     { name: "Emma", status: "inactive" },
// // //     { name: "David", status: "active" },
// // //   ],
// // //   isActive: true,

// // //   // Calculate age method
// // //   calcAge: function () {
// // //     const currentYear = new Date().getFullYear();
// // //     this.age = currentYear - this.birthYear;
// // //     return this.age;
// // //   },

// // //   // Add friend method
// // //   addFriend: function (name, status = "active") {
// // //     this.friends.push({ name, status });
// // //     return this.friends.length;
// // //   },

// // //   // Get active friends count
// // //   getActiveFriends: function () {
// // //     return this.friends.filter(friend => friend.status === "active").length;
// // //   },

// // //   // Toggle active status
// // //   toggleStatus: function () {
// // //     this.isActive = !this.isActive;
// // //     return this.isActive;
// // //   },

// // //   // Generate profile summary
// // //   getSummary: function () {
// // //     // Ensure age is calculated
// // //     this.calcAge();

// // //     return `
// // // ---- USER PROFILE ----
// // // Name: ${this.firstName} ${this.lastName}
// // // Age: ${this.age}
// // // Location: ${this.location}
// // // Status: ${this.isActive ? "Online ✅" : "Offline ❌"}
// // // Friends: ${this.friends.length} total | ${this.getActiveFriends()} active
// // // Interests: ${this.interests.join(", ")}
// // //     `;
// // //   },
// // // };

// // // // Test your user profile system
// // // console.log(user.getSummary());
// // // user.addFriend("Alex", "active");
// // // user.toggleStatus();
// // // console.log(`\nAfter updates:`);
// // // console.log(user.getSummary());

// // // Hour 4

// // // let method
// // // querySelector - uses css selectors

// // const message = document.querySelector(".message");
// // console.log(message);

// // const button = document.querySelector("#btn");
// // console.log(button);

// // const heading = document.querySelector("h1");
// // console.log(heading);

// // console.log (message.textContent);
// // console.log (button.id);
// // console.log (heading.textContent);

// // // getElementById
// // const buttonbyId = document.getElementById("btn");
// // console.log(buttonById);
// // console.log(buttonByID === button);

// // // querySelectorAll
// // const allParagraphs = document.querySelectorAll("p");
// // console.log(allParagraphs);
// // console.log(allParagraphs[0]);

// // Modifying Elements

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello From JavaScript!";
// console.log(message.textContent);

// //innerHTML
// message.innerHTML = '<strong>Bold text from JS!</strong>';

// // innerText
// console.log(message.innerText);

// // Input Element Values
// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";

// const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";

// const button = document.querySelector("#btn");
// button.style.padding = "20px";
// button.style.borderRadius = "10px";

// // Event Listeners

// button.addEventListener("click", function() {
//   console.log("Button was clicked!");
//   message.textContent = "Button Clicked!";
//   message.style.color = "blue";
// });

// let clickCount = 0;
// button.addEventListener("click", function() {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// const display = document.querySelector(".message");
// input.addEventListener ("input", function() {
//   const userText = input.value;
//   display.textContent = `you typed: ${userText}`;
//   display.style.fontSize = `${userText.length + 10}px`;
// });

// // keydown events - respond to a specific key

// input.addEventListener("keydown", function(event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     display.textContent = `You pressed Enter! Test Was ${input.value}`;
//     input.value = ""; //clear input
//   };
// });





