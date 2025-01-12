// Code your solutions in this file

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Экспорт функции, если нужно
  module.exports = { writeCards, countDown };


  function writeCards(names, gift) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
  }
  
  module.exports = { writeCards };  // Экспорт функции