function name(input) {
    let fruit = (input[0]).toLowerCase();
    let day = (input[1]).toLowerCase();
    let price = Number(input[2]);

    let dayWeek = day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day =='friday';
    let isOffDay = day == 'saturday' || day == 'sunday';
    
    let sum = null;

    if (dayWeek) {
        if (fruit == 'banana') {
            sum = price * 2.5
        } else if (fruit == 'grapes') {
            sum = price * 3.85
        } else if (fruit == 'apple') {
            sum = price * 1.2
        } else if (fruit == 'orange') {
            sum = price * 0.85
        } else if (fruit == 'grapefruit') {
            sum = price * 1.45
        } else if (fruit == 'kiwi') {
            sum = price * 2.7
        } else if (fruit == 'pineapple') {
            sum = price * 5.5
        }
    } else if (isOffDay) {
        if (fruit == 'banana') {
            sum = price * 2.7
        } else if (fruit == 'grapes') {
            sum = price * 4.2
        } else if (fruit == 'apple') {
            sum = price * 1.25
        } else if (fruit == 'orange') {
            sum = price * 0.9
        } else if (fruit == 'grapefruit') {
            sum = price * 1.6
        } else if (fruit == 'kiwi') {
            sum = price * 3
        } else if (fruit == 'pineapple') {
            sum = price * 5.6
        }
    } 

    if (sum) {
        console.log(sum.toFixed(2));
        
    } else {
        console.log('error');
        
    }
}

name(['apple', 'Workday', '2'])