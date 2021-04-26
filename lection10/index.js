class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  getFullName() {
    return this.firstName + ' ' + this.lastName
  }
}

let person = new Person('Alex', 'Kelle');
console.log(person);

class User extends Person {
  constructor(firstName, lastName, email, password) {
    super(firstName, lastName)
    this.email = email
    this.password = password
   }
   getEmail() {
     return this.email
   }
   getPassword() {
     return this.password
   }
};

class User2 extends User{};

function App() {
  let user = new User('Ivan', 
                      'Ivanov', 
                      'ivan@ivanov.com', 
                      'L1veCool')
  console.log(user.getFullName());
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.email);
  console.log(user.password);
  console.log(user);
}

App();

console.log(typeof Person);

function Person1(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
console.log(new Person1());
Person1.prototype.getFullName = function () { 
  return this.firstName + ' ' + this.lastName
}

function User1(firstName, lastName, email, password) {
  // call super constructor:
  Person1.call(this, firstName, lastName)
  this.email = email
  this.password = password
}

User1.prototype = Object.create(Person1.prototype);

User1.prototype.setEmail = function(email) {
  this.email = email
};

User1.prototype.getEmail = function() {
  return this.email
};

let user1 = new User1();

user1.setEmail('vasya@vasilev.com');
console.log(user1);

User1.prototype.getFullName = function () { 
  return 'User Name: ' + 
         this.firstName + ' ' + 
         this.lastName
};

user1.firstName = 'Ivan';
user1.lastName = 'Vasilev';
console.log(user1.getFullName());

let person1 = new Person1();
console.log(person1.getFullName());


Person1.prototype.setGender = function (gender) { 
  this.gender = gender;
};

Person1.prototype.getGender = function () { 
  return this.gender;
};

person1.setGender('male');
console.log(person1.getGender());

user1.setGender('female');
console.log(user1.getGender());
