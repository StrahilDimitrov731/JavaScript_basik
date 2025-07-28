function repanting(input) {
    let protectiveNylonPrice = 1.50;
    let paingPrice = 14.50;
    let paintThinnerPrice = 5.00;

    let amountOfNylon = Number(input[0]);
    let amountOfPaint = Number(input[1]);
    let amountOfPaintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonSum = (amountOfNylon + 2) * protectiveNylonPrice;
    let paintSum = (amountOfPaint + (amountOfPaint * 10 / 100)) * paingPrice;
    let paintThinnerSum = amountOfPaintThinner * paintThinnerPrice;
    let sum = nylonSum + paintSum + paintThinnerSum + 0.40;
    let workersSum = (sum * 30 / 100) * workHours;
    let allSum = sum + workersSum;

    console.log(allSum);
}

repanting(
    [
        "5",
        "10",
        "10",
        "1"
    ]
)