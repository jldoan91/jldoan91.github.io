// create secretNumber
var secretNumber = 7;
// ask user for guess
var guess = parseInt(prompt("Guess a number"));
// check if guess is right
if(guess === secretNumber){
  alert("You got it right!");
}
// otherwise, check if higher
else if(guess > secretNumber){
  alert("Too high, Guess again!");
}
// otherwise, check if lower
else {
  alert("Too low, Guess again!");
}
