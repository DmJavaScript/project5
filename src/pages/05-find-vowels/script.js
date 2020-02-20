/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const lettersArray = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    const lettersDuplicate = lettersArray.filter(e => str.toLowerCase().split('').includes(e));
    return lettersDuplicate.length;
}
window.findVowels = findVowels; //для вебпака передаю область видимости функции для других скриптов на этой странице

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3


/* previous code release

const str = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
let wordForCheck;

function findVowels(wordForCheck) {
    const wordsArray = wordForCheck.split('');  // const
    const wordsDuplicate = str.filter(e => wordsArray.includes(e));
    console.log (wordsDuplicate); // нужно возвращать из функции количество гласных
}


findVowels('здравствуй'); // 2
findVowels('привет'); // 2
findVowels('хеллоу'); // 3

*/

// Хорошо. Принято.
