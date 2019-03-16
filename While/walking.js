function name(input) {
    const goal = 10000;
    let steps = input.shift();

    let sumSteps = 0;
    let isGoalReached = false;

    while (sumSteps < goal) {
        if (steps == 'Going home') {
            steps = Number(input.shift());
            sumSteps += steps;
            if (sumSteps >= goal) {
                isGoalReached = true;
            }
            break;
        }
        steps = Number(steps);
        sumSteps += steps;
        steps = input.shift() ;
    }

    if (isGoalReached || sumSteps >= goal) {
        console.log('Goal reached! Good job!');
    } else {
        let diff = goal - sumSteps;
        console.log(`${diff} more steps to reach goal.`);
        
    }
    
    
}

name([1500,
    300,
    2500,
    3000,
    'Going home',
    200
    ])