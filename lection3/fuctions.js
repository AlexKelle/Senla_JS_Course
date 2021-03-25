// function declaration

// multiply();
// multiply();

const y = {
  key: 'value',
};

function multiply (o1, o2) {
  let x;
/*   console.log(y)
  console.log(o1 * o2); */
  return o1 *o2;
}
multiply();


// function expression
let sum = function () {
  console.log('new expression');
};
sum();

// Self invoked function
(function (){
  console.log('Self invoked function');
})();

// arrow function
let hello = () => {
  return "Hello World!";
};
// hello = () => "Hello World!";

let result = multiply(3, 5);
// console.log(result);

// console.log(multiply);


// параметры по умолчанию
function subtractionIf (x, y){
  if (x === undefined) {
    return new Error ('x не передан');
  }
  if (y === undefined) {
    return new Error ('y не передан');
  }
  let a = x;
  let b = y;
  return a - b;
}

// параметры по умолчанию
function subtraction (x = 2, y = 1, ...arg){
  let a = x;
  let b = y;
/*   console.log(arg.length);
  console.log(arg); */
  let result = a - b
  return result;
}
let subtractionResult = subtraction();
let subtractionResultWithArgs = subtraction(5, 2, 4, 8, 6);

console.log(subtractionResult);

// на самостоятельное изучение деструктуризация

// Function constructor
const sum1 = new Function('a = 1', 'b = 2', 'return a + b');

const user = {
  name: 'Alex',
  age: 36
};

let {name, age} = user;

console.log(name);
console.log(age);
console.log('sum1: ', sum1());
