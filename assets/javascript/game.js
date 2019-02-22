var userText = document.getElementById("userChoice");
      var computerText = document.getElementById("computerChoice");
      var winsTally = document.getElementById("wins");
      var lossesTally = document.getElementById("losses");
      var tiesTally = document.getElementById("ties");
  
  
      // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
      var computerChoices = ["r", "p", "s"];
      
  
      // This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
  
        // Determines which key was pressed.
        var userGuess = event.key;
        userText.textContent = event.key;
  
        // Randomly chooses a choice from the options array. This is the Computer's guess.
      
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerText.textContent = computerGuess;
  
        // Alerts the key the user pressed (userGuess).
        alert("User guess: " + userGuess);
  
        // Alerts the Computer's guess.
        alert("Computer guess: " + computerGuess);
  
        // Wins
        if (userGuess === "p" && computerGuess === "r") {
          winsTally.textContent++;
        }
  
        else if (userGuess === "p" && computerGuess === "s") {
          lossesTally.textContent++;
        }
  
        else if (userGuess === "r" && computerGuess === "p") {
          lossesTally.textContent++;
        }
  
        else if (userGuess === "r" && computerGuess === "s") {
          winsTally.textContent++;
        }
  
        else if (userGuess === "s" && computerGuess === "r") {
          lossesTally.textContent++;
        }
  
        else if (userGuess === "s" && computerGuess === "p") {
          winsTally.textContent++;
        }
  
        else if (userGuess === computerGuess) {
          tiesTally.textContent++;
        }
      };