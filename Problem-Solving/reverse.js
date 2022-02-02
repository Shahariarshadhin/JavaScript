/* const greetings = 'Hello how are you';

function reverseString(text) {

    let reverse = '';

    for (const letter of text) {
        console.log(letter);

        reverse = letter + reverse;
    }
    return reverse;
}

const reversed = reverseString(greetings);
console.log(reversed) */


/* const wish = "Happy Birthday To You";

function reverseString(text) {

    let reverse = '';

    for (const letter of text) {
        console.log(letter);

        reverse = letter + reverse;
    }
    return reverse;

}

const reversing = reverseString(wish);
console.log(reversing) */
// const string = 'hello';

/* function reverseString(str) {

    // return a new array of strings
    const arrayStrings = str.split("");

    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();

    // join all elements of the array into a string
    const joinArray = reverseArray.join("");

    // return the reversed string
    return joinArray;
}




const result = reverseString(string);
console.log(result); */



const string = 'Nature is the best teacher';

function reverseString(str) {

    const arrayString = str.split("");
    const reverseArray = arrayString.reverse();
    const joinArray = reverseArray.join("");

    return joinArray

}

const result = reverseString(string);

console.log(result)