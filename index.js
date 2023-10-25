function writeCards(names, event) {
    const thankYouMessages = names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = { writeCards, countDown };
  