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
    const questionNumber = prompt('Угадай число от 1 до 100');
    if (questionNumber === null) {
      
      return alert('Игра окончена');
    } else if (parseInt(questionNumber) === randomNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return location.reload();
    } else if (parseInt(questionNumber) > randomNumber) {
      alert('Загаданное число меньше');
      return getQuestion();        
    } else if (parseInt(questionNumber) < randomNumber) {
      alert('Загаданное число больше');
      return getQuestion();
    } else if (!isNaN(questionNumber)) {
      alert('Введи число!');
      return getQuestion();
    } 
  }
  getQuestion();
}

startBot();