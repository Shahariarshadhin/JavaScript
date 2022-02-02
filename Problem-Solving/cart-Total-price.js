const cart = [

    { name: 'laptop', price: '68000', quantity: 1 },
    { name: 'mobile', price: '38000', quantity: 1 },
    { name: 'shirt', price: '500', quantity: 6 },
    { name: 'pant', price: '800', quantity: 3 }
];

let CartTotal = 0;

for (const product of cart) {

    const totalPrice = product.price * product.quantity;
    CartTotal = CartTotal + totalPrice;
}
console.log(CartTotal)