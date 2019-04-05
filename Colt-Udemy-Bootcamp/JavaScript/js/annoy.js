var question = prompt("Are we there yet?");

var answer = question.toLowerCase();

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1 && answer.indexOf("ya") === -1 && answer.indexOf("yarp") === -1){
  answer = prompt("Are we there yet?");
}

alert("YAY, WE MADE IT!");
