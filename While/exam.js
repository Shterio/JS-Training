function name(input) {
    let badGrades = Number(input.shift());
    let problem = input.shift();
    let grade = Number(input.shift());

    let numberOfProblems = 0;
    let lastProblem = '';
    let sum = 0;
    let badGradesCounter = 0;

    while (problem != 'Enough') {
        numberOfProblems++;
        sum += grade;
        lastProblem = problem;
        if (grade <= 4) {
            badGradesCounter++;
            if (badGradesCounter == badGrades) {
                console.log(`You need a break, ${badGradesCounter} poor grades.`);
                break;
            }
        }
        problem = input.shift();
        grade = Number(input.shift());
    }
    let average = sum / numberOfProblems;
    if (problem == 'Enough') {
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);



    }

}

name([3,
    "Money",
    6,
    "Story",
    4,
    "Spring Time",
    5,
    "Bus",
    6,
    "Enough"
])