function name(input) {
    let name = input.shift();
    let count = 1;
    let sum = 0;

    while (count <= 12) {
        let note = Number(input.shift());

        if (note >= 4) {
            count++;
            sum += note;
        }

    }
    let avg = sum / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    
}

name(['Pesho',
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
    
    ])