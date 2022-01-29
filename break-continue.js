var i = 0;
while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

var i = 0;

while (i < 20) {
    console.log(i);
    if (i == 9) {
        break;
    }
    i++;
}

for (i = 0; i <= 20; i++) {
    console.log(i);
    if (i > 11) {
        break;

    }
}


var num = [20, 50, 30, 55, 60, 90, 111, 85, 10, 140, 121, 99]

for (var i = 0; i < num.length; i++) {
    var numbers = num[i];
    console.log(numbers);

    if (num > 80) {
        break;
    }
}