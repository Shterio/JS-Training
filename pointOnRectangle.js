function name(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    if ((x1 < x && x < x2) && (y1 < y && y < y2)) {
        console.log('Inside / Outside');
        
    } else {
        console.log('Border');
        
    }
}

name([2,
    -3,
    12,
    3,
    12,
    -1
    ])