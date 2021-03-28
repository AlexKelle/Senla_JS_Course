document.getElementById("demo").innerHTML = "Hello World!";
let paragraphs = document.getElementsByTagName("p");
let boxRed = document.getElementsByClassName("box_red");
let lastLi = document.querySelectorAll('ul > li:last-child');
lastLi.innerHTML = "new three";
document.getElementsByTagName("div")[0].innerHTML = "live collection";

paragraphs[0].style.color = "blue";

// element.attribute = new value
//element.setAttribute(attribute, value) 

console.log(paragraphs);
console.log(lastLi);

/*
 document.createElement(element) *** Создать элемент HTML
document.removeChild(element) *** Удалить элемент HTML
document.appendChild(element) *** Добавить элемент HTML
document.replaceChild(new, old) *** Заменить элемент HTML
document.write(text) *** Запись в выходной поток HTML 
*/

document.getElementById("myBtn").addEventListener("click", function(){alert("You click me"); });
