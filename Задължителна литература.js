function requiredReading(input) {
    let numberPageCurrentBook = Number(input[0]);
    let readPagePerOneHour = Number(input[1]);
    let numberDaysNeedReadBook = Number(input[2]);

    let allTimeReadBook = numberPageCurrentBook / readPagePerOneHour;
    let needHourPerDay = allTimeReadBook / numberDaysNeedReadBook;

    console.log(needHourPerDay);
}

requiredReading(
    [
        "432",
        "15",
        "4"
    ]
)