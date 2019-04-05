var todos = ["Buy New Turtle"];

window.setTimeout(function() {
var input = prompt("What would you like to do?");

while(input !== "quit") {
  // handle input
  if (input === "list") {
    listTodos();
  }else if (input === "new") {
    addTodo();
  } else if(input === "delete"){
    deleteTodo();
  }
  input = prompt("What would you like to do?");
  // ask again for new input
}
console.log("Ok, You Quit The App");

function listTodos(){
  console.log("**********");
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add to todos array
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo(){
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  todos.splice(index,1);
  console.log("Deleted Todo");
}
}, 500);
