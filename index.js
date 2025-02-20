// Code your solutions in this file

function countDown(number){
  for (let i = number; i >= 0; i--){
    console.log(i);
  }
}
  
 
  


  function writeCards(names, gift) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${gift} gift!`);
  }
  
  module.exports = { writeCards, countDown };