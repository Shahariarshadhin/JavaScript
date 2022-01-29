// function declearation

function Parade() {

    console.log('Move on your right')
    console.log('Move on your Left')
    console.log('Walk 3 meter infront of you')
    console.log('Go back your previous potion')
}

// function recall
Parade();


// parameter

function watch(titan) {
    console.log('Price of this watch is ', titan)

}
watch(100);

function burger(food) {
    console.log('Prcie of this burger is :', food)

}

var price = 90;
burger(price);


function Food(food) {
    console.log('Total given amount :', food)
    var cocholatePrice = 15;
    var cocholateQuantity = food / cocholatePrice;
    return cocholateQuantity;
}

var money = 180;
var cocholate = Food(money);
console.log('Total cocholate :', cocholate);

function clothes(amount) {
    console.log('Total Amount :', amount);
    var shirtPrice = 600;
    var shirtQuantity = amount / shirtPrice;
    return shirtQuantity;

}

var money = 3000;
var shirt = clothes(money);
console.log("Shirt Quantity :", shirt)