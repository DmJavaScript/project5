/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 *
*/

// решение на основе решета Ератосфена https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function primes(num) {
    if (num < 2) return [];
    else {
        let simpleArray = [2];
        let primesArray = [];

        for (let n = 3; n <= num; n+=2) {
            simpleArray.push(n);
        }

        for (let p = 4; simpleArray[p] <= num; p+=3) {
            primesArray.push(simpleArray[p]);
            }

        for (let p = 2; simpleArray[p] <= num; p+=5) {
            primesArray.push(simpleArray[p+5]);
            }

        for (let p = 3; simpleArray[p] <= num; p+=7) {
            primesArray.push(simpleArray[p+7]);
            }

            simpleArray = simpleArray.filter(e => !primesArray.includes(e));

            return simpleArray;
        }
}



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]




// не моё решение, но интересный пример всплытия через метку https://learn.javascript.ru/while-for#metki-dlya-break-continue
/*
function primes(num) {
let list = [];
loopSurfacing: for (let i = 2; i <= num; i++) {
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) continue loopSurfacing;
                    }
                list.push(i);
                }
return list;
}
*/
