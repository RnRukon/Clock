
var hour = new Date().getHours(); 
  
var hoursConds;

if (hour < 10) {
  hoursConds ="0"+ hour;
} else {
  hoursConds = hour;
}
document.querySelector(".hours").innerHTML = hoursConds;



var minuts = new Date().getMinutes(); 
  
var minutsCount;

if (minuts < 10) {
    minutsCount ="0"+ minuts;
} else {
    minutsCount =minuts;
}
document.querySelector(".minuts").innerHTML =  minutsCount;



var seconds = new Date().getSeconds(); 
  
var secondsCount;

if (seconds < 10) {
    secondsCount ="0"+ seconds;
} else {
    secondsCount =seconds;
}
document.querySelector(".seconds").innerHTML =  secondsCount;





function secondsChange(){

var hour = new Date().getHours(); 
  
var hoursConds;

if (hour < 10) {
  hoursConds ="0"+ hour;
} else {
  hoursConds = hour;
}
document.querySelector(".hours").innerHTML = hoursConds;



var minuts = new Date().getMinutes(); 
  
var minutsCount;

if (minuts < 10) {
    minutsCount ="0"+ minuts;
} else {
    minutsCount =minuts;
}
document.querySelector(".minuts").innerHTML = minutsCount;



var seconds = new Date().getSeconds(); 
  
var secondsCount;

if (seconds < 10) {
    secondsCount ="0"+ seconds;
} else {
    secondsCount =seconds;
}
document.querySelector(".seconds").innerHTML = secondsCount;

}
setInterval(secondsChange,1000);



var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sun";
    break;
  case 1:
    day = "Mon";
    break;
  case 2:
    day = "Tue";
    break;
  case 3:
    day = "Wed";
    break;
  case 4:
    day = "Thu";
    break;
  case 5:
    day = "Fri";
    break;
  case  6:
    day = "Sat";
}
document.querySelector(".week").innerHTML =day;

document.querySelector(".date").innerHTML = new Date().getDate();