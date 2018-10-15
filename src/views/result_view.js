const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (){

};
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isNumberPrime = event.detail;
    // console.log("payload received in ResultView:", numberOfWords);

    this.displayResult(isNumberPrime);
  })
};


ResultView.prototype.displayResult = function (result) {
  // result is the result of the count numbers method in word_counter
  const resultElement = document.querySelector("#result");
  if (result == true){
    return resultElement.textContent = "Yes! That's a prime number";
  }
  if (result == false){
    return resultElement.textContent = "No! That is not a prime number"
  }
};

module.exports = ResultView
