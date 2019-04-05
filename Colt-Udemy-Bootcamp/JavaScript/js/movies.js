var movies = [
  {
    name: "Shooter",
    rating: 4.6,
    seen: true
  },
  {
    name: "Frozen",
    rating: 4.5,
    seen: false
  },
  {
    name: "Solo: A Star Wars Story",
    rating: 4,
    seen: false
  },
  {
    name: "Coco",
    rating: 4.8,
    seen: true
  }
];



for (var i = 0; i < movies.length; i++){
  buildString(i);
}

function buildString(str){
  var haveSeen;
  if(movies[i].seen == true){
    haveSeen = "You have watched ";
  }else{
    haveSeen = "You have not seen ";
  }
  str = haveSeen + '"' + movies[i].name + '" - ' + movies[i].rating + " stars";
  console.log(str);
}
