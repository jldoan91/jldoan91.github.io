var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var count = document.querySelector("#count");
var userCount = document.querySelector("#userCount");
var resetButton = document.querySelector("#reset");

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.style.color = "green";
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.style.color = "green";
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

userCount.addEventListener("change", function(){
  reset();
  count.textContent = userCount.value;
  winningScore = parseInt(userCount.value);
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.removeAttribute("style");
  p2Display.removeAttribute("style");
  gameOver = false;
}
