function name(input) {
    let month = input[0];
    let days = Number(input[1]);

    let sumApartment = 0;
    let priceStudio = 0;

    if (month == 'May' || month == 'October') {
        sumApartment = days * 65;
        priceStudio = days * 50;
        
        if (days > 7 && days <= 14) {
            priceStudio *= 0.95;
        } else if (days > 14) {
            priceStudio *= 0.7;
        } 
          
    } else if (month == 'June' || month == 'September') {
        sumApartment = days * 68.7;
        priceStudio = days * 75.2;

        if (days > 14) {
            priceStudio *= 0.8;
        }
             
    } else if (month == 'July' || month == 'August') {
        sumApartment = days * 77;
        priceStudio = days * 76;
    }
    if (days > 14) {
        sumApartment *= 0.9;
    }

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
      
}

name(['June', 14])