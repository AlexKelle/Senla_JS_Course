let num = 'string';
function checkNumber () {
  let localNum = num;
  if (typeof localNum === 'number') {
    return 'it is number';
  }
  return 'not a number';
};
console.log(checkNumber());


function checkNumber1 (num) {
  let localNum = num;
  if (typeof localNum === 'number') {
    return 'it is number';
  }
  return 'not a number';
};
let num1 = 5;
console.log(checkNumber1(num1));

const obj = {
  user: {
    name: 'Steve',
    age: 18
  }
};

// ob?.user?.name то делаем что-нибудь