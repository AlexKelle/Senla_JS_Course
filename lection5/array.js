const years = [2000, 2001, 2002];
// console.log(years.0); // error
// console.log(years[0]);
// console.log('length: ',years.length);

years.length = 5;
years.length = 2;
// console.log(years);

// push () Добавление элемента в конец массива, возвращает новую длинну массива
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const pushed = fruits.push("Kiwi"); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// pop() Удаление последнего элемента массива, возвращает его значение
fruits.pop(); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
// console.log(fruits);

// shift() Удаление первого элемента массива
fruits.shift(); // Удаляет первый элемент "Banana" из fruits

// unshift() Добавление элемента в начало массива
fruits.unshift("Lemon");  // [ 'Lemon', 'Orange', 'Apple', 'Mango' ]

// Удаление элемента с определённым индексом splice(pos, 1)
fruits.splice(0, 1);  // Удаляет первый элемент фруктов

fruits.splice(2, 0, "Melon", "Watermelon"); // Вставляет 2 элемента
// console.log(fruits);

// Поиск номера элемента в массиве .indexOf('Банан');
fruits.indexOf("Melon");
// console.log(fruits.indexOf("Melon"));

// concat
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
// console.log(array3);

//includes
const array4 = [1, 2, 3];
// console.log(array4.includes(2));
// expected output: true

//join
const elements = ["Fire", "Air", "Water"];
console.log("1: ", elements.join());
// expected output: "Fire,Air,Water"
console.log(" >>", elements.join(""));
// expected output: "FireAirWater"
console.log("- >>: ", elements.join("-"));
// expected output: "Fire-Air-Water"

const monthNames = ["Янв", "Фев", "Мар", "Апр"];
const myString = monthNames.toString(); // присваивает 'Янв,Фев,Мар,Апр'.
// console.log(myString);

//filter
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result = words.filter(word => word.length > 6);
// console.log(result);

// map
const numbers = [1, 4, 9];
const doubles = numbers.map(function(num) {
  return num * 2;
});

let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, elem) => [...acc, ...elem], []);
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let originFlat = nested.flat();
// console.log(originFlat);

let users = [
  { id: 11, name: "Adam", age: 23, group: "editor" },
  { id: 47, name: "John", age: 28, group: "admin" },
  { id: 85, name: "William", age: 34, group: "editor" },
  { id: 97, name: "Oliver", age: 28, group: "admin" }
];

let groupByAge = users.reduce((acc, it) =>
  ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
{});
// groupByAge is {23: 1, 28: 2, 34: 1}