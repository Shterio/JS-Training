function name(input) {
    let grad = Number(input[0]);
    let timeOfDay = input[1];
    
    let outfit = undefined;
    let shoes = undefined;

    if (grad >= 10 && grad <= 18) {
        if (timeOfDay == 'Мorning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers'
        }

    } else if (grad > 18 && grad <= 24) {
        

    } else {

    }
}

name([])