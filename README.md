# project5
![Version][shield-version]
![Build status][shield-build]

Набор из решений 14 заданий для отработки навыка решения подобных JavaScript задач на собеседованиях. Решены в рамках обучения на фронтенд -разработчика в Яндекс.Практикум.
## Стек: JS.

### Готово решение всех задач, комментарии в скобках:
1.Палиндром, зеркальное прочтение строк. (применено регулярное выражение)
2.FizzBuzz, определение кратности числа 3, 5, 15
3.Развернуть слова в предложении (решение с помощью регулярного выражения)
4.Каждое слово с прописной буквы (решение с использованием стрелочной функции ES6)
5.Поиск гласных в строке кириллицы
6.Поиск уникальных чисел в массиве (решение с использованием стрелочной функции ES6)
7.Анаграмма (решение с использованием стрелочной функции ES6)
8.Последовательность чисел Фибоначчи
9.Проверка на простое число
10.Факториал, произведение всех натуральных чисел от 1 до n включительно
11.Пересечения массивов (решение с использованием стрелочных функций ES6)
12.Посчитать количество нулей в числе (решение с применением регулярного выражения)
13.Сумма двух чисел из исходного массива, равная заданному числу. (ES6)
14.Создание массива простых чисел (решение на основе решета Ератосфена, ES6)

### Что ещё возможно будет добавлено:
* Новые задачи и их решения
* Придумать заглавную страницу и анимацию карточек для каталога задач
* При HTML вёрстке страницы навигации увеличить доступность (tabindex для навигации с клавиатуры)
* Добавить кастомные шрифты и подключить системные
* Используя CSS сделать анимацию шрифтов и карточек
* JavaScript для визуализации статистики и отрисовки решений?


### Использованные материалы и полезные для будущих изменений:

* [`Курс Яндекс.Практикум`](https://praktikum.yandex.ru/)
* [`Доступность a11y`](udacity.com/course/web-accessibility--ud891) <https://medium.com/web-standards/pragmatic-a11y-rules-b16dd2f77685>
* [`Решето Ератосфена`](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)




## Инструкции по развёртыванию:

#### установить Git для вашей операционной системы
Его необходимо скачать с официального сайта <https://git-scm.com/downloads>

#### используя утилиту Git Bash
склонировать проект напрямую в свой репозиторий командой
```shell
git clone https://github.com/DmJavaScript/project5.git
```

установите все необходимые плагины с помощью автоматической пакетной установки,  для этого достаточно ввести команды
```shell
npm init --yes (перейдя в корневую папку репозитория, в одну из существующих веток, запустите эту команду инициализирующую библиотеку утилит NPM)
npm install  (используемые в проекте плагины подтянуться из списка установки файла package.json При желании вы можете изменить их список или установить более свежие версии плагинов. Для этого необходимо установить знак ^ (каретки) перед необходимыми плагинами в файле package.json Например, "cross-env": "^6.0.3",)
```


#### Полезно знать следующее:
Для запуска локальной сборки проекта необходимо в Git Bash ввести команду
```shell
npm run build  (cборка проекта скомпилируется в директории dist/) тогда Вы сможете отнести собранный проект и он запустится локально без дополнительных программ
```

Для работы с проектом в режиме разработки можете воспользоваться командой
```shell
npm run dev  (запускает локальный сервер разработки сайта с обновлениями изменений в реальном времени)
```

Для внесения изменений на уже развернутом проекте может использовать следующий алгоритм работы, команды
```shell
git checkout develop  (название ветки вашей разработки может быть другой, тут для примера, названа develop)
git pull origin develop  (актуализация информации по этой ветке)
git status (показывает какие файлы вы уже изменили и которые будут отправлены на сервер при следующих действиях)
git add .  (в очередь на загрузку ставятся все изменения, что Вы произвели в проекте! Это относится и к удаленным вами файлам)

git commit -m 'описываете здесь то, что добавили в очередь на загрузку'
git tag -a git v0.0.1 -m 'описание содержания версии коммита для внешних пользователей' (текст в дальнейшем можно будет отредактировать, важно ставить новер версий и соблюдать нумерацию. В последней части команды можно проставлять контрольную сумму или часть от неё)

git push origin develop   (запускаете процесс отправки подготовленных данных на сервер. Обращайте внимание на название ветки в которой произвдите изменения. Стоит develop в качестве примера)
git push origin v0.0.1    (отправьте своё описание версии на сервер. Если забыли это сделать, можно, но нежелательно делать это одной командой git push --tags  команда отправляет все неотправленные ранее теги на сервер)
```

финально страхуетесь командой
```shell
git pull origin develop (если всё в порядке, то придет ответ от сервера, что информация в актуальном состоянии)
```





## Минимальные системные требования:

Русский язык в операционной системе для правильного отображения шрифтов.

Компьютер с установленным на нём одним из перечисленных ниже браузеров.
Версии браузеров поддерживаются начиная от:
* edge: "17",
* firefox: "60",
* chrome: "64",
* safari: "10"


[shield-version]: https://img.shields.io/github/v/release/DmJavaScript/project5?style=flat-square
[shield-build]: https://img.shields.io/appveyor/ci/DmJavaScript/project5?style=flat-square
### ссылка на мой репозиторий https://github.com/DmJavaScript/project5
