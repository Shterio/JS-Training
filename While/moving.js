function name(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let height = Number(input.shift());

    let currentBoxesNumber = input.shift();

    let volume = width * length * height;

    let takenSpace = 0;

    while (takenSpace <= volume) {
        if (currentBoxesNumber == 'Done') {
            break;
        }
        currentBoxesNumber = Number(currentBoxesNumber);
        takenSpace += currentBoxesNumber;       
        currentBoxesNumber = input.shift();
    }
    let diff = Math.abs(volume - takenSpace)
    if (takenSpace > volume) {
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
        
    }else{
        console.log(`${diff} Cubic meters left.`);
        
    }

}
name([10,
    1,
    2,
    4,
    6,
    'Done'
    ])