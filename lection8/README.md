### Объектная модель браузера (BOM) 
позволяет JavaScript "общаться" с браузером.
Объект window поддерживается всеми браузерами. Он представляет собой окно браузера.
Все глобальные объекты, функции и переменные JavaScript автоматически становятся членами объекта window.
Глобальные переменные - это свойства объекта window.
Глобальные функции - это методы объекта window.
Даже объект документа (HTML DOM) является свойством объекта window.
### Размер window
Для определения размера окна браузера можно использовать два свойства window.
Оба свойства возвращают размеры в пикселях:
window.innerHeight - внутренняя высота окна браузера (в пикселях)
window.innerWidth - внутренняя ширина окна браузера (в пикселях)
*** 
Окно браузера (область просмотра) НЕ включает панели инструментов и полосы прокрутки.
*** 
Для Internet Explorer 8, 7, 6, 5:
document.documentElement.clientHeight
document.documentElement.clientWidth
или
document.body.clientHeight
document.body.clientWidth
* Некоторые другие методы:
window.open() - открыть новое окно
window.close() - закрыть текущее окно
window.moveTo() - переместить текущее окно
window.resizeTo() - изменить размер текущего окна

### Объект window.screen 
  может быть записан без префикса window.
Свойства:
screen.width / screen.availWidth
возвращает ширину экрана посетителя в пикселях минус интерфейс функции, такие как панель задач Window.

screen.height / screen.availWidth
возвращает высоту экрана посетителя в пикселях минус интерфейс функции , такие как панель задач Window.
screen.colorDepth / screen.pixelDepth

### Объект window.location может быть записан без префикса window.
можно использовать для получения адреса текущей страницы (URL) и для перенаправления браузера на новую страницу.

Несколько примеров:
window.location.href возвращает href (URL) текущей страницы
window.location.hostname возвращает доменное имя веб хостинга
window.location.pathname возвращает путь и имя файла текущей страницы
window.location.protocol возвращает используемый веб протокол (http: или https:)
window.location.assign() загружает новый документ

### Объект window.history может быть записан без префикса window.
Для защиты конфиденциальности пользователей существуют ограничения на доступ JavaScript к этому объекту.

Некоторые методы:
history.back() - то же, что и возврат в браузере
history.forward() - то же самое, что и щелчок вперед в браузере

### Объект window.navigator содержит информацию о браузере посетителя.
* Свойство cookieEnabled возвращает true, если включены cookie, в противном случае false
* Свойство appName возвращает имя приложения в браузере
* Свойство appCodeName возвращает имя кода приложения в браузер
* Свойство product возвращает имя продукта браузера движка
* Свойство appVersion возвращает информацию о версии браузера

***
## API означает Application Programming Interface.

### API браузера 
встроены в веб-браузер и способны использовать данные браузера и компьютерной среды для осуществления более сложных действий с этими данными
Веб API - это интерфейс прикладного программирования для Интернета.
API браузера могут расширить функциональность веб браузера.
Серверный API может расширить функциональность веб сервера.

### Сторонние API
Сторонние API не встроены в ваш браузер.
Проверьте, поддерживается ли геолокация
* Если поддерживается, запустите метод getCurrentPosition(). 
* Если нет, отобразить сообщение пользователю
* Если метод getCurrentPosition() успешен, он возвращает объект координат функции, указанной в параметре (showPosition).
Функция showPosition() выводит широту и долготу.
Чтобы использовать API, вам необходимо загрузить код из Интернета.
Примеры:

YouTube API - позволяет отображать видео на веб сайте.
Twitter API - позволяет отображать твиты на веб сайте.
Facebook API - позволяет отображать информацию Facebook на веб сайте.

### Веб API истории 
предоставляет простые методы доступа к объекту windows.history.

Объект window.history содержит URL адреса (веб сайты), посещенные пользователем.
* Метод back() загружает предыдущий URL адрес в список windows.history.
Это то же самое, что щелкнуть "стрелку назад" в браузере.
* Метод go() загружает конкретный URL из списка истории
* API веб хранилище - 
это простой синтаксис для хранения и извлечения данных в браузере

### Объект localStorage
Объект localStorage обеспечивает доступ к локальному хранилищу для определенного веб сайта. Он позволяет хранить, читать, добавлять, изменять и удалять элементы данных для домена.
Данные хранятся без срока действия и не будут удалены при закрытии браузера.
Данные будут доступны за дни, недели и годы.

* Метод localStorage.setItem() сохраняет элемент данных в хранилище.

* Метод localStorage.getItem() извлекает элемент данных из хранилища.

### sessionStorage
Метод sessionStorage.setItem() сохраняет элемент данных из хранилища.
