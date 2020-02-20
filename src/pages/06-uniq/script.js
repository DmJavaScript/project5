/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 *
*/

function uniq(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}
window.uniq = uniq; //для вебпака передаю область видимости функции для других скриптов на этой странице

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]


/* previous code release

function uniq(arr) {
    function findDuplicate(value, index, self) {
        return self.indexOf(value) === index;
    }
    return arr.filter(findDuplicate);
}

uniq([1, 2, 5, 4, 2]);
uniq([3, 3, 3, 5]);
uniq([1, 4, 2, 2, 3, 4, 8]);

*/

// Хорошо. Принято.
