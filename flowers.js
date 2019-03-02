function name(input) {
    let typeOfFlower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    
    let discount = null;
    let sum = null;
    let money = null;

    if (typeOfFlower == "Roses") {
        sum = numberOfFlowers * 5;
        if (numberOfFlowers > 80) {
            discount = sum * 0.9;
        } else {
            discount = sum * 1;
        }
    } else if (typeOfFlower == "Dahlias") {
        sum = numberOfFlowers * 3.8;
        if (numberOfFlowers > 90) {
            discount = sum * 0.85;
        } else {
            discount = sum * 1;
        }
    } else if (typeOfFlower == "Tulips") {
        sum = numberOfFlowers * 2.8;
        if (numberOfFlowers > 80) {
            discount = sum * 0.85;
        } else {
            discount = sum * 1;
        }
    } else if (typeOfFlower == "Narcissus") {
        sum = numberOfFlowers * 3;
        if (numberOfFlowers < 120) {
            discount = sum * 1.15;
        } else {
            discount = sum * 1;
        }
    } else {
        sum = numberOfFlowers * 2.5;
        if (numberOfFlowers < 80) {
            discount = sum * 1.20;
        } else {
            discount = sum * 1;
        }
    }

    if (discount > budget) {
        money = discount - budget;
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
        
    } else {
        money = budget - discount;
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlower} and ${money.toFixed(2)} leva left.`);
    }
    
}

name(['Tulips',
    88,
    260
    ])