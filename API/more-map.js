const friends = ['shadhin shahriar', 'saikat', 'shovon', 'faisal', 'labib', 'asif', 'imran'];

const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength)


const mobiles = [

    { brand: "OnePlus", model: '7T', color: 'Nevula Blue', price: 38000 },
    { brand: "Iphone", model: '13pro max', color: 'Blue', price: 138000 },
    { brand: "Samsung", model: 'S21', color: 'Silver', price: 98000 },
    { brand: "Realme", model: 'GT', color: 'Green', price: 36000 },
    { brand: "Xiomi", model: 'poco f2', color: 'black', price: 35000 },
]

const mobilesName = mobiles.map(mobile => mobile.brand);
const mobilesPrice = mobiles.map(mobile => mobile.price);

mobiles.map(mobile => console.log(mobiles));
console.log(mobilesName);
console.log(mobilesPrice)