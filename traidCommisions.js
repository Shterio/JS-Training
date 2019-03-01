function name(input) {
    let city = (input[0].toLowerCase());
    let sale = Number(input[1]);

    //let isCity = city == 'Sofia' || city == 'Varna' || city == 'Plovdiv';
    let commision = null;

    if (city == 'sofia') {
        if (sale >= 0 && sale <= 500) {
            commision = sale * 0.05;
        } else if (sale > 500 && sale <= 1000) {
            commision = sale * 0.07;
        } else if (sale > 1000 && sale <= 10000) {
            commision = sale * 0.08;
        } else if (sale > 10000) {
            commision = sale * 0.12;
        } 
         
    } else if (city == 'varna') {
        if (sale >= 0 && sale <= 500) {
            commision = sale * 0.045;
        } else if (sale > 500 && sale <= 1000) {
            commision = sale * 0.075;
        } else if (sale > 1000 && sale <= 10000) {
            commision = sale * 0.1;
        } else if (sale > 10000) {
            commision = sale * 0.13;
        } 
        
    } else if (city == 'plovdiv') {
        if (sale >= 0 && sale <= 500) {
            commision = sale * 0.055;
        } else if (sale > 500 && sale <= 1000) {
            commision = sale * 0.08;
        } else if (sale > 1000 && sale <= 10000) {
            commision = sale * 0.12;
        } else if (sale > 10000) {
            commision = sale * 0.145;
        } 
    } 

    if (commision) {
        console.log(`${commision.toFixed(2)}`);  
    } else {
        console.log("error");
    }

}
name(['Kaspichan', '-50'])