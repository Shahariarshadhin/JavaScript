const numberList = [10, 5, 15, 50, 30, 25, 7, 9, 40, 35];

//filter

const bigNumbers = numberList.filter(number => number > 15);
const smallNumbers = numberList.filter(number => number < 15);
// console.log(bigNumbers);
// console.log(smallNumbers)

const mobiles = [

    { brand: "OnePlus", model: '7T', color: 'Nevula Blue', price: 38000 },
    { brand: "Iphone", model: '13pro max', color: 'Blue', price: 138000 },
    { brand: "Samsung", model: 'S21', color: 'Silver', price: 98000 },
    { brand: "Realme", model: 'GT', color: 'Green', price: 36000 },
    { brand: "Xiomi", model: 'poco f2', color: 'black', price: 35000 },
]

const mobilePrice = mobiles.filter(mobile => mobile.price > 36000);
const mobilecolor = mobiles.filter(mobile => mobile.price > 36000);

console.log(mobilePrice)