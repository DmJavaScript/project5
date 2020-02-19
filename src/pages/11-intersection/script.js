/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 *
*/

function intersection(arr1, arr2) {
    const findedDuplicates = arr1.filter(e => arr2.includes(e));
    const uniq = findedDuplicates.filter((value, index, self) => self.indexOf(value) === index);
    return uniq;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []


/* previous code release

function intersection (fisrtArray, secondArray) {
    const findedDuplicates = fisrtArray.filter(e => secondArray.includes(e));
    return findedDuplicates;
}

// эта фукнция не поддерживала удаление дубликатов внутри исходных массивов, дополнил.
*/

// хорошо. принято