/**
 * for/in - перебирает свойства объекта   
 */

 let person = {fname:"John", lname:"Doe", age:25}; 
 let text = "";

 for (let x in person) {
   text += person[x];
   console.log(text);
 }