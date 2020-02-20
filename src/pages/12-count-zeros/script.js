/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 *
*/

function countZeros(n) {
    const createdArray = [1];
    for (let s = 2; s < n + 1; s++) {
        createdArray.push(s);
    }
    const onlyZeros = createdArray.join('').replace(/[^0]/g, '');
    return onlyZeros.length;
}
window.countZeros = countZeros; //для вебпака передаю область видимости функции для других скриптов на этой странице

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100