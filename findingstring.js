var sentence = "I am hardworking. I am determined. I will be a web developer. ababil";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}
console.log(count)