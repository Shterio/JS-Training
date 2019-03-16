function name(input) {
    let name = input.shift();
    let count = 1;
    let sum = 0;
    let excluded = 0;
    let isExcluded = false;

    while (count <= 12) {
        let note = Number(input.shift());

        if (note < 4) {
            excluded++;
        }
        if (note >= 4) {
            count++;
            sum += note;
        }
        if (excluded >= 2) {
            isExcluded = true;
            break;
        }

    }
    if (isExcluded == false) {
        let avg = sum / 12;
        console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${count} grade`);
        
    }


}

name(['Mimi',
5,
6,
5,
6,
5,
6,
6,
2,
3

])