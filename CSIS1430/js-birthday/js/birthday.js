var username = prompt("Enter your name:","");
if (confirm("Your name is " + username)) {
  document.write("<h1>Hello, " + username + "!</h1>");
} else {
  document.write("<h1> Hello, world!</h1>");
}

var age = prompt("Enter your age:","");
if (confirm("Your age is " + age)) {
  document.write("<h1>You are " + age + " years old!</h1>");
} else {
  document.write("<h1> Hello, world!</h1>");
}
