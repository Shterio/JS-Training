function name(input) {
    let examTime = Number(input[0]);
    let examMinutes = Number(input[1]);
    let timeOfComing = Number(input[2]);
    let minutesOfComing = Number(input[3]);

    let exam = examTime * 60 + examMinutes;
    let coming = timeOfComing * 60 + minutesOfComing;

    let finalMinutes = Math.abs(exam - coming);
    let hours = Math.floor(finalMinutes / 60);
    let minutes = finalMinutes % 60;

    if (coming > exam) {
        console.log('Late');
        if (hours == 0) {
            console.log(`${minutes} minutes after the start`);
            
        } else if (hours > 0 && minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`);
            
        } else if (hours > 0 && minutes >=10) {
            console.log(`${hours}:${minutes} hours after the start`);
        }
    }
}