function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;

}

var shakib = 144;
var feet = inchTofeet(shakib);
console.log('Shakib is ', feet, 'feet');

var mushi = 120;
var feet = inchTofeet(mushi);
console.log('Mushi is', feet, 'feet')

function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;

}

var tamim = 132;
var feet = inchToFeet(tamim);
console.log('Tamim is', feet, 'feet');

//mile to kilometer

function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var ctgTodhaka = mileTokilometer(160.314);
console.log("Chittagong To Dhaka is", ctgTodhaka, "km")

// km to mile

function kmTOmiles(km) {
    var mile = km * 0.621371;
    return mile;
}

var dhakaToctg = kmTOmiles(258);
console.log("Dhaka To Chittagong is", dhakaToctg, "miles");