window.document.getElementById('header');

// windowSize
const w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const h = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

const wh = document.getElementById('widowSize');
wh.innerHTML = `Browser inner window width: ${w}, height: ${h}.`;

//screenSize
document.getElementById('screenWidth').innerHTML =`Ширина экрана: ${screen.width}`;
document.getElementById('screenAvailWidth').innerHTML =`Ширина экрана: ${screen.availWidth}`;
document.getElementById('screenHeight').innerHTML =`Высота экрана: ${screen.height}`;
document.getElementById('screenAvailHeight').innerHTML =`Высота экрана: ${screen.availHeight}`;

// location
document.getElementById('locationHostName').innerHTML = `Имя хоста страницы: ${window.location.hostname}`;
document.getElementById('locationHref').innerHTML = `Расположение страницы: ${window.location.href}`;
document.getElementById('locationPathName').innerHTML = `Путь к странице: ${window.location.pathname}`;
document.getElementById('locationProtocol').innerHTML = `Протокол страницы : ${window.location.protocol}`;

// history
/**
 * Некоторые методы:
history.back() - то же, что и возврат в браузере
history.forward() - то же самое, что и щелчок вперед в браузере
 */

// navigator
document.getElementById('navCookie').
innerHTML = `Навигатор файлы cookie включены  : ${navigator.cookieEnabled}`;

document.getElementById('navAppName').
innerHTML = `Навигатор имя приложения браузера: ${navigator.appName}`;

document.getElementById('navAppCodeName').
innerHTML = `Навигатор кодовое имя приложения браузера: ${navigator.appCodeName}`;

document.getElementById('navProduct').
innerHTML = `Навигатор продукт: ${navigator.product}`;

document.getElementById('navAppVersion').
innerHTML = `${navigator.appVersion}`;

function getLocation() {
  console.log(navigator);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    demo.innerHTML = 'Geolocation is not supported by this browser.';
  }
}

function showPosition(position) {
  demo.innerHTML = 'Latitude: ' + position.coords.latitude + 
  '<br>Longitude: ' + position.coords.longitude;
}

/* // localStorage
localStorage.setItem('name', 'John Doe');
const name = localStorage.getItem('name');
const lStorage = document.getElementById('lStorage');
lStorage.innerHTML = name;
 */
/* // sessionStorage
sessionStorage.setItem('user', '{name: "Alex", age: 36}');
const user = sessionStorage.getItem('user');
const sStorage = document.getElementById('sStorage');
sStorage.innerHTML = user; */