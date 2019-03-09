function name(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = undefined;
    let price = null;
    let kindOfDestination = undefined;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
        price = budget * 0.3;
        kindOfDestination = 'Camp';
    } else if (season == 'winter'){
        price = budget * 0.7;
        kindOfDestination = 'Hotel'
    }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
        price = budget * 0.4;
        kindOfDestination = 'Camp';
    } else if (season == 'winter'){
        price = budget * 0.8;
        kindOfDestination = 'Hotel'
    } 
    } else if (budget > 1000) {
        destination = 'Europe';
        price = budget * 0.9;
        kindOfDestination = 'Hotel'
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${kindOfDestination} - ${price.toFixed(2)}`);
    
}

name([50, 'summer'])