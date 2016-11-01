/*task2*/
/* 
 * 1.Дайте определение NodeJS, используя минимальное число слов.
 * backend-фреймворк, написанный на javascript
 * 
 * 2.Отличия между средами NodeJS и браузера (любого)?
 * код в среде NodeJs выполнятся на стороне сервера, в среде браузера - на стороне клиента
 * 
 * 3. Что такое CLI? Когда лучше использовать CLI, а когда GUI?
 * СLI - командная строка. Хороша для простых запросов (npm, git, запуск служб). GUI - графический интерфейс, хорош для более сложных задач, когда нужно держать во внимании много всего
 * 
 * 4. Какова разница между вызовами:
 *
 * npm install foo -g и npm install foo?
 * npm install foo -g - глобальный тип установки, ставит пакеты в общий каталог lib/
 * npm install foo - локальный тип, устанавливает в текущую папку
 *
 * npm install foo и npm install foo --save?
 * ключ --save добавляет пакет в package.json
 *
 * task 3 
 *
 * 1. Как добавить пустую папку под контроль GIT?
 * Добавить в папку пустой файл .gitkeep
 * 2. Какие файлы и папки следует держать под контролем VCS? Должен ли GIT отслеживать public? Должен ли GIT отслеживать node_modules? Если на вопросы нет "правильного" ответа – распишите критерии выбора.
 * public должен быть под контролем VCS, так как содержит уникальные для проекта файлы. node_modules нет нужды держать под VCS, чтобы не перегружать репозиторий лишним грузом. node_modules подгрузятся сами на любой машине с помощью npm
 * 3. Можно ли использовать VCS для отслеживания изменений в БД? Поясните ответ. 
 * VCS не для этого создан. Он следит за изменениями в файлах относящихся к логике приложения, а не самих данных
 * 4. В чём разница между понятиями "сайта" и "приложения"? Можно ли провести чёткую границу?
 * Четких границ нет. Сайт - это то, что может увидеть любой пользователь. Приложение может работать, будучи скрытым от стороних глаз.
 *
 *