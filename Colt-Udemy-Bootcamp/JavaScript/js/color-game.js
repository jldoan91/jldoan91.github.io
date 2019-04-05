var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init(){
  // mode buttons event listeners
  for(var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function(){
      mode[0].classList.remove("active");
      mode[1].classList.remove("active");
      this.classList.add("active");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }

  for(var i = 0; i < squares.length; i++){
    // add event listener to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare clicked color to pickedColor
      if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        resetBtn.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      }else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
      }
    });
  }

  reset();
}

function reset(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  resetBtn.textContent = "New Colors";
  // change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", reset);

colorDisplay.textContent = pickedColor;

function changeColors(color){
  //loop through all squares
  for(var i = 0; i < squares.length; i++){
    // change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array
  var arr = [];
  // repeat num times
  for(var i = 0; i < num; i++){
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr;
}

function randomColor(){
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
