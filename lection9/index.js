const that = this;
// console.log(that);

function test1 () {
  console.log('>>', this);
};

window.test1();
window.that;


// // Правило объектов для this
// const obj = {
//   getBaseThis: function() {
//     console.log(this);
//   },
//   getArrowThis: () => {
//     console.log(this);
//   }
// };
// obj.getBaseThis();
// obj.getArrowThis();
// 

// // Правило объектов для this
// const newObj = new function() {
//   this.getBaseThis = function() {
//     console.log('getBaseThis', this);
//   },
//   this.getArrowThis = () => {
//     console.log('getArrowThis', this);
//   }
// };

// newObj.getBaseThis();
// newObj.getArrowThis();

// // правило №2
//   setTimeout(function() {
//     console.log('timeout this', this);
//   },500);
//   setTimeout(() => {
//     console.log('timeout arrow this', this);
//   },600);

// const btn = document.querySelector('#click');

// btn.addEventListener('click', function() {
//   console.log('click this', this);
// });
// btn.addEventListener('click', () => {
//   console.log('click arrow this', this);
// });

const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    console.log (this.firstName, this.lastName);
  },
  place: function(city, country) {
    console.log (this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country);
  }
}
person.fullName();

const person1 = {
  firstName:'Lui',
  lastName: 'Doe'
}

const person2 = {
  firstName:'Mary',
  lastName: 'Doe'
}
person.fullName.call(person1);
person.fullName.call(person2);
person.place.call(person1, 'Warsaw', 'Poland');
person.place.apply(person1, ['Warsaw', 'Poland']);

// bind()
const newFullName = person.fullName.bind(person1);
console.log(newFullName);
newFullName();