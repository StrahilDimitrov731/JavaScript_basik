function workTime(input) {
    let time = Number(input.shift());
    let day = input.shift();

    if (time >= 10 && time <= 18) {
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("OPEN");
                break;
            default:
                console.log("CLOSE");
                break;
        }
    }
    else {
        console.log("CLOSE");
    }
}

workTime(
    [
        "11",
        "Sunday"
    ]
)