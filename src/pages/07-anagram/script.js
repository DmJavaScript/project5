/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
*/

function anagram(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) return false;
    const finalString = (value) => value.toLowerCase().split('').sort().join('');
    return finalString(str1) === finalString(str2);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false

/* previous code release

function anagram(wordOne, wordTwo) {
    let futureArrayOne = wordOne.toLowerCase();
    let futureArrayTwo = wordTwo.toLowerCase();
    let splitedArrayOne = futureArrayOne.split('');
    let splitedArrayTwo = futureArrayTwo.split('');
    alphabetOne = splitedArrayOne.sort();
    alphabetTwo = splitedArrayTwo.sort();
    alert(`'${wordOne}' и '${wordTwo}' Эти два выражения были проверены на соответсвие условиям анаграммы. ${AlphabetOne.join('') === AlphabetTwo.join('') }`);
}

anagram('finder', 'Friend');
anagram('hello', 'bye');

// массивы определяются через const
// консолей и алертов быть не должно
// функция должна возвращать true или false

*/
// Хорошо. Принято.
