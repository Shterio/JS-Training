function name(input) {
    let fruit = (input[0]).toLowerCase();
    let day = (input[1]).toLowerCase();
    let price = Number(input[2]);

    let dayWeek = day =='Monday' || 'Tuesday' || 'Wednesday' || 'Thursday' || 'Friday';
    let dayWeekend = day == 'Saturday' || 'Sunday';
    //let fruitSort = fruit == 'banana' || 'apple' || 'orange' || 'grapefruit' || 'kiwi' || 'pineapple' || 'grapes';
    let sum = 0;

    if (dayWeek) {
        if (fruit == 'banana') {
            sum = price * 2.5
        } else if (fruit == 'grapes') {
            sum = price * 2.5
        } else if (fruit == 'apple') {
            sum = price * 2.5
        } else if (fruit == 'orange') {
            sum = price * 2.5
        } else if (fruit == 'grapefruit') {
            sum = price * 2.5
        } else if (fruit == 'kiwi') {
            sum = price * 2.5
        } else if (fruit == 'pineapple') {
            sum = price * 2.5
        }
    } else if (dayWeekend) {
        if (fruit == 'banana') {
            sum = price * 2.5
        } else if (fruit == 'grapes') {
            sum = price * 2.5
        } else if (fruit == 'apple') {
            sum = price * 2.5
        } else if (fruit == 'orange') {
            sum = price * 2.5
        } else if (fruit == 'grapefruit') {
            sum = price * 2.5
        } else if (fruit == 'kiwi') {
            sum = price * 2.5
        } else if (fruit == 'pineapple') {
            sum = price * 2.5
        }
    } //#endregion

    if (sum) {
        console.log(sum.toFixed(2));
        
    } else {
        console.log('error');
        
    }
}