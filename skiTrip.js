function skiTrip(input) {
    let day = Number(input[0]);
    let kind = input[1];
    let note = input[2];

    let days = day - 1;
    let sum = null;
    let price = null;
    let notes = null;

    if (kind == 'room for one person') {
        if (days < 10) {
            price = days * 18
            notes = sum + (sum * 0.25)

        } else if (days >= 10 && days <= 15) {
            price = days * 18

        } else {
            price = days * 18
            notes = sum + (sum * 0.25)

    
        } 
    } else if (kind == 'apartment') {
        if (days < 10) {
            price = days * 25
            sum = price - (price * 0.30)

        } else if (days >= 10 && days <= 15) {
            price = days * 25
            sum = price - (price * 0.35)
            notes = sum + (sum * 0.25)

        } else {
            price = days * 25
            sum = price - (price * 0.5)
        }
    } else {
        if (days < 10 ) {
            price = days * 35
            sum = price - (price * 0.10)

        } else if (days >= 10 && days <= 15) {
            price = days * 35
            sum = price - (price * 0.15)
            
        } else {
            price = days * 35
            sum = price - (price * 0.2)
        }
    }
    
    if (note == 'positive') {
        sum = sum + (sum * 0.25)
    } else {
        sum = sum - (sum * 0.1)
    }
    
  console.log(sum.toFixed(2))     
}
    


skiTrip(['14', 'apartment', 'positive'])