let str = 'Hello world';
let newString;
let name = 'Alex';
let age = 18;

newString = str.length;
newString = str[0];
newString = str[str.length - 3];
newString = str.toLocaleUpperCase();
newString = str.indexOf('world');
newString = str.slice(4, 6);
newString = str.slice(4, -1);
newString = str.substr(2,4);

// конкатенация строк
newString = 'Hello' + 'world';
newString = 'My name is '+ name;

// шаблонные строки
newString = `My name is ${name}.`;

//Преобразование в строку
newString = age.toString();

console.log(typeof newString);
