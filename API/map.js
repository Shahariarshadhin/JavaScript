const num = [4, 6, 8, 12, 10];

const squares = num.map(x => x * x);
console.log(squares)

const mult = num.map(x => x * 2);
console.log(mult)

const add = num.map(x => x + 2);
console.log(add)

const addString = num.map(x => x + ' ' + 'position');
console.log(addString)