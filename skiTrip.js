function skiTrip(input) {
    let day = Number(input[0]);
    let kind = input[1];
    let note = input[2];

    let days = day - 1;
    let price = null;

    if (kind == 'room for one person') {
            price = days * 18;
    } else if (kind == 'apartment') {
        if (days < 10) {
            price = days * 25 * 0.7

        } else if (days >= 10 && days <= 15) {
            price = days * 25 * 0.65

        } else {
            price = days * 25 * 0.5

        }
    } else {
        if (days < 10 ) {
            price = days * 35 * 0.9

        } else if (days >= 10 && days <= 15) {
            price = days * 35 * 0.85
            
        } else {
            price = days * 35 * 0.8
        }
    }
    
    if (note == 'positive') {
        price = price + (price * 0.25)
    } else {
        price = price - (price * 0.1)
    }
    
  console.log(price.toFixed(2))     
}
    


skiTrip(['12', 'room for one person', 'positive'])