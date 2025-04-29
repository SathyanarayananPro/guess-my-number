'use strict';
// document.querySelector('.message').textContent = '🥳🎊Correct Number';
// document.querySelector('.guess').value = 16;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const guessbutton = document.querySelector('.check');

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
  document.querySelector('.guess').disabled = false;
  guessbutton.style.cursor = 'pointer';
});
function guessing() {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔No Number');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎊 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    guessbutton.disabled = true;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.again').focus();

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
      document.querySelector('body').style.backgroundColor = '#b53645';
      guessbutton.disabled = true;
      guessbutton.style.cursor = 'not-allowed';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.again').focus();
    }
  }
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
}
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    guessing();
  } else {
    document.querySelector('.guess').focus();
  }
});
document.querySelector('.check').addEventListener('click', guessing);
document.querySelector('.guess').addEventListener('input', e => {
  const input = e.target;
  let val = input.value.replace(/\D/g, '');
  if (Number(val) <= 0) {
    val = '';
    document.getElementById('errorMsg').style.display = 'block';
  } else if (Number(val) > 20) {
    val = '';

    document.getElementById('errorMsg').style.display = 'block';
  } else {
    document.getElementById('errorMsg').style.display = 'none';
  }
  input.value = val;
});
