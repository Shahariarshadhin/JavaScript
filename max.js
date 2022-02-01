/* const num1 = 5;
const num2 = 2;
const num3 = 9;

var max = Math.max(num1, num2, num3);
console.log(max);

const num4 = 5;
const num5 = 2;
const num6 = 9;

var min = Math.min(num1, num2, num3);
console.log(min) */


/* function compare(num1, num2, num3) {

    if ((num3 > num2) && (num1 > num3)) {
        return num1;
    } else if ((num2 > num1) && (num2 > num3)) {
        return num2;

    } else {
        return num3;
    }

}

var result = compare(15, 10, 20);
console.log(result)
 */

function finingMaxnum(num1, num2, num3) {
    if ((num3 > num2) && (num1 > num3)) {
        return num1;
    } else if ((num2 > num1) && (num2 > num3)) {
        return num2;
    } else {
        return num3;
    }
}

var result = finingMaxnum(221, 333, 111);
console.log(result)