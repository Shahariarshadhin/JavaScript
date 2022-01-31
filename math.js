// absolute value

const number = -5.22;
const result = Math.abs(number);
console.log(result)

// ceil = It  contains the value  upper integer like 7.22 will show as 8
const number2 = 7.22;
const result2 = Math.ceil(number2);
console.log(result2)

// floor = It contains the value of lower integer like 3.22 will show as 3
const number3 = 3.22;
const result3 = Math.floor(number3);
console.log(result3)


//round
const number4 = 5.4;
const result4 = Math.round(number4);
console.log(result4)


const number5 = 5.7;
const result5 = Math.round(number5);
console.log(result5)

//random 
const RandomNumber = Math.random() * 10;
const rounded = Math.round(RandomNumber)
console.log(rounded)

//random function using loop
for (let i = 0; i < 10; i++) {
    const RandomNumber = Math.random() * 10;
    const rounded = Math.round(RandomNumber)
    console.log(rounded)

}