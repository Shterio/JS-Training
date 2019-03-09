function name(params) {
    let number = Number(params.shift());

    while (number < 1 || number > 100) {
        console.log('Invalid number!');
        number = params.shift();
    }
    console.log(`The number is: ${number}`);
    
}