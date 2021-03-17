let user = {
  name: 'Erik',
  age: 17,
  work: 'student'
};

let key = 'name';

user.info = 'some value';

// user.money.cash = 150; // error money is undefined
user.money = {};
user.money.cash = 150;

console.log(user['info']);
console.log(user[key]);
console.log(user.money.cash);