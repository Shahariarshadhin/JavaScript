/* function largestnum(numbers) {

    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;

}
var num = [20, 15, 25, 10, 90, 50, 60];
var largeone = largestnum(num);
console.log(largeone) */

function largestnumber(numbers) {

    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }

    }
    return largest;
}

var ages = [15, 22, 10, 16, 32, 28, 27];
var olderone = largestnumber(ages);
console.log(olderone)