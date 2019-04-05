var randNum = Math.floor(Math.random() * 99) + 1;

function guessCheck() {
  var userGuess = document.getElementById("guess").value;

  for(i = 0; i < 99; i++) {
    if(userGuess == randNum) {
      document.getElementById("response").innerHTML = '<img src="http://the-simple-stuff.com/CSIS1430/guess/img/correct.jpg" alt="Correct Guess">';
      document.getElementById("playAgain").innerHTML = '<input type="reset" onclick="window.location.reload()" name="reset" value="Play Again!">';
      break;
    }else if(userGuess < randNum) {
      document.getElementById("response").innerHTML = '<img src="http://the-simple-stuff.com/CSIS1430/guess/img/lowguess.jpeg" alt="Low Guess">';
    }else {
      document.getElementById("response").innerHTML = '<img src="http://the-simple-stuff.com/CSIS1430/guess/img/highguess.jpeg" alt="High Guess">';
    }
  }
}

var submit = document.getElementById("submit");
submit.addEventListener('click', function(event){
  guessCheck();
});
