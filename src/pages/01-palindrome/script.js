/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 *
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 *
*/

function palindrome(str) {
    const wordOne = Array.from(str.matchAll(/[a-zа-яё]/ig)).join('').toLowerCase();
    const wordTwo = wordOne.split('').reverse().join('');
    return wordOne === wordTwo;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 *
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 */

console.log(palindrome('О, лета тело!')); // true Комменарий ученика: более простое решение у меня не сработало поскольку не смогло отловить "!"



/* previous code release

let wordOne;

function palindrome(wordOne) {
    wordTwo = wordOne;
    let splitedArray = wordTwo.split('');
    let mirroredArray = splitedArray.reverse();
    let wordTwoMirrored = mirroredArray.join('');
    console.log(`'${wordOne}' and '${wordTwoMirrored}' This words are palindromes of each other? ${wordOne.toLowerCase() === wordTwoMirrored.toLowerCase()}`);
    alert(`'${wordOne}' и '${wordTwoMirrored}'
Выражение, и его зеркальное отражение, были проверены на соответствие условиям палиндрома.

Полученный результат можно охарактеризовать как:
${wordOne.toLowerCase() === wordTwoMirrored.toLowerCase()}`);
}

console.log (palindrome('finder'));

// алогритм работает, но можно упростить: ферните из функции результат чравнения исходной строки и перобразованной
// методами split reverse join
!!!// алерты в коде не используйте никогда - алерты блокируют поток выполнения кода
// консль логи можно использовать при отладке, но из готового решения нужно убрать
// переменные, относящиеся к функции, нужно объявлять внутри функции, а не снаружи

*/

// Хорошо. Принято.