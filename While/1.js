function name(input) {
    let number = Number(input.shift());

    while (number < 1 || number > 100) {
        console.log('Invalid number!');
        number = input.shift();
    }
    console.log(`The number is: ${number}`);
    
}
name([-200, 234, -2, 15])