function name(input) {
    let city = input[0];
    let sale = Number(input[1]);

    //let isCity = city == 'Sofia' || city == 'Varna' || city == 'Plovdiv';
    let commision = null;

    if (city == 'Sofia') {
        if (sale < 0 || sale <= 500) {
            commision = sale * 0.05;
        } else if (sale > 500 || sale <= 1000) {
            commision = sale * 0.07;
        } else if (sale > 1000 || sale <= 10000) {
            commision = sale * 0.08;
        } else if (sale > 10000) {
            commision = sale * 0.12;
        }
        
    } console.log(commision.toFixed(2));
    
}
name(['Sofia', '1500'])