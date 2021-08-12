'use strict';
alert ('Игровой бот:\r\n\r\n "Загадывание случайного числа от 1 до 100"');
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
isNumber();

const getRandomNumber = function(n, y) {
  return Math.floor(Math.random() * 101);
};

function startBot() {
  const randomNumber = getRandomNumber();
  console.log('randomNumber: ', randomNumber);
  function getQuestion() {
    const questionNumber = +prompt('Угадай число от 1 до 100');
    if (questionNumber === randomNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return getQuestion();
    } else if (questionNumber < randomNumber) {
      alert('Загаданное число меньше');
      return getQuestion();        
    } else if (questionNumber > randomNumber) {
        alert('Загаданное число больше');
        return getQuestion();
    } else if (!isNaN(questionNumber)) {
      alert('Введи число!');
      return getQuestion();
    } else if (questionNumber === null) {
      alert('Игра окончена');
      return getQuestion();
    } 
  }
  getQuestion();
}

startBot();