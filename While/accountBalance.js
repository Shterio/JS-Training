function name(params) {
    let n = Number(params.shift());

    let couter = 0;
    let balance = 0;

    while (couter < n) {
        let amount = Number(params.shift());
        if (amount < 0) {
            console.log('Invalid operation!');
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        couter++;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
    
}

name([3,5.51,69.42,100])