/* const phones = [

    { name: 'Samsung s5', price: 45000, storage: 64 },
    { name: 'One pLus 7T', price: 38000, storage: 128 },
    { name: 'Realmi GT', price: 30000, storage: 32 },
    { name: 'Iphone 13 pro max', price: 145000, storage: 128 },
    { name: 'Xiomi', price: 20000, storage: 32 }

];


let cheapest = phones[0];

for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest) */


const phones = [

    { name: 'Samsung s5', price: 45000, storage: 64 },
    { name: 'One pLus 7T', price: 38000, storage: 128 },
    { name: 'Realmi GT', price: 30000, storage: 32 },
    { name: 'Iphone 13 pro max', price: 145000, storage: 128 },
    { name: 'Xiomi', price: 20000, storage: 32 }

];


let cheapest = phones[0];

for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest)