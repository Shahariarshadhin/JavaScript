/* const numbers = [20, 15, 25, 10, 30, 50, 60];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;

}
console.log(sum) */

/* 
function sumofarray(array) {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        sum = sum + element;

    }
    return sum;

}
var result = sumofarray([20, 15, 25, 10, 30, 50, 60]);
console.log(result) */


function sumofarr(number) {

    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        const element = number[i];

        sum = sum + element;

    }
    return sum;

}

var resultofsum = sumofarr([20, 15, 25, 40, 30, 50, 60]);

console.log(resultofsum)