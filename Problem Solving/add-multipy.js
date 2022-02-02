/* function woodcalculator(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWoodQuantity;
}

const firstOption = woodcalculator(5, 5, 4);
console.log(firstOption) */


function totalSales(shirtQuanity, pantQuantity, shoeQuantity) {

    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    const totalShirtPrice = shirtQuanity * perShirtPrice;
    const totalPantPrice = pantQuantity * perPantPrice;
    const totalShoePrice = shoeQuantity * perShoePrice;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalPrice;
}

const totalCosting = totalSales(5, 5, 2);
console.log(totalCosting)