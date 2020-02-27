let inventories = {
    espresso: 250,
    milk: 250,
    sugar: 250
}

for(const inven in inventories) {
    console.log(inven);
    console.log(inventories[inven]);
}

const getRupiah = require('./helper/getRupiah.js')

const sejuta = getRupiah(1800000)
console.log(sejuta);