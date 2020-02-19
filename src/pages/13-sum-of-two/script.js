/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
*/

function sumOfTwo(arr, sum) {
    if (arr.length < 2) return false;

    const filtered = (value) => value.filter(n => 0 < n && n < sum); // очищаем массивы от отрицательных значений и значений больше и равных sum

    let template = [];
    filtered(arr).forEach((e)  =>  template.push(sum - e));
    return filtered(arr).join() === filtered(template).reverse().join();
}


console.log(sumOfTwo([1, 2, 3, 4, 5],  4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false