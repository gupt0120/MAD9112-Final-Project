function getDaysUntilChristmas (todayDay, DayOfChristmas){
    return DayOfChristmas - todayDay
}
let daysLeft = getDaysUntilChristmas (12, 25)
console.log(daysLeft, "because nothing says holiday spirit like counting down the days until you find out if you're on the naughty or nice commit list!");