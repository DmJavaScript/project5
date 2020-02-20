/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/


function capitalize(str) {
    const splitedArray = str.split(' ');
    splitedArray.forEach((e, i) => splitedArray[i] = splitedArray[i].charAt(0).toUpperCase() + splitedArray[i].substr(1));
    return splitedArray.join(' ');
}
window.capitalize = capitalize; //для вебпака передаю область видимости функции для других скриптов на этой странице

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"



/* previous code release
function capitalize( phraseOne ) {
    let splitedArray = phraseOne.split(' '); // const
    for (let i = 0; i < splitedArray.length; i++ ) {
        let eachWordFirstLetter = splitedArray[i].charAt(0).toUpperCase(); // const
        splitedArray[i] = eachWordFirstLetter + splitedArray[i].substr(1);
    }
    return console.log(capitalizedArray = splitedArray.join(" ")); // возвращать нужно не консоль лог, а строку
}

capitalize('с большой буквы');
capitalize('Добавить в регулярное выражение русские буквы');
*/

/*
поиск решения
splitedArray.slice(0, 1).forEach(function (a) {
      console.log(a);}
*/
