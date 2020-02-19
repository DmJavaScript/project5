/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 *
*/


function fizzBuzz(num) {
    for(let l = 1; l <= num; l++) {
    switch (true) {
        case l % 15 == 0 : console.log('fizzbuzz');
            break;
        case l % 3 == 0 : console.log('fizz');
            break;
        case l % 5 == 0 : console.log('buzz');
            break;
        default : console.log(l);
            break;
        }
    }
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(240));



/* previous code release
let n;

function fizzBuzz(n) {
    (n ^ 0) === n;
    if ((n % 3 === 0) && (n % 5 === 0)) { // тут нужно проверять деление на 15
        console.log('fizzBuzz');
    }   else if ((n % 3 === 0) && (n % 5 !== 0)) {
        console.log('fizz');
    }   else if ((n % 5 === 0) && (n % 3 !== 0)) {
        console.log('Buzz');
    }
}

fizzBuzz(3.145);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(240);


// переменные, относящиеся к функции, нужно объявлять внутри функции, а не снаружи
// удобней будет сделать через switch
*/

// Хорошо. Принято.