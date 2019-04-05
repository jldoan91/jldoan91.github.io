console.log("Print all numbers between -10 and 19");
var a = -10;
while(a <= 19){
  console.log(a);
  a++;
}
console.log("Print all even numbers between 10 and 40");
var b = 10;
while(b <= 40){
  if(b % 2 == 0){
    console.log(b);
  }
  b++
}
console.log("Print all odd numbers between 300 and 333");
var c = 300;
while(c <= 333){
  if(c % 2 == 1){
    console.log(c);
  }
  c++;
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
var d = 5;
while(d <= 50){
  if(d % 5 == 0 && d % 3 == 0){
    console.log(d);
  }
  d++;
}
