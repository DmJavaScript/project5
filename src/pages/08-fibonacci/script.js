/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci (n) {
    let a = 0;
    let b = 1;
    for (let preVal=3; preVal <= n; preVal++ ) {
        fibonacci[preVal] = (preVal +  1).toString();
        let c = a + b;
        a = b;
        b = c;
    }
    if (n >= 2) {
        return b
    } else if (n >= 1) {
        return 0
    }
}
window.fibonacci = fibonacci; //для вебпака передаю область видимости функции для других скриптов на этой странице

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)



/* previous code release

let positionNumber = prompt('Введите порядковый номер позиции у значения последовательности Фибоначчи. Вводимое число не может быть отрицательным и быть равным 0. Введите положительное целое число', '');

function fibonachi (positionNumber) {
    let a = 0, b = 1;
    for (let preVal=3; preVal <= positionNumber; preVal++ ) {
        fibonachi[preVal] = (preVal +  1).toString();
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(b);
}

fibonachi(positionNumber);
fibonachi(4);

// тут не нужен prompt
// функция длжна возвращать число
*/

// Хорошо. Принято.