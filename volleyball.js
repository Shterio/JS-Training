function name(input) {
    let year = input[0];
    let holidays = Number(input[1]);
    let weekends = Number(input[2]);

    let gamesWeek = (48 - weekends) * 3/4;
    let gamesHolidays = holidays * 2/3;

    let games = gamesWeek + gamesHolidays + weekends;

    if (year == 'leap') {
        games = games + games * 0.15;
    }

    console.log(Math.floor(games));
    
}

name(['leap', 5, 2])