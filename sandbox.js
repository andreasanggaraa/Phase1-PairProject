let inventories = {
    espresso: 250,
    milk: 250,
    sugar: 250
}

for(const inven in inventories) {
    console.log(inven);
    console.log(inventories[inven]);
}