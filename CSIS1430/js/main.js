var scrollY = 0;
var distance = 40;
var speed = 24;

function smoothScroll(id) {
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(id).offsetTop;
  var bodyHeight = document.body.offsetHeight;
  var yPos = currentY + window.innerHeight;
  var animator = setTimeout('smoothScroll(\'' + id + '\')',speed);

  if(yPos > bodyHeight) {
    clearTimeout(animator);
  }else {
    if(currentY < targetY - distance) {
      scrollY = currentY + distance;
      window.scroll(0, scrollY);
    }else {
      clearTimeout(animator);
    }
  }
}
