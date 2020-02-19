/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

function reverseWords(str) {
    const splitedArray = str.replace('/[\w\s]/g', '').split(' ');
    return splitedArray.reverse().join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"


/* previous code release

// переменные, относящиеся к функции, нужно объявлять внутри функции, а не снаружи
let phraseOne;

function reverseWords(phraseOne) {
    phraseOne = phraseOne.replace('/[^\w+\s+]$|_/g', '');
    let splitedArray = phraseOne.split(' ');
    let mirroredArray = splitedArray.reverse();
    let phraseOneMirrored = mirroredArray.join(' ');
    return phraseOneMirrored.toLowerCase();
}

console.log (reverseWords('Fine, finder find'));
console.log (reverseWords('Официальная дата основания Москвы — 4 апреля 1147 года'));

// ученик: не понимаю как удаляется запятая в данном случае в регулярке
// переменные, которые не переопределяются, нужно объявлять через const
// столько промежуточных переменных не нужно, все эти методы можно вызывать в цепочке
*/

// Хорошо. Принято.