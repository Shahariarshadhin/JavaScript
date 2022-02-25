const mobile = {

    name: 'OnePlus',
    model: '7T',
    color: 'Nevula Blue',
    price: 38000,
    processor: 'snapdragon 855+',
}

// console.log(mobile);
// console.log(mobile.color);

// const { name, model, price } = mobile;
// console.log(name, model, price);


const company = {

    name2: 'SanIT',
    work: 'Software Development',
    location: 'Dhaka',
    ceo: {
        name: 'shadhin',
        id: 72,
        age: 25,
    },
    employee: {
        totalPeople: 55,
        work: {
            web: {
                alphaSection: 'Initialization',
                betaSection: 'Development',
                gymaSection: 'Testing'
            }

        }


    }

}

const { alphaSection, betaSection } = company.employee.work.web;
const { name, id } = company.ceo;
// console.log(alphaSection, betaSection );
console.log(name, id)

const { totalPeople } = company.employee;
console.log(totalPeople)