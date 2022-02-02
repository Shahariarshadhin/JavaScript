var factorial = 1;
for (var i = 1; i <= 7; i++) {
    console.log(i)
    factorial = factorial * i;
}

console.log(factorial);

var factorial = 1;
for (var i = 1; i < 9; i++) {
    console.log(i)
    factorial = factorial * i;
}

console.log(factorial);

// using  function

function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(6);
console.log(firstFactorial);

// practice

function getFact(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
var number = getFact(9);
console.log(number)