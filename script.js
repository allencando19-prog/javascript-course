'use strict';

// Game Development Hour 1 - Game Foundation & DOM Basics

const messageEl = document.querySelector('.message');
// console.log(messageEl);

messageEl.textContent = 'Hello From Javascript';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

// Game starts variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your secret number is:', secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

/////////////////////////////////////

document.querySelector('.check').addEventListener('click', function () {
  console.log('Check Button Clicked!');
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);
  if (guess === secretNumber) {
    console.log('Correct Guess!!');
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too High';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    console.log('Too Low!');
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
