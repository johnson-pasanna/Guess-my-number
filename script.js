// 'use strict';
// // this is button element from html without any value.
// // const guessedValue = document.querySelector('.again');
// // // this is button element from html with the button value.
// // const guessedValue2 = document.querySelector('.message').textContent;

// // console.log(guessedValue);
// // console.log(guessedValue2);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
// let score = 20;
// let highScore = 0;

// if (score > highScore) {
//   highScore = score;
//   document.querySelector('.highscore').textContent = highScore;
// }

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     console.log((document.querySelector('.message').textContent = 'no number'));
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Answer';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').textContent = secretNumber;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Guess Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Guess too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(secretNumber);
//   document.querySelector('body').style.backgroundColor = 'rgb(34,34,34)';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.message').textContent = 'Start Guessing';
//   document.querySelector('.guess').value = '';
// });

console.log(document.querySelector('.message').textContent);
