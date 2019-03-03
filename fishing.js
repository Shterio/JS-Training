function name(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishing = Number(input[2]);

    let rent = null;

    switch (season) {
        case 'Spring':
            rent = 3000;   
            break;
        case 'Summer':
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;
    }
    if (numberOfFishing <= 6) {
        rent *= 0.9;
    } else if (numberOfFishing >= 7 && numberOfFishing <= 11) {
        rent *= 0.85;
    } else if (numberOfFishing >= 12) {
        rent *= 0.75;
    }

    if (numberOfFishing % 2 == 0 && season != "Autumn") {
        rent *= 0.95;
    } 

    let money = null;
    if (budget >= rent) {
        money = budget - rent;
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

    } else {
        money = rent - budget;
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);

    }


}

name([2000,
    'Winter',
    13
])