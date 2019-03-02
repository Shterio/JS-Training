function name(input) {
    let grad = Number(input[0]);
    let timeOfDay = input[1];
    
    let outfit = undefined;
    let shoes = undefined;

    if (grad >= 10 && grad <= 18) {
        if (timeOfDay == 'Мorning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    } else if (grad > 18 && grad <= 24) {
        if (timeOfDay == 'Мorning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }

    } else {
        if (timeOfDay == 'Мorning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${grad} degrees, get your ${outfit} and ${shoes}.`);
    
}

name(['16', 'Morning'])