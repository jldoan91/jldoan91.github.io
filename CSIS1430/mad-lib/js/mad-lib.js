function madLib(){
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var verb1 = document.getElementById("verb1").value;
  var verb2 = document.getElementById("verb2").value;
  var adj1 = document.getElementById("adj1").value;
  var adj2 = document.getElementById("adj2").value;
  document.getElementById("story").innerHTML = 'Blue beard the pirate is known to his friends as Jimmy. Any time Jimmy would arrive in a town everyone would ' + verb1 +' and scream “' + verb1 + ' or he’ll ' + verb2 + ' you in a ' + noun1 + '”. Everyone was afraid of him and his ' + adj1 + ' pet parrot, named Sophie. He didn’t want to be feared, he didn\'t' + verb2 + ' anyone in a ' + noun1 + ' ever. Jimmy took his ' + noun2 + ' down and put up a ' + adj2 + ' one instead to help people not ' + verb1 + ' when he first got to town. Eventually everyone learned that the ' + noun1 + ' was a misunderstanding from when he shoved his little brother into one.';
}

document.getElementById('submit').addEventListener('click', function(event){
  madLib();
});

document.getElementById('reset').addEventListener('click', function(event){
  window.location.reload();
});
