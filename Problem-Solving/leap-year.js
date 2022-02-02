// The year is a multiple of 400.
// The year is a multiple of 4 and not a multiple of 100.

// function leapyear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         return true;
//     }
//     return false;

// }

// const myyear = 2000;
// const isleapyear = leapyear(myyear);
// console.log(isleapyear)

// const youryear = 1700;
// const isLeapYear = leapyear(youryear);
// console.log(isLeapYear)

//practice

function leapyear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    }
    return false;
}

const enteryear = 2019;
const happyNewyear = leapyear(enteryear);
console.log(happyNewyear)