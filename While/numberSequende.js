function name(input) {
    let n = Number(input.shift());

    let max = n;
    let min = n;

    while (n != 'END') {
        n = Number(n);
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
        n = input.shift();
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}

name([10,
    20,
    304,
    0,
    50,
    'END'
    ])