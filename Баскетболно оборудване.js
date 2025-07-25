function bascketballbasketballЕquipment(yearPrice) {
    let sneakers = yearPrice - (yearPrice * 0.40);
    let outfit = sneakers - (sneakers * 0.20);
    let ball = outfit / 4;
    let accessoars = ball / 5;

    let price = yearPrice + sneakers + outfit + ball + accessoars;

    console.log(price);
}

bascketballbasketballЕquipment(550)