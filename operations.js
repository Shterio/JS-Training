function name(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let operator = input[2];

    let operation = null;
    let type = undefined;

    if (operator == '+') {
        operation = a + b;
        if (operation % 2 == 0) {
            type = 'even'
        } else {
            type = 'odd'
        }
    } else if (operator == '-') {
        operation = a - b;
        if (operation % 2 == 0) {
            type = 'even'
        } else {
            type = 'odd'
        }
    } else if (operator == '*') {
        operation = a * b;
        if (operation % 2 == 0) {
            type = 'even'
        } else {
            type = 'odd'
        }
    } else if (operator == '/') {
        operation = a / b;
        if (a != 0 && b != 0) {
            console.log(`${a} ${operator} ${b} = ${operation.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${a} by zero`);
        }
        
    } else if (operator == '%') {
        operation = a % b;
        if (a != 0 && b != 0) {
            console.log(`${a} ${operator} ${b} = ${operation}`);
        } else {
            console.log(`Cannot divide ${a} by zero`);
        }
    }

    if (operator == '+' || operator == '-' || operator == '*') {
        console.log(`${a} ${operator} ${b} = ${operation} - ${type}`);
    }
      
    
}

name([10, 0, '%'])