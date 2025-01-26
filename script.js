'use strict';
// document.querySelector('.message').textContent = '🥳🎊Correct Number';
// document.querySelector('.guess').value = 16;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const guessbutton = document.querySelector('.check');
console.log(guessbutton);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  guessbutton.disabled = false;
  guessbutton.style.cursor = 'pointer';
});
console.log(`outside all ${secretNumber}`);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('⛔No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎊 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    guessbutton.disabled = true;
    guessbutton.style.cursor = 'not-allowed';
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You Lose the Game');

      guessbutton.disabled = true;
      guessbutton.style.cursor = 'not-allowed';
      document.querySelector('.score').textContent = 0;
    }
  }
});
