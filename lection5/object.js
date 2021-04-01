let person = {
  name:"John",
  age:50,
  city:"New York"
};

// to array
let myArray = Object.values(person);
console.log(myArray); // [ "John", 50, "New York" ]

// to string
let myString = JSON.stringify(person);
console.log(typeof myString); // string 
 // {"name":"John","age":50,"city":"New York"}

// get, set
let person1 = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  }
};
console.log("read >>", person1.lang); // на чтение вернет значение language

person1.lang = "fr";
console.log("read after set >>", person1.lang); // на чтение вернет значение language

// https://learn.javascript.ru/descriptors-getters-setters#deskriptory-v-primerah

/* 
writable : true // Значение свойства можно изменить
enumerable : true // Свойство можно перечислить
configurable : true // Свойство можно перенастроить
writable : false // Значение свойства не может быть изменено
enumerable : false // Свойство нельзя перечислить
configurable : false // Свойство нельзя перенастроить
 */