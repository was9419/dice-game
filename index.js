const allDice = document.querySelectorAll('img');

allDice.forEach((img) => {
  img.classList.add('myDice');
});
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '/images/dice1.png',
    '/images/dice2.png',
    '/images/dice3.png',
    '/images/dice4.png',
    '/images/dice5.png',
    '/images/dice6.png',
  ];

  const dado1 = document.querySelector('.img1');
  const dado2 = document.querySelector('.img2');
  const result = document.querySelector('h1');

  dado1.id = 'dado1';
  dado2.id = 'dado2';
  result.id = 'result';

  const resultDado1 = Math.floor(Math.random() * images.length);
  const resultDado2 = Math.floor(Math.random() * images.length);  

dado1.src = images[resultDado1];
dado2.src = images[resultDado2];

if (resultDado1 > resultDado2) {
    result.textContent = 'Player 1 Wins!';
  } else if (resultDado2 > resultDado1) {
    result.textContent = 'Player 2 Wins!';
  } else {
    result.textContent = 'Draw!';
  }
});

