/* const names = ['shadhin', 'asif', 'labib', 'faisal', 'asif', 'shovon', 'shadhin', 'saikat', 'fahim', 'imran', 'fahim', 'imam'];

function removeduplicates(names) {
    const unique = [];
        // for (let i = 0; i < names.length; i++) {
        //     const element = names[i];
        //     // console.log(element);
        // }

    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}
const uniqueNames = removeduplicates(names);
console.log(uniqueNames) */


/* const numbers = [10, 15, 10, 20, 30, 22, 15, 20, 52, 20, 56, 30, 100];

function removeduDlicateNum(number) {

    const unique = [];

    for (const elements of numbers) {
        console.log(elements)
        if (unique.indexOf(elements) == -1) {
            unique.push(elements)
        }
    }
    return unique;
}

const uniqueNumbers = removeduDlicateNum(numbers);
console.log(uniqueNumbers) */

const names = ['abul', 'kalam', 'azad', 'jobbar', 'rafique', 'salam', 'kalam', 'abul', 'salam'];

function remoDuplicate(names) {

    const unique = [];

    for (const elements of names) {
        console.log(elements);
        if (unique.indexOf(elements) == -1) {
            unique.push(elements)
        }
    }
    return unique;
}

const newName = remoDuplicate(names);
console.log(newName)


const numbers = [2, 2, 4, 3, 6, 5, 5, 5, 1, 2, 9, 6, 4];

function remoNumbers(numbers) {

    const uniq = [];

    for (const element of numbers) {
        console.log(element);
        if (uniq.indexOf(element) == -1) {
            uniq.push(element)
        }
    }
    return uniq;
}

const newNumbers = remoNumbers(numbers);
console.log(newNumbers)