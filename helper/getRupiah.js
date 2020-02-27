function getRupiah(number) {
    let rupiah = '';		
    let rupiahReverse = number.toString().split('').reverse().join('');
    for(let i = 0; i < rupiahReverse.length; i++) {
        if(i%3 == 0) {
            rupiah += rupiahReverse.substr(i,3)+'.'
        }
    }

    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}

module.exports = getRupiah