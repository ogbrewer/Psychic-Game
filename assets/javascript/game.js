var winsTally = document.getElementById("wins");
var lossesTally = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesleft");
var guessesSofar = document.getElementById("guessesSofar");
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "r", "p", "s"];



document.onkeyup = function (event) {
  if (guessesLeft.textContent > 0) {
    var playerGuess = event.key;


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    if (playerGuess === computerGuess) {
      winsTally.textContent++;
      guessesLeft.textContent = 9;
      guessesSofar.textContent = null;
      alert("right! You win");
    }
    else if ((playerGuess !== computerGuess) && (guessesLeft.textContent > 1)) {
      guessesLeft.textContent--;
      alert("Wrong");
      document.getElementById("guessesSofar").innerHTML = document.getElementById("guessesSofar").innerHTML + playerGuess;
    }
    else if ((playerGuess !== computerGuess) && (guessesLeft.textContent == 1)) {
      alert("you lose");
      lossesTally.textContent++;
      guessesLeft.textContent = 9;
      guessesSofar.textContent = null;
    }


  }
};