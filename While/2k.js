function name(input) {
    let number = Number(input[0]);

    let currentNumber = 1;


    while (currentNumber <= number) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2;
        currentNumber++;
    }
    
}
name([17])