// expr1 && expr2  Возвращает операнд expr1, если он может быть преобразован в false; (запинается на первой лжи)
// expr1 || expr2 возвращает операнд expr1, если он может быть преобразован в true; (запинается на первой правде)

let a1 = true && true && true;
let a2 = true && false && true;
let a3 = "Cat" && "Dog"; // "Dog"

let o1 =  true || true;
let o2 = "Cat" || "Dog"; // "Cat"

let b1 = !true;
let b2 = !false;

let c1 = !!"someString";

console.log(c1);