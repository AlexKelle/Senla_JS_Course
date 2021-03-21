let day, text;

 switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(day);

switch (new Date().getDay()) {
  case 6:
    text = "Сегодня суббота";
    break; 
  case 0:
    text = "Сегодня воскресенье";
    break; 
  default: 
    text = "С нетерпением жду выходных";
}

console.log(text);

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Скоро выходные";
    break; 
  case 0:
  case 6:
    text = "Сейчас выходные";
    break;
  default: 
    text = "С нетерпением жду выходных";
}