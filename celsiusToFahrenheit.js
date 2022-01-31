// Multiply Celsius value by 9/5
// Add 32 to Celsius value

// celsiusTofahrenheit

function celsiusTofahrenheit(celsius) {
    fahrenheit = celsius * 9 / 5 + 32;

    return fahrenheit;
}

const temperature = celsiusTofahrenheit(30);
console.log("Temperature is", temperature, "degree Fahrenheit")


function fahrenheitTocelsius(fahrenheit) {

    celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
}

const temp = fahrenheitTocelsius(86);
console.log("Temperature is", temp, "degree Celsius")