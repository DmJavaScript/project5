/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 *
*/

function factorial(n) {
    let str = 1;
    for (let p = 0; p < n ; p++) {
        str = str * (p + 1);
    }
    return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720









// рекурсивное интересное решение, не моё

/* function factorial(n){
    if (n <= 1) return 1;
    return n * factorial(n-1);} */

// то же самое, но короткая запись

// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
//   }