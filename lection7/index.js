let elem1 = document.querySelector('.yellow');
let elem2 = document.querySelector('.green');
let elem3 = document.querySelector('.red');

elem1.addEventListener('click', (e) => {
  console.log(1);
  console.log('currentTarget >>', e.currentTarget);
  console.log('target >>', e.target);
}, true);

elem2.addEventListener('click', (e) => {
  console.log(2);
  console.log('currentTarget >>', e.currentTarget);
  console.log('target >>', e.target);
});

elem3.addEventListener('click', (e) => {
  console.log(3);
  console.log('currentTarget >>', e.currentTarget);
  console.log('target >>', e.target);
});
// elem1.onclik = () => {};

// ссылка на документ по методу closest
// https://developer.mozilla.org/ru/docs/Web/API/Element/closest

let ul = document.querySelector('ul');
ul.addEventListener('click', (e) => {
  // console.log(e.target);
  console.log(e.target.closest('li'));
  // (e.target.tagName === 'LI') && 
  console.log(e.target.tagName);
  e.target.closest('li') && 
  console.log(e.target);
  e.target.innerHTML =  e.target.innerHTML ** 2;
});

let addLiBtn = document.querySelector('#addLiBtn');
addLiBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = '42';
  ul.appendChild(li);
});