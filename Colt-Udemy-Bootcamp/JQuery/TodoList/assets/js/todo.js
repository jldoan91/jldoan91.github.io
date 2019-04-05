// Check off from list
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});
// Click on delete button to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});
// Add a new todo
$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    // Get new todo input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li in the ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();
});
