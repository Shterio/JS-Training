function name(input) {
    const goal = 10000;
    let steps = Number(input.shift());

    let sumSteps = 0;

    while (sumSteps <= goal) {
        sumSteps += steps;
        steps = Number(input.shift());
    }

    console.log('Goal reached! Good job!');
    
}

name([1000,
    1500,
    2000,
    6500
    ])