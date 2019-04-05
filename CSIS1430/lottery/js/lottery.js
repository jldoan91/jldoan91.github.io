var userSelection = prompt("Enter a number", "");
var userNum = parseInt(userSelection);

var lottArry = Array.apply(null, Array(userNum)).map(function(item, index){
  return Math.floor(Math.random() * 99) + 1;
})

var i = 0;
var result = "";

while (lottArry[i]) {
  result += lottArry[i] + " ";
  i++;
}

document.getElementById('response').innerHTML = '<h1>Your lottery numbers are!</h1><br>' + '<h3>' + result + '</h3>';
