function name(input) {
    let film = input[0];
    let row = Number(input[1]);
    let columm = Number(input[2]);

    let filmPrice = null;

    if (film == 'Premiere') {
        filmPrice = row * columm * 12;
    } else if (film == 'Normal') {
        filmPrice = row * columm * 7.5;
    } else {
        filmPrice = row * columm * 5;
    }
    console.log(`${filmPrice.toFixed(2)} leva`);
    
}

name(['Normal',
    21,
    13
    ])