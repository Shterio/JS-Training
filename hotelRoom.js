function name(input) {
    let month = input[0];
    let days = Number(input[1]);

    let sumApartment = 0;
    let priceStudio = 0;

    if (month == 'May' || month == 'October') {
        sumApartment = days * 65;
        priceStudio = days * 50;

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      
}

name(['June', 14])